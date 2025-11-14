import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Услуги по автоматизации для онлайн-школ, салонов и локального бизнеса | Automatizator',
  description:
    'Telegram-боты, автоматизации на n8n, интеграции GetCourse и Salebot, записи и напоминания для салонов и локального бизнеса, парсеры, WooCommerce-каталоги и отчёты — помогаем убрать ручную рутину и навести порядок в процессах.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}