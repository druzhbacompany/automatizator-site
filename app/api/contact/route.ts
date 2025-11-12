import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const ip =
      (req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '')
        .split(',')[0].trim() || '127.0.0.1';

    const clen = parseInt(req.headers.get('content-length') || '0', 10);
    if (clen > 10_000) {
      return new Response(JSON.stringify({ ok: false, error: 'PAYLOAD_TOO_LARGE' }), {
        status: 413, headers: { 'Content-Type': 'application/json' },
      });
    }

    try {
      const { rateLimitOk } = await import('@/lib/rate-limit');
      if (!rateLimitOk(`contact:${ip}`, { windowMs: 60_000, max: 8 })) {
        return new Response(JSON.stringify({ ok:false, error:'RATE_LIMITED' }), {
          status: 429,
          headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
        });
      }
    } catch {}

    const body = await req.json().catch(() => ({} as any));
    const { name, email, phone, message, website, ts } = body || {};

    if (typeof website === 'string' && website.trim().length > 0) {
      return new Response(JSON.stringify({ ok:false, error:'SPAM_DETECTED' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    const now = Date.now();
    const clientTs = Number(ts) || 0;
    if (!clientTs || now - clientTs < 1500) {
      return new Response(JSON.stringify({ ok:false, error:'TOO_FAST' }), {
        status: 400, headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!name || !message) {
      return new Response(JSON.stringify({ ok:false, error:'VALIDATION_ERROR' }), {
        status: 400, headers: { 'Content-Type':'application/json' },
      });
    }

    const bot  = process.env.TELEGRAM_BOT_TOKEN;
    const chat = process.env.TELEGRAM_CHAT_ID;
    const crm  = process.env.CRM_WEBHOOK_URL;

    const tasks: Promise<any>[] = [];

    if (bot && chat) {
      const text = [
        '🆕 Заявка с сайта',
        `IP: ${ip}`,
        `Имя: ${name}`,
        email ? `Email: ${email}` : null,
        phone ? `Телефон: ${phone}` : null,
        `Сообщение: ${message}`
      ].filter(Boolean).join('\n');

      tasks.push(fetch(`https://api.telegram.org/bot${bot}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ chat_id: chat, text })
      }));
    }

    if (crm) {
      tasks.push(fetch(crm, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ source:'site', ip, name, email, phone, message, ts: now })
      }));
    }

    await Promise.allSettled(tasks);

    return new Response(JSON.stringify({ ok:true }), {
      status: 200, headers: { 'Content-Type':'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ ok:false, error:'SERVER_ERROR' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
}
