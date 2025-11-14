'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
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

export default function ServicesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeSegment, setActiveSegment] = useState<'all' | SegmentKey>('all');

  // Синхронизация state с ?segment=...
  useEffect(() => {
    const seg = searchParams.get('segment');
    if (seg === 'edtech' || seg === 'beauty' || seg === 'local') {
      setActiveSegment(seg);
    } else {
      setActiveSegment('all');
    }
  }, [searchParams]);

  const handleSegmentClick = (id: 'all' | SegmentKey) => {
    setActiveSegment(id);

    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (id === 'all') {
      params.delete('segment');
    } else {
      params.set('segment', id);
    }
    const qs = params.toString();
    router.push(qs ? `/services?${qs}` : '/services', { scroll: false });
  };

  const filtered = SERVICES.filter((service) => {
    if (activeSegment === 'all') return true;
    if (!service.segments || service.segments.length === 0) return true; // безопасный дефолт
    return service.segments.includes(activeSegment);
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10 lg:py-14">
        {/* ГЛАВНЫЙ БЛОК: УСЛУГИ + ФИЛЬТР ПО ТИПУ БИЗНЕСА */}
        <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-950/85 px-4 py-5 shadow-[0_18px_45px_rgba(0,0,0,0.7)] sm:px-6 sm:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                услуги и решения
              </p>
              <h1 className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
                Услуги и решения под вашу задачу
              </h1>
              <p className="max-w-xl text-sm text-slate-300">
                Сайты, боты, n8n, интеграции, парсинг и отчёты. Подбираем набор под вашу задачу:
                онлайн-школа, салон или локальный сервис.
              </p>
            </div>
            <div className="max-w-xs text-xs text-slate-400">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300">
                Фильтр по типу бизнеса
              </p>
              <p>
                Выберите, кто вы — и список услуг подстроится под вашу ситуацию. Можно начать с{' '}
                <span className="text-emerald-300">«Все направления»</span>, а потом сузить до
                своего сегмента.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {SEGMENT_FILTERS.map((seg) => {
              const isActive = seg.id === activeSegment;
              return (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => handleSegmentClick(seg.id)}
                  className={[
                    'inline-flex flex-col items-start justify-center rounded-2xl border px-3 py-2 text-left text-xs transition sm:px-4 sm:py-3 sm:text-[13px]',
                    isActive
                      ? 'border-emerald-400 bg-emerald-500/10 text-emerald-100 shadow shadow-emerald-500/30'
                      : 'border-slate-700 bg-slate-900/80 text-slate-300 hover:border-emerald-400/80 hover:text-emerald-100',
                  ].join(' ')}
                >
                  <span className="mb-0.5 text-[12px] font-semibold sm:text-[13px]">
                    {seg.label}
                  </span>
                  {seg.description && (
                    <span className="text-[11px] text-slate-400">{seg.description}</span>
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

                <h2 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-200 sm:text-base">
                  {service.title}
                </h2>

                {service.short && (
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">{service.short}</p>
                )}

                <div className="mt-4 flex items-center gap-1 text-[12px] font-medium text-emerald-400">
                  <span>Подробнее об услуге</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-6 text-sm text-slate-400">
              По выбранному сегменту пока нет отдельных услуг — выберите другой фильтр или напишите
              нам, чтобы обсудить кастомное решение.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}