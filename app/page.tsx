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

const SEGMENTS = [
  {
    id: 'segment-edtech',
    label: 'Онлайн-школы и эксперты',
    badge: 'Онлайн-проекты',
    title: 'Онлайн-школы, продюсеры, авторы курсов',
    short: 'Запуски, вебинары, автоворонки на GetCourse, Salebot и других платформах.',
    pain: 'Тонете в интеграциях и ручной рутине, падает доходимость до уроков и вебинаров.',
    cta: 'Решения для онлайн-школ',
  },
  {
    id: 'segment-beauty',
    label: 'Салоны и студии',
    badge: 'Beauty-сфера',
    title: 'Салоны красоты, барбершопы, студии маникюра и бровей',
    short: 'Запись, напоминания и календарь, чтобы мастера работали с полной загрузкой.',
    pain: 'До 20–40% клиентов не доходят до записи — просто забывают или путают время.',
    cta: 'Решения для салонов',
  },
  {
    id: 'segment-local',
    label: 'Локальный бизнес',
    badge: 'Офлайн-сервисы',
    title: 'Автомойки, СТО, тренеры, залы, студии',
    short: 'Телеграм-запись, напоминания и простая аналитика без отдельного администратора.',
    pain: 'Пустые окна в расписании и хаос в записях в WhatsApp, тетрадках и Excel.',
    cta: 'Решения для локального бизнеса',
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

      {/* КОМУ ПОДХОДИТ */}
      <section className="mt-10 lg:mt-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Кому особенно заходит автоматизация
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl">
                Мы не продаём «абстрактную автоматизацию». Под каждый тип бизнеса
                есть понятные сценарии: что именно убираем с головы владельца
                и команды.
              </p>
            </div>
            <div className="text-xs text-slate-400 max-w-xs">
              <p>
                Нажмите на свой тип бизнеса — страница прокрутится к блоку
                с примерами задач и форматом работы именно для вас.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {SEGMENTS.map((seg) => (
              <a
                key={seg.id}
                href={`/#${seg.id}`}
                className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-emerald-500/70 hover:bg-slate-900"
              >
                <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide text-emerald-300 mb-1">
                  <span className="px-2 py-0.5 rounded-full border border-emerald-500/50 bg-emerald-500/5">
                    {seg.badge}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                  {seg.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  {seg.short}
                </p>
                <p className="mt-3 text-[11px] text-slate-400">
                  {seg.pain}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[12px] font-medium text-emerald-400">
                  <span>{seg.cta}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
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

      {/* СЕГМЕНТ: ОНЛАЙН-ШКОЛЫ */}
      <section
        id="segment-edtech"
        className="border-t border-slate-800 bg-slate-950/60 mt-16"
      >
        <div className="max-w-5xl mx-auto px-4 py-10 lg:py-14 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-300 mb-1">
                Онлайн-школы и эксперты
              </p>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Когда запусков много, а техрутина съедает силы
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl">
                GetCourse, Salebot, вебинары, автоворонки, рассылки. Вместо того,
                чтобы думать про продукт и продажи, команда застревает в сценариях,
                доступах и отчётах.
              </p>
            </div>
            <div className="text-xs text-slate-400 max-w-xs">
              <p>Цель — чтобы до уроков и вебинаров доходили, а не терялись в пути.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                Выдача доступов и статусы
              </h3>
              <p className="text-xs text-slate-300">
                Автоматическая выдача доступов, смена статусов и напоминания:
                меньше ручного копипаста, меньше потерянных учеников.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                Боты вокруг запусков
              </h3>
              <p className="text-xs text-slate-300">
                Telegram-боты под прогрев, вебинары и продажи: регистрация,
                напоминания, быстрые вопросы и логирование активности.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                Отчёты и цифры
              </h3>
              <p className="text-xs text-slate-300">
                Собираем ключевые метрики в одном месте: заявки, оплаты, конверсии,
                загрузка менеджеров. Без «собирать руками по сервисам».
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div className="space-y-3">
              <p className="text-sm text-slate-300">
                Обычно начинаем с одного-двух сценариев: например, автоматизируем
                выдачу доступов и напоминания к урокам, а затем добавляем бота
                под вебинары или прогрев.
              </p>
              <p className="text-xs text-slate-500">
                Важно: не ломаем текущую систему. Сначала аккуратный пилот,
                потом расширение.
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 md:p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[11px] text-slate-400">
                  Можно сразу посмотреть, какие услуги чаще всего собираем для онлайн-школ.
                </p>
                <Link
                  href="/services?segment=edtech"
                  className="whitespace-nowrap text-[11px] font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Услуги для онлайн-школ →
                </Link>
              </div>
              <ContactForm
                compact
                source="home-segment"
                context="segment:edtech"
                defaultMessage="Кратко опишите вашу онлайн-школу: платформа (GetCourse/другая), сколько студентов, где сейчас больше всего ручной рутины."
              />
            </div>
          </div>
        </div>
      </section>

      {/* СЕГМЕНТ: BEAUTY */}
      <section
        id="segment-beauty"
        className="border-t border-slate-800 bg-slate-950 mt-12"
      >
        <div className="max-w-5xl mx-auto px-4 py-10 lg:py-14 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-300 mb-1">
                Beauty-сфера
              </p>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Запись и напоминания для салонов и студий
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl">
                Клиенты записываются в Telegram, получают напоминания, а вы видите
                все записи в одном календаре. Без тетрадок, хаоса в мессенджерах
                и пустых окон.
              </p>
              <div className="mt-3">
                <Link
                  href="/services?segment=beauty"
                  className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  <span>Посмотреть услуги для салонов</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
            <div className="text-xs text-slate-400 max-w-xs">
              <p>
                Практика показывает: грамотные напоминания и предоплата дают
                +20–30% к явке и выручке без увеличения рекламы.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                Запись в Telegram вместо звонков
              </h3>
              <p className="text-xs text-slate-300">
                Клиент выбирает услугу, мастера и время прямо в боте. Администратор
                видит запись в календаре и не проводит весь день в звонках.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                Напоминания и подтверждения
              </h3>
              <p className="text-xs text-slate-300">
                Напоминания за день и за пару часов, возможность подтвердить или
                перенести запись — меньше «забыли прийти» и пустых окон.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                Календарь и простая аналитика
              </h3>
              <p className="text-xs text-slate-300">
                Наглядное расписание по мастерам и дни, отчет по явке и по выручке.
                Понимаете, где нагружены, а где теряете деньги.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div className="space-y-3">
              <p className="text-sm text-slate-300">
                Можно начать с одного филиала или одной студии: подключаем бота,
                настраиваем сценарий записи и напоминаний, тестируем на ваших
                клиентах и только потом расширяем.
              </p>
              <p className="text-xs text-slate-500">
                На старте не нужен сложный сайт или CRM — достаточно Telegram
                и понятных правил работы.
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 md:p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[11px] text-slate-400">
                  Хотите посмотреть, какие услуги чаще всего собираем для салонов?
                </p>
                <Link
                  href="/services?segment=beauty"
                  className="whitespace-nowrap text-[11px] font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Услуги для салонов →
                </Link>
              </div>
              <ContactForm
                compact
                source="home-segment"
                context="segment:beauty"
                defaultMessage="Расскажите о вашем салоне/студии: сколько мастеров, как сейчас ведёте запись и где больше всего хаоса."
              />
            </div>
          </div>
        </div>
      </section>

      {/* СЕГМЕНТ: ЛОКАЛЬНЫЙ БИЗНЕС */}
      <section
        id="segment-local"
        className="border-t border-slate-800 bg-slate-950/80 mt-12"
      >
        <div className="max-w-5xl mx-auto px-4 py-10 lg:py-14 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-emerald-300 mb-1">
                Локальный бизнес и сервисы
              </p>
              <h2 className="text-2xl font-semibold tracking-tight mb-2">
                Автомойки, СТО, тренеры, залы, студии
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl">
                Если ваш бизнес живет на записи по времени — можно убрать
                большую часть хаоса через бота: запись, напоминания, простая
                аналитика и, при желании, предоплата.
              </p>
              <div className="mt-3">
                <Link
                  href="/services?segment=local"
                  className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300"
                >
                  <span>Посмотреть услуги для локального бизнеса</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
            <div className="text-xs text-slate-400 max-w-xs">
              <p>
                Подходит, если вы устали от бесконечных звонков и сообщений «а можно
                на сегодня на 18:00?» и хотите видеть нормальное расписание.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                Запись по слотам
              </h3>
              <p className="text-xs text-slate-300">
                Клиент выбирает свободное окно, вы не ловите всех в ручном режиме.
                Можно задавать длительность услуг и окна для каждого дня.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                Напоминания и предоплата
              </h3>
              <p className="text-xs text-slate-300">
                Напоминания помогают поднять явку, а предоплата или небольшая бронь
                сокращает количество «передумал и не предупредил».
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 mb-1">
                Мини-отчеты по сменам
              </h3>
              <p className="text-xs text-slate-300">
                Сколько записей в день, какая явка, какие смены загружены лучше —
                всё это можно видеть без сложной CRM и таблиц.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div className="space-y-3">
              <p className="text-sm text-slate-300">
                Мы подстраиваемся под ваш формат: кто-то хочет только запись
                и напоминания, кто-то — ещё и оплату, кто-то — связку с CRM
                и отчетами. Начинаем с простого сценария и растём по мере
                необходимости.
              </p>
              <p className="text-xs text-slate-500">
                Можно стартовать даже с одного направления: например, только мойка
                или только зал, а дальше масштабировать на другие услуги.
              </p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 md:p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[11px] text-slate-400">
                  Можно посмотреть, какие услуги обычно собираем для локального бизнеса.
                </p>
                <Link
                  href="/services?segment=local"
                  className="whitespace-nowrap text-[11px] font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Услуги для локального бизнеса →
                </Link>
              </div>
              <ContactForm
                compact
                source="home-segment"
                context="segment:local"
                defaultMessage="Напишите, какой у вас бизнес (автомойка, СТО, зал, студия и т.п.), сколько у вас точек и как сейчас ведёте запись."
              />
            </div>
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