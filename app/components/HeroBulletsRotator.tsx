'use client';

import { useEffect, useState } from 'react';

const BULLETS = [
  'Автоматизация процессов на базе Telegram-ботов, CRM и n8n / Make — без зоопарка из «костылей».',
  'Настраиваем воронки, напоминания, оплаты и уведомления так, чтобы заявки не терялись в чатах.',
  'Работаем по SLA: регламенты, сроки реакции и понятные правила вместо «фрилансера, который пропал перед запуском».',
  'Формат небольшой студии: берём ограниченное число проектов и погружаемся в ваши процессы, а не в «поток».'
];

const ROTATION_INTERVAL_MS = 4500;

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
    <div className="mt-6 flex items-center justify-center min-h-[3.25rem]">
      <p className="text-xl md:text-2xl font-semibold tracking-tight text-emerald-50 text-center">
        {current}
      </p>
    </div>
  );
}
