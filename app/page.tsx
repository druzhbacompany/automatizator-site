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
            Спокойный запуск и работа вашей автоматизации. Мы берём на себя ботов, интеграции и техподдержку.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Каждый техсбой в день запуска — это потерянные заявки, деньги и репутация. Мы берём на себя Telegram-ботов, воронки, n8n-сценарии и интеграции с CRM, чтобы перед запуском вы не сидели в чате в панике, а спокойно занимались продуктом и продажами.
          </p>

          <ul className="mt-4 text-sm text-slate-300 space-y-1 max-w-3xl mx-auto text-left sm:text-center">
            <li>• Автоматизация процессов на базе Telegram-ботов, CRM и n8n / Make — без зоопарка из «костылей».</li>
            <li>• Настраиваем воронки, напоминания, оплаты и уведомления так, чтобы заявки не терялись в чатах.</li>
            <li>• Работаем по SLA: регламенты, сроки реакции и понятные правила вместо «фрилансера, который пропал перед запуском».</li>
            <li>• Формат небольшой студии: берём ограниченное число проектов и погружаемся в ваши процессы, а не в «поток».</li>
          </ul>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 mb-2">
            <Link
              href={HERO.primaryCtaHref}
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Записаться на консультацию по автоматизации
            </Link>
            <Link
              href={HERO.secondaryCtaHref}
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900/60 transition"
            >
              Оценить, сколько времени и денег мы можем вам сэкономить
            </Link>
          </div>

          <p className="text-xs text-slate-400 max-w-2xl mx-auto text-center">
            30 минут созвона: разбираем текущие процессы, находим слабые места и прикидываем, сколько денег теряется на ручных операциях и техсбоях. Без навязчивых «продаж в лоб».
          </p>
        </div>
      </section>

      <section className="mt-8 max-w-5xl mx-auto px-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 mb-2">
          В КАКИХ СИТУАЦИЯХ К НАМ ПРИХОДЯТ
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Когда техника мешает запуску и росту, а не помогает
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Сценарий 1 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-2">
              СЦЕНАРИЙ 1
            </p>
            <h3 className="text-sm font-semibold mb-2">
              Запуск через неделю, а система ещё не собрана
            </h3>
            <p className="text-xs text-slate-200 mb-3">
              Вебинар на 100–500 человек, рассылки, оплаты и доступы живут в разных
              местах. Страшно, что в день старта что-то не откроется.
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 mb-3 list-disc pl-4">
              <li>Риск сорвать запуск и потерять 250–500k₽ выручки.</li>
              <li>Паника в чате, стыд перед учениками и партнёрами.</li>
              <li>Команда тушит техпожары вместо продаж и поддержки.</li>
            </ul>
            <p className="text-[11px] text-slate-400">
              Мы за 3–5 рабочих дней собираем единую цепочку писем, оплат и доступов
              и прогоняем её через чек-лист «анти-техсбой» перед стартом.
            </p>
          </article>

          {/* Сценарий 2 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-2">
              СЦЕНАРИЙ 2
            </p>
            <h3 className="text-sm font-semibold mb-2">
              Растёте, а система трещит по швам
            </h3>
            <p className="text-xs text-slate-200 mb-3">
              На 500–1000 учеников ещё как-то тянет, дальше начинаются подвисания,
              дубль-заявки, потерянные оплаты и выгорание команды.
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 mb-3 list-disc pl-4">
              <li>Каждый техсбой стоит 50–100k₽ упущенной выручки.</li>
              <li>Админы и методисты тратят часы на ручные проверки.</li>
              <li>Вы боитесь масштабировать запуски из-за слабой техники.</li>
            </ul>
            <p className="text-[11px] text-slate-400">
              Мы разбираем текущую архитектуру, убираем «костыли», добавляем резервные
              цепочки и настраиваем систему так, чтобы она выдерживала рост без боли.
            </p>
          </article>

          {/* Сценарий 3 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-2">
              СЦЕНАРИЙ 3
            </p>
            <h3 className="text-sm font-semibold mb-2">
              «Наш фрилансер пропал, а всё завязано на нём»
            </h3>
            <p className="text-xs text-slate-200 mb-3">
              Система работает на личных настройках одного человека. Документации нет,
              доступы разбросаны, страшно что-то трогать.
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 mb-3 list-disc pl-4">
              <li>Страх, что в критический момент всё встанет.</li>
              <li>Нельзя планировать запуск без «того самого» техспеца.</li>
              <li>Каждая правка превращается в маленький стресс.</li>
            </ul>
            <p className="text-[11px] text-slate-400">
              Мы работаем как мини-агентство: минимум два человека в курсе проекта,
              наводим порядок с доступами и делаем базовую документацию, чтобы вы не
              зависели от одного исполнителя.
            </p>
          </article>
        </div>
      </section>

      {/* SEGMENTS */}
      <section className="mt-16 max-w-5xl mx-auto px-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 mb-2">
          ДЛЯ КОГО МЫ ДЕЛАЕМ АВТОМАТИЗАЦИЮ
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Мы работаем с проектами, где каждый техсбой — это реальные деньги
        </h2>
        <p className="text-sm text-slate-300 mb-5 max-w-3xl">
          Наш фокус — не «поиграться в ботов», а сделать так, чтобы ваши запуски, курсы
          и постоянные продажи не зависели от ручных действий и одного человека в технике.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Сегмент 1 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col">
            <h3 className="text-sm font-semibold mb-2">
              Онлайн-школы, курсы и продюсерские проекты
            </h3>
            <p className="text-xs text-slate-200 mb-3">
              Запуски, вечные воронки, вебинары, марафоны. Много подписчиков, много точек
              входа и огромное давление «нельзя облажаться при аудитории».
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 mb-3 list-disc pl-4">
              <li>Час простоя = десятки тысяч ₽ упущенной выручки.</li>
              <li>Админы тонут в чате вместо нормальной поддержки.</li>
              <li>Каждый новый запуск собирается «с нуля» и на костылях.</li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-auto">
              Мы собираем единую систему заявок, оплат и доступов, прогоняем её через чек-листы
              и даём понятную картину: что где настроено и как это живёт при росте.
            </p>
          </article>

          {/* Сегмент 2 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col">
            <h3 className="text-sm font-semibold mb-2">
              Локальный бизнес и сервисы
            </h3>
            <p className="text-xs text-slate-200 mb-3">
              Салоны красоты, клиники, студии, центры обучения. Клиенты пишут в мессенджеры,
              звонят, оставляют заявки на сайте — часть просто теряется по дороге.
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 mb-3 list-disc pl-4">
              <li>Нет единого окна для заявок: всё в WhatsApp, Telegram и Excel.</li>
              <li>Администраторы забывают перезвонить и подтвердить записи.</li>
              <li>Невозможно посчитать, сколько денег реально уходит в никуда.</li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-auto">
              Мы выстраиваем понятную воронку: заявки → записи → напоминания → повторные
              визиты, с интеграцией в CRM и ботами, которые не дают клиенту «потеряться».
            </p>
          </article>

          {/* Сегмент 3 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col">
            <h3 className="text-sm font-semibold mb-2">
              Небольшие агентства и эксперты-консультанты
            </h3>
            <p className="text-xs text-slate-200 mb-3">
              Вы уже продаёте услуги и консультации, но всё держится на ручных задачах
              и одном-двух людях, которые «знают, как там всё устроено внутри».
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 mb-3 list-disc pl-4">
              <li>Рассылки, заявки и оплату сложно повторять от проекта к проекту.</li>
              <li>Боитесь, что рост клиентов сложит текущую систему.</li>
              <li>Нет ощущения управляемости: техника живёт своей жизнью.</li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-auto">
              Мы помогаем упаковать процессы в повторяемую систему: боты, сценарии, n8n-флоу
              и интеграции, которые можно масштабировать без ощущения «техспагетти».
            </p>
          </article>
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
      <section className="mt-16 max-w-5xl mx-auto px-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 mb-2">
          КАК МЫ РАБОТАЕМ
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          Чёткий процесс вместо хаоса «давайте как-нибудь соберём»
        </h2>
        <p className="text-sm text-slate-300 mb-6 max-w-3xl">
          Наша задача — чтобы запуски и постоянные продажи не зависели от удачи и ручной
          сборки. Поэтому мы работаем по прозрачному процессу: вы понимаете, что происходит
          на каждом шаге, а не ловите нас в мессенджере в ночь перед стартом.
        </p>

        <div className="grid gap-4 md:grid-cols-4">
          {/* Шаг 1 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-1">
              ШАГ 1
            </p>
            <h3 className="text-sm font-semibold mb-2">Диагностика и карта системы</h3>
            <p className="text-xs text-slate-200 mb-3">
              Разбираем, как сейчас приходят заявки, где живут оплаты и доступы, какие
              сервисы уже подключены. Фиксируем все точки риска на запуск / ежедневную работу.
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4 mb-3">
              <li>Созваниваемся на 40–60 минут.</li>
              <li>Собираем схему потоков в понятной карте (Miro / draw.io).</li>
              <li>Определяем зону «минимально жизнеспособной» автоматизации.</li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-auto">
              На выходе — вы понимаете, что мы будем делать и зачем, а не получаете «чёрный ящик».
            </p>
          </article>

          {/* Шаг 2 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-1">
              ШАГ 2
            </p>
            <h3 className="text-sm font-semibold mb-2">Проектирование и сборка</h3>
            <p className="text-xs text-slate-200 mb-3">
              Настраиваем ботов, воронки, n8n-сценарии и интеграции с CRM по согласованной карте.
              Работаем короткими итерациями, без «три недели тишины».
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4 mb-3">
              <li>Дробим работу на понятные куски с промежуточными результатами.</li>
              <li>Сразу учитываем нагрузку на запуск, а не «потом как-нибудь усилим».</li>
              <li>Фиксируем ключевые настройки, чтобы вы не зависели от одного человека.</li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-auto">
              Здесь появляется та самая «скелетная» система, которая уже может работать и
              приносить заявки.
            </p>
          </article>

          {/* Шаг 3 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-1">
              ШАГ 3
            </p>
            <h3 className="text-sm font-semibold mb-2">Тесты и чек-лист «анти-техсбой»</h3>
            <p className="text-xs text-slate-200 mb-3">
              Прогоняем ключевые сценарии так, как это будет на живых людях: заявки, оплаты,
              доступы, напоминания, уведомления команде.
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4 mb-3">
              <li>Тестируем заявки с разных точек входа.</li>
              <li>Проверяем, что все уведомления приходят туда, где вы реально живёте.</li>
              <li>Фиксируем, что делать команде при сбоях (микро-инструкции).</li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-auto">
              Итог — минимизация «сюрпризов» в день запуска и понятный план B, если что-то пойдёт не так.
            </p>
          </article>

          {/* Шаг 4 */}
          <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-1">
              ШАГ 4
            </p>
            <h3 className="text-sm font-semibold mb-2">Сопровождение старта и поддержка</h3>
            <p className="text-xs text-slate-200 mb-3">
              В день запуска и первые дни работы мы не «пропадаем в закате», а остаёмся с вами
              на связи по заранее оговорённым правилам.
            </p>
            <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4 mb-3">
              <li>Рабочий чат с нашей командой в Telegram.</li>
              <li>Оговоренный SLA по реакции на критичные вопросы.</li>
              <li>Фиксация доработок по итогам первых запусков/дней.</li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-auto">
              Мы честно говорим, что не волшебники, но берем на себя техчасть так, чтобы вы могли
              заниматься продуктом и продажами, а не тушением пожаров.
            </p>
          </article>
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
