import type { Metadata } from "next";
import Link from "next/link";
import servicesData from "@/data/services.long.json";

type Service = {
  slug: string;
  title?: string;
  name?: string;
  shortTitle?: string;
  lead?: string;
  category?: string;
};

const SERVICE_CARDS: Service[] = (servicesData as Service[]);

export const metadata: Metadata = {
  title: "Услуги по автоматизации для онлайн-бизнеса | Automatizator",
  description:
    "Telegram-боты, автоматизации на n8n, интеграции GetCourse / Salebot / Bizon365 / Vakas-Tools, парсеры, WooCommerce-каталоги и отчёты — услуги команды Automatizator.",
};

export default function ServicesPage() {
  return (
    <main className="border-t border-slate-800 bg-slate-950 text-slate-50">
      <div className="container mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <header className="mb-10 space-y-4 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            услуги
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl lg:text-4xl">
            Услуги по автоматизации для онлайн-школ и проектов
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Мы собираем устойчивые связки из ботов, n8n-сценариев, интеграций
            и отчётов под ваш стек: GetCourse, Salebot, Bizon365, Vakas-Tools,
            WooCommerce и другие сервисы. Ниже — направления, из которых
            формируем пакеты START / GROW / SCALE.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 sm:text-sm">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Онлайн-школы, продюсерские центры, эксперты
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Telegram-воронки, вебинары, B2C-проекты
            </span>
          </div>
        </header>

        <section className="mb-12 space-y-4">
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Как читать эту страницу
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Каждая карточка ниже — отдельное направление. На странице услуги
            разбираем: для кого это решение, какие эффекты по бизнесу,
            что сдаётся на выходе, из каких этапов состоит работа, какие
            есть риски и ограничения. Если не хотите разбираться в деталях —
            можно просто оставить общую заявку, и мы сами соберём комбинацию
            из нескольких услуг.
          </p>
        </section>

        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Направления и услуги
            </h2>
            <p className="hidden text-xs text-slate-400 sm:block">
              Кликните по карточке, чтобы открыть подробную страницу.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {SERVICE_CARDS.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-emerald-500/70 hover:bg-slate-900"
              >
                <div className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-wide text-emerald-300">
                  {service.category && (
                    <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5">
                      {service.category}
                    </span>
                  )}
                  <span className="text-slate-400 group-hover:text-emerald-200">
                    Услуга команды Automatizator
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {service.shortTitle || service.title || service.name || "Услуга автоматизации"}
                </h3>
                {service.lead && (
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    {service.lead}
                  </p>
                )}
                {!service.lead && (
                  <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                    Подробно разбираем задачу, подбираем стек, описываем
                    этапы и финальные результаты. На странице услуги —
                    формат работы, артефакты и FAQ.
                  </p>
                )}
                <p className="mt-3 text-[11px] font-medium uppercase tracking-wide text-emerald-300">
                  Открыть подробную страницу услуги →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-4 rounded-2xl border border-emerald-500/60 bg-gradient-to-r from-emerald-500/10 via-slate-900/80 to-slate-950 p-5">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
            Не обязательно сразу выбирать услугу
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Часто задачи лежат сразу в нескольких зонах: бот, интеграции,
            отчётность, очистка данных. Опишите, где именно сейчас «болит»:
            заявки, выдача доступов, вебинары, отчёты, рутина в командах.
            Мы предложим 1–2 связки из услуг выше и покажем, что именно
            изменится по цифрам и по рутине.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Оставить заявку
            </Link>
            <p className="text-xs text-emerald-100/90 sm:text-sm">
              Можно просто скинуть ссылки на бота, платформы и кратко описать
              задачи — дальше мы зададим точечные вопросы и предложим план.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
