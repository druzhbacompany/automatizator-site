import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, phone, message } = body || {};
    if (!name || !message) {
      return new Response(JSON.stringify({ ok:false, error:'VALIDATION_ERROR' }), { status: 400, headers:{'Content-Type':'application/json'} });
    }

    const bot  = process.env.TELEGRAM_BOT_TOKEN;
    const chat = process.env.TELEGRAM_CHAT_ID;
    const crm  = process.env.CRM_WEBHOOK_URL;

    const tasks: Promise<any>[] = [];

    if (bot && chat) {
      const text = [
        '🆕 Заявка с сайта',
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
        body: JSON.stringify({ source:'site', name, email, phone, message, ts: Date.now() })
      }));
    }

    await Promise.allSettled(tasks);
    return new Response(JSON.stringify({ ok:true }), { status: 200, headers:{'Content-Type':'application/json'} });
  } catch {
    return new Response(JSON.stringify({ ok:false, error:'SERVER_ERROR' }), { status: 500, headers:{'Content-Type':'application/json'} });
  }
}
