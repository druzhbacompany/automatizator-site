'use client';

import { useState } from 'react';

type ContactFormProps = {
  compact?: boolean;
  source?: string;
  context?: string;
  defaultMessage?: string;
  initialPlan?: string;
};

function normalizeAndValidatePhone(raw: string): { ok: boolean; value: string; error?: string } {
  const cleaned = raw.replace(/[^\d+]/g, ''); // убираем пробелы, скобки, тире

  // Если пусто — считаем, что телефон не обязателен
  if (!cleaned.trim()) {
    return { ok: true, value: '' };
  }

  // Разрешаем варианты: +7XXXXXXXXXX, 8XXXXXXXXXX, 7XXXXXXXXXX
  let digits = cleaned;

  if (/^(\+7|7|8)\d{10}$/.test(digits)) {
    // приводим к +7XXXXXXXXXX
    if (digits.startsWith('8')) {
      digits = '+7' + digits.slice(1);
    } else if (digits.startsWith('7')) {
      digits = '+7' + digits.slice(1);
    }
    return { ok: true, value: digits };
  }

  return {
    ok: false,
    value: raw,
    error: 'Некорректный номер телефона. Укажите в формате +7 999 123-45-67.',
  };
}

export default function ContactForm({
  compact = false,
  source,
  context,
  defaultMessage,
  initialPlan,
}: ContactFormProps) {
  const [ts] = useState(() => Date.now());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(() => {
    if (initialPlan) {
      return `Хочу обсудить: ${initialPlan}\n\n`;
    }
    return defaultMessage ?? '';
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [err, setErr] = useState<string | undefined>(undefined);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(undefined);

    const phoneCheck = normalizeAndValidatePhone(phone);

    if (!phoneCheck.ok) {
      setLoading(false);
      setOk(false);
      setErr(phoneCheck.error);
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: phoneCheck.value,
          message,
          website: '',
          ts,
          source,
          context,
          plan: initialPlan,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data?.ok === false) {
        setOk(false);
        setErr(data?.error || 'REQUEST_FAILED');
      } else {
        setOk(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage(defaultMessage ?? '');
      }
    } catch {
      setOk(false);
      setErr('NETWORK_ERROR');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl w-full space-y-3">
      <div className="grid gap-3">
        {/* honeypot */}
        <input
          name="website"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
          aria-hidden="true"
        />

        {initialPlan && (
          <div className="mb-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-100">
            <div className="font-semibold text-emerald-300">Вы выбрали:</div>
            <div className="text-emerald-100">{initialPlan}</div>
          </div>
        )}

        <input
          className="input"
          placeholder="Имя *"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            className="input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="input"
            placeholder="Телефон"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>

        <textarea
          className="textarea"
          placeholder="Сообщение *"
          rows={compact ? 4 : 6}
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
      </div>

      <button disabled={loading} className="btn">
        {loading ? 'Отправка…' : 'Отправить'}
      </button>

      {ok === true && (
        <p className="text-green-500 text-sm">Готово! Мы свяжемся с вами.</p>
      )}
      {ok === false && (
        <p className="text-red-500 text-sm">Ошибка: {err}</p>
      )}

      <style jsx>{`
        .input {
          background: #111;
          border: 1px solid #2a2a2a;
          border-radius: 10px;
          padding: 12px 14px;
        }
        .textarea {
          background: #111;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          padding: 12px 14px;
        }
        .btn {
          background: #e11d48;
          color: #fff;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 700;
        }
        .btn:disabled {
          opacity: 0.6;
        }
      `}</style>
    </form>
  );
}