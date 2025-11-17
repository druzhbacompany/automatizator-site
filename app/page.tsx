import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { CTA, FEATURES, HERO, SEGMENTS, STEPS } from '@/data/home';

export const metadata: Metadata = {
  title: 'Автоматизация без техсбоев: Telegram-боты, n8n и интеграции под ключ',
  description:
    'Собираем и поддерживаем Telegram-ботов, воронки, n8n/Make и интеграции с GetCourse и CRM. Помогаем онлайн-школам и бизнесу запускать проекты без паники и техсбоев.',
  openGraph: {
    title: 'Автоматизация без техсбоев: Telegram-боты, n8n и интеграции под ключ',
    description:
      'Мини-агентство Automatizator: боты, воронки, интеграции и сопровождение. Спокойные запуски вместо ночных техпожаров.',
    url: '/',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="page-shell">
      {/* HERO */}
      <section className="section-y-lg border-b border-slate-800 bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]">
        <div className="page-container text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>{HERO.kicker}</span>
          </div>

          <h1 className="heading-hero">
            Спокойный запуск и работа вашей автоматизации. Мы берём на себя ботов, интеграции и техподдержку.
          </h1>

          <p className="body-main-dark mt-5 max-w-xl mx-auto">
            Каждый техсбой в день запуска — это потерянные заявки, деньги и репутация. Мы берём на себя Telegram-ботов, воронки, n8n-сценарии и интеграции с CRM, чтобы перед запуском вы не сидели в чате в панике, а спокойно занимались продуктом и продажами.
          </p>

          <ul className="mt-4 text-sm text-slate-300 space-y-1 max-w-3xl mx-auto text-left sm:text-center">
            <li>• Автоматизация процессов на базе Telegram-ботов, CRM и n8n / Make — без зоопарка из «костылей».</li>
            <li>• Настраиваем воронки, напоминания, оплаты и уведомления так, чтобы заявки не терялись в чатах.</li>
            <li>• Работаем по SLA: регламенты, сроки реакции и понятные правила вместо «фрилансера, который пропал перед запуском».</li>
            <li>• Формат небольшой студии: берём ограниченное число проектов и погружаемся в ваши процессы, а не в «поток».</li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href={HERO.primaryCtaHref} className="btn-primary-main">
              Записаться на консультацию по автоматизации
            </Link>
          </div>

          <p className="text-xs text-slate-400 max-w-2xl mx-auto text-center mt-4">
            30 минут созвона: разбираем текущие процессы, находим слабые места и прикидываем, сколько денег теряется на ручных операциях и техсбоях. Без навязчивых «продаж в лоб».
          </p>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="section-y-lg">
        <div className="page-container space-y-8">
          <header className="max-w-3xl">
            <h2 className="heading-section">
              Когда техника мешает запуску и росту, а не помогает
            </h2>
            <p className="body-main-dark mt-4">
              К нам приходят, когда запуски и ежедневная работа начинают упираться не в идеи и рекламу, а в хаос в технике и ручных процессах.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <h3 className="heading-card">
                Запуск через неделю, а система ещё не собрана
              </h3>
              <p className="body-main-dark">
                Вебинар на 100–500 человек, рассылки, оплаты и доступы живут в разных
                местах. Страшно, что в день старта что-то не откроется.
              </p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <h3 className="heading-card">
                Растёте, а система трещит по швам
              </h3>
              <p className="body-main-dark">
                На 500–1000 учеников ещё как-то тянет, дальше начинаются подвисания,
                дубль-заявки, потерянные оплаты и выгорание команды.
              </p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <h3 className="heading-card">
                «Наш фрилансер пропал, а всё завязано на нём»
              </h3>
              <p className="body-main-dark">
                Система работает на личных настройках одного человека. Документации нет,
                доступы разбросаны, страшно что-то трогать.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="section-y-lg">
        <div className="page-container space-y-8">
          <header className="max-w-3xl">
            <h2 className="heading-section">
              Для кого мы особенно полезны
            </h2>
            <p className="body-main-dark mt-4">
              Наш фокус — не «поиграться в ботов», а сделать так, чтобы ваши запуски, курсы
              и постоянные продажи не зависели от ручных действий и одного человека в технике.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <h3 className="heading-card">
                Онлайн-школы и эксперты
              </h3>
              <p className="body-main-dark">
                Запуски, вечные воронки, вебинары, марафоны. Много подписчиков, много точек
                входа и огромное давление «нельзя облажаться при аудитории».
              </p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <h3 className="heading-card">
                Локальный бизнес и сервисы
              </h3>
              <p className="body-main-dark">
                Салоны красоты, клиники, студии, центры обучения. Клиенты пишут в мессенджеры,
                звонят, оставляют заявки на сайте — часть просто теряется по дороге.
              </p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <h3 className="heading-card">
                Небольшие агентства и эксперты-консультанты
              </h3>
              <p className="body-main-dark">
                Вы уже продаёте услуги и консультации, но всё держится на ручных задачах
                и одном-двух людях, которые «знают, как там всё устроено внутри».
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-y-lg bg-slate-900/70 border-y border-slate-800">
        <div className="page-container">
          <header className="text-center mb-8">
            <h2 className="heading-section">
              Что мы делаем
            </h2>
            <p className="body-main-dark mt-4 max-w-2xl mx-auto">
              Собираем рабочие системы вокруг ваших текущих платформ, а не продаём “ещё один модный бот”.
            </p>
          </header>
          <div className="grid gap-5 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">
                <h3 className="heading-card mb-2">{feature.title}</h3>
                <p className="body-main-dark mb-4">{feature.lead}</p>
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
      <section className="section-y-lg">
        <div className="page-container">
          <header className="text-center mb-8">
            <h2 className="heading-section">
              Как мы работаем
            </h2>
            <p className="body-main-dark mt-4 max-w-2xl mx-auto">
              Наша задача — чтобы запуски и постоянные продажи не зависели от удачи и ручной
              сборки. Поэтому мы работаем по прозрачному процессу: вы понимаете, что происходит
              на каждом шаге, а не ловите нас в мессенджере в ночь перед стартом.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <p className="body-small-dark uppercase tracking-wide">Шаг 1</p>
              <h3 className="heading-card">Диагностика и карта системы</h3>
              <p className="body-main-dark">
                Разбираем, как сейчас приходят заявки, где живут оплаты и доступы, какие
                сервисы уже подключены. Фиксируем все точки риска на запуск / ежедневную работу.
              </p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <p className="body-small-dark uppercase tracking-wide">Шаг 2</p>
              <h3 className="heading-card">Проектирование и сборка</h3>
              <p className="body-main-dark">
                Настраиваем ботов, воронки, n8n-сценарии и интеграции с CRM по согласованной карте.
                Работаем короткими итерациями, без «три недели тишины».
              </p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <p className="body-small-dark uppercase tracking-wide">Шаг 3</p>
              <h3 className="heading-card">Тесты и чек-лист «анти-техсбой»</h3>
              <p className="body-main-dark">
                Прогоняем ключевые сценарии так, как это будет на живых людях: заявки, оплаты,
                доступы, напоминания, уведомления команде.
              </p>
            </article>
            <article className="bg-slate-900 rounded-2xl p-5 flex flex-col gap-3">
              <p className="body-small-dark uppercase tracking-wide">Шаг 4</p>
              <h3 className="heading-card">Сопровождение старта и поддержка</h3>
              <p className="body-main-dark">
                В день запуска и первые дни работы мы не «пропадаем в закате», а остаёмся с вами
                на связи по заранее оговорённым правилам.
              </p>
            </article>
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