'use client';

import { useState } from 'react';
import Link from 'next/link';
import rawServices from '@/data/services.long.json';

type SegmentKey = 'edtech' | 'beauty' | 'local';

type Service = (typeof rawServices)[number] & {
  segments?: SegmentKey[];
};

const SERVICES = rawServices as Service[];

const SEGMENT_LABELS: Record<SegmentKey, string> = {
  edtech: 'Онлайн-школы и эксперты',
  beauty: 'Салоны и студии',
  local: 'Локальный бизнес и сервисы',
};

const SEGMENT_FILTERS: {
  id: 'all' | SegmentKey;
  label: string;
  description?: string;
}[] = [
  {
    id: 'all',
    label: 'Все направления',
    description: 'Показать все услуги сразу',
  },
  {
    id: 'edtech',
    label: 'Онлайн-школы и эксперты',
    description: 'Запуски, автоворонки, интеграции GetCourse/Salebot',
  },
  {
    id: 'beauty',
    label: 'Салоны и студии',
    description: 'Запись, напоминания, календарь мастеров',
  },
  {
    id: 'local',
    label: 'Локальный бизнес',
    description: 'Автомойки, СТО, тренеры, залы и офлайн-сервисы',
  },
];

export const metadata: Metadata = {
  title: "Услуги по автоматизации для онлайн-бизнеса | Automatizator",
  description:
    "Telegram-боты, автоматизации на n8n, интеграции GetCourse / Salebot / Bizon365 / Vakas-Tools, парсеры, WooCommerce-каталоги и отчёты — услуги команды Automatizator.",
};

export default function ServicesPage() {
  const [activeSegment, setActiveSegment] = useState<'all' | SegmentKey>('all');

  const filtered = SERVICES.filter((service) => {
    if (activeSegment === 'all') return true;
    if (!service.segments || service.segments.length === 0) return true; // безопасный дефолт
    return service.segments.includes(activeSegment);
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10 lg:py-14">
        {/* заголовок страницы */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            Услуги и решения
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            Сайты, боты, n8n, интеграции, парсинг и отчёты. Подбираем набор под
            вашу задачу: онлайн-школа, салон или локальный сервис.
          </p>
        </header>

        {/* ФИЛЬТРЫ ПО СЕГМЕНТАМ */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {SEGMENT_FILTERS.map((seg) => {
              const isActive = seg.id === activeSegment;
              return (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => setActiveSegment(seg.id)}
                  className={[
                    'inline-flex flex-col items-start justify-center rounded-2xl border px-3 py-2 text-left text-xs transition',
                    isActive
                      ? 'border-emerald-500/80 bg-emerald-500/10 text-emerald-200'
                      : 'border-slate-800 bg-slate-900/70 text-slate-300 hover:border-emerald-500/60 hover:text-emerald-200',
                  ].join(' ')}
                >
                  <span className="font-semibold text-[12px] mb-0.5">
                    {seg.label}
                  </span>
                  {seg.description && (
                    <span className="text-[11px] text-slate-400">
                      {seg.description}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* СЕТКА УСЛУГ, ОТФИЛЬТРОВАННАЯ ПО СЕГМЕНТАМ */}
        <section aria-label="Список услуг">
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-emerald-500/80 hover:bg-slate-900"
              >
                {/* бейджи сегментов */}
                {service.segments && service.segments.length > 0 && (
                  <div className="mb-2 flex flex-wrap gap-1">
                    {service.segments.map((seg) => (
                      <span
                        key={seg}
                        className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-400"
                      >
                        {SEGMENT_LABELS[seg]}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="text-sm sm:text-base font-semibold text-slate-50 group-hover:text-emerald-200">
                  {service.title}
                </h2>

                {service.short && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-300">
                    {service.short}
                  </p>
                )}

                <div className="mt-4 text-[12px] font-medium text-emerald-400 flex items-center gap-1">
                  <span>Подробнее об услуге</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-6 text-sm text-slate-400">
              По выбранному сегменту пока нет отдельных услуг — выберите другой
              фильтр или напишите нам, чтобы обсудить кастомное решение.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
