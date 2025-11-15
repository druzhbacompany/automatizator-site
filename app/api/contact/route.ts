import { NextRequest, NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
  ts?: number;
  source?: string;
  context?: string;
  plan?: string;
};

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendToTelegram(payload: ContactPayload) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.warn('[contact] TELEGRAM env not configured, skipping Telegram send');
    return;
  }

  const dt = payload.ts ? new Date(payload.ts) : new Date();

  const lines = [
    'Новая заявка с сайта Automatizator',
    '',
    `Имя: ${payload.name || '—'} `,
    `Email: ${payload.email || '—'} `,
    `Телефон: ${payload.phone || '—'} `,
  ];

  if (payload.plan) {
    lines.push(`План: ${payload.plan}`);
  }

  lines.push(
    `Источник: ${payload.source || '—'} `,
    `Контекст: ${payload.context || '—'} `,
    `Время: ${dt.toISOString()}`,
    '',
    'Сообщение:',
    payload.message || '—',
  );

  const text = lines.join('\n');

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        // parse_mode: 'HTML', // Note: Disabling HTML parse_mode as the text doesn't contain HTML tags.
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.error('[contact] Telegram send failed', res.status, body);
    }
  } catch (error) {
    console.error('[contact] Telegram fetch failed', error);
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactPayload;

    // honeypot: если "website" заполнен — считаем спамом и молча отвечаем ok
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // обязательные поля
    if (!body.name || !body.message) {
      return NextResponse.json(
        { ok: false, error: 'MISSING_REQUIRED_FIELDS' },
        { status: 400 },
      );
    }

    const lead: ContactPayload = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      website: body.website,
      ts: body.ts,
      source: body.source,
      context: body.context,
      plan: body.plan,
    };

    console.log('[contact] New contact lead', lead);

    await sendToTelegram(lead);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('[contact] error', error);
    return NextResponse.json(
      { ok: false, error: 'INTERNAL_ERROR' },
      { status: 500 },
    );
  }
}