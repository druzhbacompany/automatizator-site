import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/app/components/ContactForm';

export const metadata: Metadata = {
  title: 'Automatizator — автоматизация онлайн-бизнеса, боты и интеграции',
  description:
    'Помогаем онлайн-школам, продюсерам и малому бизнесу навести порядок в автоматизации: Telegram-боты, n8n, интеграции GetCourse/Salebot/Bizon, парсеры и сопровождение.',
};

const SERVICES = [
  {
    slug: 'telegram-bot-mvp',
    title: 'Telegram-бот MVP за 3–7 дней',
    description:
      'Простой, но живой бот под одну понятную задачу: лиды, запись, выдача уроков, напоминания, опросы.',
    tag: 'Боты и воронки',
  },
  {
    slug: 'n8n-automations',
    title: 'Фоновые сценарии и интеграции на n8n',
    description:
      'Передаём данные между сервисами, наводим порядок в статусах и отчётах, избавляем от ручной рутины.',
    tag: 'Фоновые процессы',
  },
  {
    slug: 'integrations-getcourse-salebot-bizon-vakas',
    title: 'Интеграции GetCourse / Salebot / Bizon / Vakas',
    description:
      'Строим связки «платформа → бот → вебинар → CRM», чтобы ничего не терялось по дороге.',
    tag: 'Платформы и CRM',
  },
  {
    slug: 'web-parsing-csv',
    title: 'Парсеры и выгрузка данных под CSV/таблицы',
    description:
      'Собираем каталоги, заявки и отчёты с сайтов/сервисов, приводим хаос в чистые таблицы.',
    tag: 'Парсинг и данные',
  },
];

const PROCESS_STEPS = [
  {
    title: 'Разбор задачи и стека',
    text: 'Смотрим, как у вас сейчас устроены воронки, какие сервисы подключены и где всё ломается.',
  },
  {
    title: 'Предложение решений',
    text: 'Даём 1–2 варианта: быстрый MVP и более системный вариант с оценкой сроков и бюджета.',
  },
  {
    title: 'Сборка и запуск',
    text: 'Собираем бота/сценарии/интеграции, показываем на тестовой среде, затем выводим в прод.',
  },
  {
    title: 'Сопровождение',
    text: 'Следим за работой, правим по метрикам, добавляем новые сценарии по мере роста.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]">
        <div className="max-w-5xl mx-auto px-4 pt-16 pb-14 lg:pt-20 lg:pb-18">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Техспец-команда по автоматизации онлайн-бизнеса</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold leading-tight mb-4">
            Автоматизируем ботов, воронки и&nbsp;фоновые процессы,
            <span className="text-emerald-400"> чтобы бизнес не ломался на мелочах</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mb-6">
            Строим Telegram-ботов, сценарии на n8n, интеграции GetCourse / Salebot /
            Bizon / Vakas и парсеры. Сначала закрываем узкие места, потом аккуратно
            масштабируем стек.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white shadow shadow-rose-500/30 hover:bg-rose-400 transition"
            >
              Обсудить задачу
            </Link>
            <a
              href="#home-contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900/60 transition"
            >
              Оставить заявку на сайте
            </a>
            <Link
              href="/services"
              className="text-sm text-slate-400 hover:text-slate-200 underline-offset-4 hover:underline"
            >
              Посмотреть все услуги →
            </Link>
          </div>

          <p className="text-xs text-slate-500">
            Работаем с онлайн-школами, продюсерами и малыми командами, которым нужен
            «свой техспец», а не штатный отдел разработки.
          </p>
        </div>
      </section>

      {/* ЧТО АВТОМАТИЗИРУЕМ */}
      <section id="services" className="border-b border-slate-800 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Что мы автоматизируем</h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Услуги собраны так, чтобы закрывать типовые задачи: быстрый старт на
                Telegram-ботах, наведение порядка в интеграциях и сбор данных из
                внешних источников.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              Перейти к каталогу услуг →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {SERVICES.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-emerald-500/70 hover:bg-slate-900 transition relative overflow-hidden"
              >
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{service.tag}</span>
                </div>
                <h3 className="text-base font-semibold mb-1 group-hover:text-emerald-300">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 mb-3">{service.description}</p>
                <p className="text-xs text-emerald-300">
                  Открыть подробную страницу услуги →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ТАРИФЫ И СОПРОВОЖДЕНИЕ */}
      <section
        id="pricing-teaser"
        className="border-b border-slate-800 bg-slate-900/40"
      >
        <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Тарифы и сопровождение автоматизации
            </h2>
            <p className="text-sm text-slate-300 mb-4 max-w-xl">
              Для разных стадий роста — разные форматы: от разового запуска бота или
              сценария до полноценного сопровождения стека с SLA.
            </p>
            <ul className="space-y-2 text-sm text-slate-300 mb-5">
              <li>• START — единичные запуски и маленькие онлайн-проекты.</li>
              <li>• GROW — растущие онлайн-школы и продюсерские центры.</li>
              <li>• SCALE — B2B, white-label и проекты с повышенными требованиями.</li>
            </ul>
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow shadow-emerald-500/40 hover:bg-emerald-400 transition"
              >
                Открыть страницу тарифов
              </Link>
              <a
                href="#home-contact"
                className="text-sm text-slate-400 hover:text-slate-200 underline-offset-4 hover:underline"
              >
                Спросить, какой пакет подойдёт →
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-300 space-y-2">
            <div className="text-slate-100 font-semibold mb-2">
              Примеры, что входит в сопровождение:
            </div>
            <p>— контроль работы ботов и сценариев, мониторинг ошибок;</p>
            <p>— мелкие доработки по мере изменений в воронке;</p>
            <p>— адаптация под новые запуски, офферы и продукты;</p>
            <p>— консультации по стеку и наведение порядка в интеграциях.</p>
          </div>
        </div>
      </section>

      {/* КАК МЫ РАБОТАЕМ */}
      <section id="process" className="border-b border-slate-800 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Как мы работаем</h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Сделано так, чтобы вы понимали, что будет происходить после заявки и
                на каком этапе что решается.
              </p>
            </div>
            <Link
              href="/contacts"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300"
            >
              Подробно про формат работы →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <div className="text-xs text-slate-400 mb-1">
                  Шаг {idx + 1}
                </div>
                <h3 className="text-sm font-semibold mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМА ЗАЯВКИ — ГЛАВНАЯ ТОЧКА ЗАХВАТА */}
      <section
        id="home-contact"
        className="bg-slate-950/95 border-t border-slate-800"
      >
        <div className="max-w-5xl mx-auto px-4 py-12 lg:py-16 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Расскажите, что сейчас нужно автоматизировать
            </h2>
            <p className="text-sm text-slate-300 mb-3 max-w-xl">
              Можно простыми словами: что болит, где всё ломается и какие сервисы уже
              подключены. На основе этого предложим 1–2 варианта решения и подскажем,
              с чего начать.
            </p>
            <p className="text-xs text-slate-500">
              Чем конкретнее пример (бот, интеграция, парсер, сопровождение), тем
              точнее будет ответ — но можно и просто «в целом по больнице».
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 md:p-5 shadow-xl shadow-black/40">
            <ContactForm
              compact
              source="home-page"
              context="home:main-form"
              defaultMessage="Кратко о задаче и стеке: какие сервисы используете, что сейчас болит и к какому результату хотите прийти."
            />
          </div>
        </div>
      </section>
    </div>
  );
}