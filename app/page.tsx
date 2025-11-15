import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

import { CTA, FEATURES, HERO, SEGMENTS, STEPS } from '@/data/home';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]">
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-14 lg:pt-20 lg:pb-18 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{HERO.kicker}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4 max-w-3xl mx-auto">
            {HERO.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            {HERO.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <Link
              href={HERO.primaryCtaHref}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              {HERO.primaryCtaText}
            </Link>
            <Link
              href={HERO.secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900/60 transition"
            >
              {HERO.secondaryCtaText}
            </Link>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Кому мы помогаем
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl mx-auto">
              Работаем с теми, у кого уже есть клиенты и живая операционка — и где ручные процессы мешают расти.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {SEGMENTS.map((segment) => (
              <div key={segment.id} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-lg font-semibold text-slate-50 mb-2">{segment.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow">{segment.lead}</p>
                <ul className="space-y-2 text-xs text-slate-300 mb-5">
                  {segment.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-emerald-500 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link href={segment.href} className="mt-auto inline-flex items-center justify-center rounded-full bg-slate-700/50 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-700 transition">
                  {segment.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 lg:py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Что мы делаем
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl mx-auto">
              Собираем рабочие системы вокруг ваших текущих платформ, а не продаём “ещё один модный бот”.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                <h3 className="text-lg font-semibold text-slate-50 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{feature.lead}</p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Как мы работаем
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {STEPS.map((step) => (
              <div key={step.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
                  <span className="text-xs text-slate-400">{step.timeHint}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{step.lead}</p>
                <ul className="space-y-2 text-xs text-slate-300">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-emerald-500 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="rounded-2xl border border-emerald-500/60 bg-gradient-to-b from-emerald-500/10 to-transparent p-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              {CTA.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
              {CTA.subtitle}
            </p>
            <ul className="inline-block text-left space-y-2 text-sm text-slate-200 mb-8">
              {CTA.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 items-center">
                  <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link
                href={CTA.buttonHref}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
              >
                {CTA.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
