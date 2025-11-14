import type { Metadata } from 'next';
import { Suspense } from 'react';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Цены и пакеты — Automatizator',
  description:
    'Реализуем небольшие задачи и собираем пакеты автоматизации под ключ: боты, n8n, интеграции, отчёты и сопровождение для онлайн-школ, салонов и локального бизнеса.',
};

export default function PricingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-10 lg:py-14">
            Загрузка цен и пакетов…
          </div>
        </div>
      }
    >
      <PricingContent />
    </Suspense>
  );
}
