import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#050509] text-slate-50">
      <div className="container py-10 md:py-16 space-y-16">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              Команда по автоматизации процессов
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Связываем ботов, платформы и отчёты
              <span className="block text-emerald-300">
                в рабочую инфраструктуру онлайн-бизнеса
              </span>
            </h1>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
              Мы берём на себя техчасть: Telegram-боты, n8n-процессы,
              интеграции GetCourse / Salebot / Bizon365 / Vakas-Tools,
              парсеры и WooCommerce-каталоги. Вы фокусируетесь на продукте
              и продажах, а рутина и отчётность не рассыпаются.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
              >
                Смотреть услуги
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-50 hover:border-emerald-400 hover:text-emerald-200"
              >
                Цены и SLA
              </Link>
              <p className="text-xs text-slate-400 sm:text-sm">
                Можно сразу описать задачу — мы предложим связку из услуг и
                форматы работы.
              </p>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              С чем чаще всего приходят
            </p>
            <ul className="space-y-2.5 text-sm text-slate-100">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>Нужно запустить или доработать Telegram-бота под воронку.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>Ручная рутина в GetCourse / Salebot / Bizon365 / Vakas-Tools.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>Нет нормальных отчётов: выручка, заявки, SLA разбросаны по сервисам.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>Нужен каталог на WooCommerce из Excel или с внешних сайтов.</span>
              </li>
            </ul>
            <p className="text-xs text-slate-400">
              Мы помогаем собрать всё это в понятные сценарии и устойчивые процессы.
            </p>
          </div>
        </section>

        {/* НАПРАВЛЕНИЯ УСЛУГ */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Основные направления работы
            </h2>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
              Все услуги на сайте собираются из нескольких базовых блоков. Ниже — коротко по
              каждому направлению. На странице{" "}
              <Link href="/services" className="text-emerald-300 hover:text-emerald-200">
                «Услуги»
              </Link>{" "}
              — расширенные описания, кейсы, риски и FAQ.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/70 hover:bg-slate-900">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                Telegram-боты и контент-системы
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Боты под заявки, выдачу доступов, автопостинг и работу с постоянными клиентами.
                Настраиваем логику, интеграции и отчётность.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-emerald-300">
                Эффект: меньше ручной переписки и «потерянных» диалогов.
              </p>
            </article>

            <article className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/70 hover:bg-slate-900">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                Автоматизации на n8n и фоновые процессы
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Сбор данных, синхронизации, ретраи, очереди, SLA и алёрты. Сценарии, которые
                «просто должны работать» в фоне.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-emerald-300">
                Эффект: процессы не падают из-за одного сбоя и прозрачнее отлаживаются.
              </p>
            </article>

            <article className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/70 hover:bg-slate-900">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                Интеграции GetCourse / Salebot / Bizon365 / Vakas-Tools
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Связываем платформы в единую воронку, устраняем дубли и «забытые» статусы,
                настраиваем резервирование и учёт.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-emerald-300">
                Эффект: меньше ручных переносов и «дыр» в аналитике.
              </p>
            </article>

            <article className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/70 hover:bg-slate-900">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                Парсеры и подготовка данных
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Снимаем данные с открытых источников, чистим, приводим к структуре и готовим к
                загрузке в CRM, LMS или магазины.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-emerald-300">
                Эффект: меньше ручного копипаста и ошибок в справочниках.
              </p>
            </article>

            <article className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/70 hover:bg-slate-900">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                WooCommerce-каталоги и импорт CSV
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Структура категорий, атрибуты, CSV, медиа и инструкции. Делаем так, чтобы большой
                каталог жил и обновлялся без боли.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-emerald-300">
                Эффект: магазин масштабируется без пересборки с нуля.
              </p>
            </article>

            <article className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 transition hover:border-emerald-500/70 hover:bg-slate-900">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                Отчёты и дашборды по продажам и SLA
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Собираем важные цифры в одном месте: выручка, заявки, загрузка каналов, SLA и
                узкие места воронки.
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-wide text-emerald-300">
                Эффект: владельцу и команде понятно, что работает, а что нет.
              </p>
            </article>
          </div>
        </section>

        {/* CTA НИЖЕ */}
        <section id="contact" className="space-y-4 rounded-2xl border border-emerald-500/60 bg-gradient-to-r from-emerald-500/10 via-slate-900/80 to-slate-950 p-5">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
            Можно начать с небольшой задачи или аудита
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-200">
            Опишите, где именно сейчас «болит»: заявки, выдача доступов, интеграции, отчёты,
            рутина в командах. Мы предложим 1–2 формата работы и покажем, что изменится по
            цифрам и по рутине.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Оставить заявку
            </Link>
            <p className="text-xs text-emerald-100/90 sm:text-sm">
              Можно просто скинуть ссылки на бота, платформы и кратко описать задачи — дальше
              мы зададим точечные вопросы.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
