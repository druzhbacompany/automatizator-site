'use client';
import { useState } from 'react';

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean|null>(null);
  const [err, setErr] = useState<string|undefined>(undefined);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(undefined);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ name, email, phone, message })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data?.ok === false) {
        setOk(false);
        setErr(data?.error || 'REQUEST_FAILED');
      } else {
        setOk(true);
        setName(''); setEmail(''); setPhone(''); setMessage('');
      }
    } catch {
      setOk(false); setErr('NETWORK_ERROR');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl w-full space-y-3">
      <div className="grid gap-3">
        <input className="input" placeholder="Имя *" value={name} onChange={e=>setName(e.target.value)} required />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input className="input" placeholder="Телефон" value={phone} onChange={e=>setPhone(e.target.value)} />
        </div>
        <textarea className="textarea" placeholder="Сообщение *" rows={compact?4:6} value={message} onChange={e=>setMessage(e.target.value)} required />
      </div>
      <button disabled={loading} className="btn">
        {loading ? 'Отправка…' : 'Отправить'}
      </button>
      {ok === true && <p className="text-green-500 text-sm">Готово! Мы свяжемся с вами.</p>}
      {ok === false && <p className="text-red-500 text-sm">Ошибка: {err}</p>}
      <style jsx>{`
        .input{background:#111;border:1px solid #2a2a2a;border-radius:10px;padding:12px 14px}
        .textarea{background:#111;border:1px solid #2a2a2a;border-radius:12px;padding:12px 14px}
        .btn{background:#e11d48;color:#fff;padding:12px 18px;border-radius:10px;font-weight:700}
        .btn:disabled{opacity:.6}
      `}</style>
    </form>
  );
}
