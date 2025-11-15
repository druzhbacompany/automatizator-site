import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import {
  APPROACH_CTA,
  APPROACH_HERO,
  FIT_SECTION,
  FORMATS,
  FULL_CYCLE,
  PRINCIPLES,
  WHO_WE_ARE,
} from '@/data/approach';

export const metadata: Metadata = {
  title: 'Подход к автоматизации — Automatizator',
  description: APPROACH_HERO.subtitle,
};

export default function ApproachPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]">
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-14 lg:pt-20 lg:pb-18 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>{APPROACH_HERO.kicker}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4 max-w-3xl mx-auto">
            {APPROACH_HERO.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            {APPROACH_HERO.subtitle}
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {WHO_WE_ARE.title}
            </h2>
          </div>
          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {WHO_WE_ARE.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-12 lg:py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Наши принципы
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                <h3 className="text-lg font-semibold text-slate-50 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL_CYCLE */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {FULL_CYCLE.title}
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl mx-auto">
              {FULL_CYCLE.subtitle}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {FULL_CYCLE.items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col">
                <h3 className="text-lg font-semibold text-slate-50 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow">{item.text}</p>
                <Link href={item.linkHref} className="mt-auto inline-flex items-center justify-center rounded-full bg-slate-700/50 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-700 transition w-fit">
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-12 lg:py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Форматы работы
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {FORMATS.map((format) => (
              <div key={format.id} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="text-lg font-semibold text-slate-50 mb-2">{format.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow">{format.lead}</p>
                <ul className="space-y-2 text-xs text-slate-300 mb-5">
                  {format.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <CheckCircleIcon className="h-4 w-4 flex-shrink-0 text-emerald-500 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {format.linkHref && (
                  <Link href={format.linkHref} className="mt-auto inline-flex items-center justify-center rounded-full bg-slate-700/50 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-700 transition">
                    {format.linkText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIT / NOT FIT */}
      <section className="py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {FIT_SECTION.title}
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl mx-auto">
              {FIT_SECTION.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
              <h3 className="font-semibold text-lg mb-4 text-slate-50">✅ Мы вам подходим, если:</h3>
              <ul className="space-y-3 text-sm text-slate-200">
                {FIT_SECTION.fits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-500/40 bg-rose-500/10 p-6">
              <h3 className="font-semibold text-lg mb-4 text-slate-50">❌ Мы не сработаемся, если:</h3>
              <ul className="space-y-3 text-sm text-slate-200">
                {FIT_SECTION.notFits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <XCircleIcon className="h-5 w-5 flex-shrink-0 text-rose-400 mt-0.5" />
                    <span>{item}</span>
                  </li>
))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="rounded-2xl border border-emerald-500/60 bg-gradient-to-b from-emerald-500/10 to-transparent p-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              {APPROACH_CTA.title}
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
              {APPROACH_CTA.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={APPROACH_CTA.buttonPrimaryHref}
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
              >
                {APPROACH_CTA.buttonPrimaryText}
              </Link>
              <Link
                href={APPROACH_CTA.buttonSecondaryHref}
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900/60 transition"
              >
                {APPROACH_CTA.buttonSecondaryText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
