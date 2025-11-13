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
};

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

    console.log('[contact] new lead', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      ts: body.ts,
      source: body.source,
      context: body.context,
    });

    // TODO: сюда позже добавим отправку в Telegram / CRM / почту
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('[contact] error', error);
    return NextResponse.json(
      { ok: false, error: 'INTERNAL_ERROR' },
      { status: 500 },
    );
  }
}