import type { Metadata } from 'next';
import { Suspense } from 'react';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Тарифы START / GROW / SCALE и разовые задачи по автоматизации',
  description:
    'Пакеты START, GROW и SCALE для автоматизации и интеграций: от MVP-бота до сопровождения сложных систем. Плюс формат разовых задач для точечных доработок и аварийных фиксов.',
  openGraph: {
    title: 'Тарифы на автоматизацию и сопровождение',
    description:
      'Выберите уровень: START для MVP, GROW для стабильных запусков, SCALE для масштабирования и сетки продуктов. Есть формат разовых задач без долгих контрактов.',
    url: '/pricing',
    type: 'website'
  }
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
