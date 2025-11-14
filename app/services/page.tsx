import type { Metadata } from 'next';
import { Suspense } from 'react';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Услуги по автоматизации для онлайн-школ, салонов и локального бизнеса | Automatizator',
  description:
    'Telegram-боты, автоматизации на n8n, интеграции GetCourse и Salebot, записи и напоминания для салонов и локального бизнеса, парсеры, WooCommerce-каталоги и отчёты — помогаем убрать ручную рутину и навести порядок в процессах.',
};

export default function ServicesPage() {
  // Оборачиваем в Suspense, так как ServicesContent использует useSearchParams()
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-slate-50">
          <div className="max-w-5xl mx-auto px-4 py-10 lg:py-14">Загрузка услуг...</div>
        </div>
      }
    >
      <ServicesContent />
    </Suspense>
  );
}