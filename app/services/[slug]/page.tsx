import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import servicesData from '@/data/services.long.json';
import ContactForm from '@/app/components/ContactForm';

const SEGMENT_BACK_LABELS: Record<string, string> = {
  edtech: 'Услуги для онлайн-школ и экспертов',
  beauty: 'Услуги для салонов и студий',
  local: 'Услуги для локального бизнеса',
};

type PricingRef = 'start' | 'grow' | 'scale';

type ServiceProcessStep = {
  name: string;
  time?: string;
  out?: string;
};

type ServiceCase = {
  name: string;
  result?: string;
  note?: string;
};

type ServiceFaq = {
  q: string;
  a: string;
};

type ServiceSeo = {
  title?: string;
  description?: string;
  keywords?: string[];
};

type Service = {
  slug: string;
  title: string;
  lead: string;
  who?: string[];
  benefits?: string[];
  deliverables?: string[];
  process?: ServiceProcessStep[];
  integrations?: string[];
  pricingRef?: PricingRef;
  cases?: ServiceCase[];
  risks?: string[];
  faq?: ServiceFaq[];
  seo?: ServiceSeo;
};

const services = servicesData as Service[];

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

function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

type ServicePageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getService(params.slug);

  if (!service) {
    return {
      title: 'Услуга не найдена — Automatizator',
    };
  }

  const seo = service.seo ?? {};
  const baseTitle = service.title ? `${service.title} — Automatizator` : 'Услуга — Automatizator';

  return {
    title: seo.title || baseTitle,
    description: seo.description,
    keywords: seo.keywords,
  };
}

