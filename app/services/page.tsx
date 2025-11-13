import type { Metadata } from 'next';
import Link from 'next/link';
import servicesData from '@/data/services.long.json';

type PricingRef = 'start' | 'grow' | 'scale';

type Service = {
  slug: string;
  title: string;
  lead: string;
  who?: string[];
  benefits?: string[];
  pricingRef?: PricingRef;
};

const services = servicesData as Service[];

export const metadata: Metadata = {
  title: 'Услуги по автоматизации — Automatizator',
  description:
    'Услуги по автоматизации для онлайн-школ и проектов: Telegram-боты, n8n, интеграции GetCourse/Salebot/Bizon/Vakas, парсеры, WooCommerce-каталоги, отчёты и дашборды.',
};

const pricingLabel: Record<PricingRef, { label: string; hint: string }> = {
  start: {
    label: 'START',
    hint: 'быстрый вход и MVP',
  },
  grow: {
    label: 'GROW',
    hint: 'рост и оптимизация',
  },
  scale: {
    label: 'SCALE',
    hint: 'масштаб и каталоги',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* HERO */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Стек услуг по автоматизации
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Что именно я могу автоматизировать
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Ниже — набор услуг, из которых собираются пакеты START / GROW / SCALE: боты, автоматизации на n8n,
              интеграции GetCourse/Salebot/Bizon/Vakas, парсеры, лендинги, WooCommerce-каталоги и отчётность.
            </p>
          </div>
          <p className="max-w-2xl text-xs text-slate-400 sm:text-sm">
            На консультации мы не «продаём услугу ради услуги», а подбираем комбинацию, которая закроет ваши провалы в
            процессах и цифрах. Иногда это один Telegram-бот, иногда — связка бота, n8n и отчётов.
          </p>
        </section>

        {/* СПИСОК УСЛУГ */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Услуги и направления
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Каждая карточка — отдельное направление с полной расшифровкой: для кого, какие эффекты по бизнесу, что
              сдаётся на выходе и как устроен процесс. На отдельной странице услуги — детали, кейсы, риски и FAQ.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {services.map((service) => {
              const pricing =
                service.pricingRef && pricingLabel[service.pricingRef as PricingRef];

              const whoPreview = service.who?.slice(0, 2) ?? [];
              const benefitsPreview = service.benefits?.slice(0, 2) ?? [];

              return (
                <article
                  key={service.slug}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-emerald-500/70 hover:bg-slate-900"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-slate-50 sm:text-xl">
                          <Link
                            href={`/services/${service.slug}`}
                            className="transition hover:text-emerald-300"
                          >
                            {service.title}
                          </Link>
                        </h3>
                        {pricing && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                            {pricing.label}
                            <span className="text-[9px] font-normal normal-case text-emerald-200/80">
                              {pricing.hint}
                            </span>
                          </span>
                        )}
                      </div>
                      {service.lead && (
                        <p className="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                          {service.lead}
                        </p>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-emerald-300 sm:mt-0">
                      <span className="hidden text-[11px] uppercase tracking-wide text-slate-400 sm:inline">
                        Детали услуги
                      </span>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 group-hover:text-emerald-200"
                      >
                        Подробнее
                        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {whoPreview.length > 0 && (
                      <div className="space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          Для кого
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-300 sm:text-[13px]">
                          {whoPreview.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-slate-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {benefitsPreview.length > 0 && (
                      <div className="space-y-1.5">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          Что меняется по бизнесу
                        </p>
                        <ul className="space-y-1.5 text-xs text-slate-300 sm:text-[13px]">
                          {benefitsPreview.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-emerald-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Необязательно сразу выбирать услугу
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Опишите, где именно сейчас «болит»: заявки, выдача доступов, интеграции, отчёты. Я предложу 1–2 связки из
            услуг выше и покажу, что именно изменится по цифрам и рутине.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Обсудить задачу
            </a>
            <p className="text-xs text-slate-400 sm:text-sm">
              Можно просто скинуть ссылку на текущие сервисы и кратко описать проблему — дальше я задам точечные
              вопросы.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
