'use client';

import { useEffect, useState } from 'react';

const BULLETS = [
  'Автоматизация процессов на базе Telegram-ботов, CRM и n8n / Make — без зоопарка из «костылей».',
  'Настраиваем воронки, напоминания, оплаты и уведомления так, чтобы заявки не терялись в чатах.',
  'Работаем по SLA: регламенты, сроки реакции и понятные правила вместо «фрилансера, который пропал перед запуском».',
  'Формат небольшой студии: берём ограниченное число проектов и погружаемся в ваши процессы, а не в «поток».'
];

// Интервал смены — 4000 мс
const ROTATION_INTERVAL_MS = 4000;

export function HeroBulletsRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % BULLETS.length);
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(id);
  }, []);

  const current = BULLETS[index];

  return (
    <div className="mt-7 flex items-center justify-center min-h-[4rem] md:min-h-[4.5rem]">
      <div className="inline-flex max-w-4xl items-center justify-center rounded-full border border-amber-400/80 bg-slate-900/80 px-7 py-3.5 shadow-[0_0_36px_rgba(251,191,36,0.4)]">
        <p className="text-2xl md:text-3xl font-semibold tracking-tight text-amber-200 text-center">
          {current}
        </p>
      </div>
    </div>
  );
}
