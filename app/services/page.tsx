import type { Metadata } from 'next';
import ServicesContent from './ServicesContent';

export const metadata: Metadata = {
  title: 'Услуги по автоматизации для онлайн-бизнеса | Automatizator',
  description:
    'Telegram-боты, автоматизации на n8n, интеграции GetCourse / Salebot / Bizon365 / Vakas-Tools, парсеры, WooCommerce-каталоги и отчёты — услуги команды Automatizator.',
};

export default function ServicesPage() {
  return <ServicesContent />;
}