export default function ServicePage({ params, searchParams }: ServicePageProps) {
  const { slug } = params;

  const rawSegment = searchParams?.segment;
  const segment =
    typeof rawSegment === 'string' && ['edtech', 'beauty', 'local'].includes(rawSegment)
      ? rawSegment
      : null;

  const backHref = segment ? `/services?segment=${segment}` : '/services';
  const backLabel = segment && SEGMENT_BACK_LABELS[segment] ? SEGMENT_BACK_LABELS[segment] : 'Ко всем услугам';

  const service = getService(slug);

  if (!service) {
    return notFound();
  }

  const pricing =
    service.pricingRef && pricingLabel[service.pricingRef as PricingRef];

  const hasWho = (service.who?.length ?? 0) > 0;
  const hasBenefits = (service.benefits?.length ?? 0) > 0;
  const hasDeliverables = (service.deliverables?.length ?? 0) > 0;
  const hasProcess = (service.process?.length ?? 0) > 0;
  const hasIntegrations = (service.integrations?.length ?? 0) > 0;
  const hasCases = (service.cases?.length ?? 0) > 0;
  const hasRisks = (service.risks?.length ?? 0) > 0;
  const hasFaq = (service.faq?.length ?? 0) > 0;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="max-w-5xl mx-auto px-4 pt-6 pb-10">
        <div className="mb-6">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-emerald-300"
          >
            <span>←</span>
            <span>{backLabel}</span>
          </Link>
        </div>
        {/* HERO */}
        <section className="space-y-6">
          <div className="space-y-3">
            <div className="inline-flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[11px] font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Услуга из стека автоматизации
              </div>
              {pricing && (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                  {pricing.label}
                  <span className="text-[9px] font-normal normal-case text-emerald-200/80">
                    {pricing.hint}
                  </span>
                </span>
              )}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
          </div>
          {service.lead && (
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {service.lead}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 sm:text-sm">
            <p>
              Внизу страницы — кейсы, риски и FAQ. Можно сразу перейти к
              заявке, если формат подходит.
            </p>
            <a
              href="#service-cta"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400 sm:text-sm"
            >
              Обсудить эту услугу
            </a>
          </div>
        </section>

        {/* «ДЛЯ КОГО» + «ЧТО МЕНЯЕТСЯ» */}
        {(hasWho || hasBenefits) && (
          <section className="grid gap-6 md:grid-cols-2">
            {hasWho && (
              <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Для кого эта услуга
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200 sm:text-sm">
                  {service.who?.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {hasBenefits && (
              <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Что меняется по бизнесу
                </p>
                <ul className="space-y-2.5 text-xs text-slate-200 sm:text-sm">
                  {service.benefits?.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* ЧТО СДАЁТСЯ НА ВЫХОДЕ */}
        {hasDeliverables && (
          <section className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Что вы получаете на выходе
              </h2>
              <p className="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Не абстрактные «настройки», а конкретный набор артефактов,
                которые можно использовать, поддерживать и масштабировать.
              </p>
            </div>
            <ul className="space-y-2.5 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-200 sm:text-sm">
              {service.deliverables?.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* ПРОЦЕСС РАБОТЫ */}
        {hasProcess && (
          <section className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Как устроен процесс
              </h2>
              <p className="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Работа делится на понятные этапы — с фиксацией ожиданий,
                результатов и точек контроля. Ниже — типовой сценарий. В
                реальном проекте мы адаптируем его под вашу ситуацию.
              </p>
            </div>
            <ol className="space-y-3">
              {service.process?.map((step, index) => (
                <li
                  key={step.name + index}
                  className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
                      {index + 1}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-slate-50 sm:text-base">
                        {step.name}
                      </p>
                      <div className="flex flex-wrap gap-3 text-[11px] text-slate-400 sm:text-xs">
                        {step.time && (
                          <span>
                            <span className="text-slate-500">Сроки:</span> {step.time}
                          </span>
                        )}
                        {step.out && (
                          <span>
                            <span className="text-slate-500">На выходе:</span> {step.out}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* ИНТЕГРАЦИИ И СТЕК */}
        {hasIntegrations && (
          <section className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Интеграции и стек
              </h2>
              <p className="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Используемые сервисы и технологии. При необходимости можем
                адаптировать стек под ваши ограничения и уже выбранные платформы.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.integrations?.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* КЕЙСЫ */}
        {hasCases && (
          <section className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Примеры кейсов
              </h2>
              <p className="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Ниже — типовые сценарии, где эта услуга уже отработала. На
                консультации можем разобрать похожий кейс под вашу нишу.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {service.cases?.map((item) => (
                <article
                  key={item.name}
                  className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {item.name}
                  </h3>
                  {item.result && (
                    <p className="text-xs font-medium text-emerald-300 sm:text-sm">
                      Результат: {item.result}
                    </p>
                  )}
                  {item.note && (
                    <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {item.note}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* РИСКИ И ОГРАНИЧЕНИЯ */}
        {hasRisks && (
          <section className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Риски и ограничения
              </h2>
              <p className="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Честно проговариваем, от чего зависит результат и что может
                пойти не по плану — ещё до старта проекта, а не по факту.
              </p>
            </div>
            <ul className="space-y-2.5 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-200 sm:text-sm">
              {service.risks?.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQ */}
        {hasFaq && (
          <section className="space-y-3">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Частые вопросы по этой услуге
              </h2>
              <p className="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                Короткие ответы на вопросы, которые чаще всего возникают перед
                стартом. Остальное можно разобрать точечно на созвоне.
              </p>
            </div>
            <div className="space-y-3">
              {service.faq?.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA + форма заявки по услуге */}
        <section
          id="service-cta"
          className="border-t border-slate-800 bg-slate-900/40 mt-16"
        >
          <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Обсудить услугу «{service.title}»
              </h2>
              <p className="text-slate-300 mb-3">
                Опишите, что сейчас болит: где ломается воронка, какие задачи
                закрываете руками, чего хотите от автоматизации именно в рамках
                этой услуги.
              </p>
              <p className="text-slate-400 text-sm">
                Мы посмотрим на ваш стек, предложим 1–2 формата работы и подскажем,
                стоит ли начинать именно с этой услуги или есть более быстрый шаг.
              </p>
            </div>

            <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-4 md:p-5 shadow-xl shadow-black/40">
              <ContactForm
                compact
                source="service-page"
                context={`service:${service.slug}`}
                defaultMessage={`Хочу обсудить услугу: ${service.title}. Кратко о задаче:`}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
