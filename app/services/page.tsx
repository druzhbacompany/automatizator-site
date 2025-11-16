import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Услуги по автоматизации — Automatizator',
  description:
    'Мини-агентство по автоматизации запусков и онлайн-школ: боты, интеграции, n8n, техсопровождение.',
};

export default function ServicesPage() {
  return (
    <main className="py-12 lg:py-16">
      <section className="max-w-5xl mx-auto px-4">
        <header className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 mb-2">
            услуги
          </p>
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Автоматизация, которая прекращает техсбои, а не добавляет ещё один сервис в ваш хаос
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-3xl">
            Мы работаем как мини-техдирекция: разбираем ваш зоопарк из сервисов,
            находим слабые места и собираем систему так, чтобы в день запуска вы не
            проверяли всё по сто раз и не надеялись на удачу.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#services-grid"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Посмотреть услуги
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-900/60 transition"
            >
              Разобрать мой теххаос на консультации
            </Link>
          </div>
        </header>

        {/* С какими ситуациями мы работаем */}
        <section className="mb-12 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            С какими ситуациями мы работаем
          </h2>
          <p className="text-sm text-slate-300 max-w-3xl">
            Чаще всего к нам приходят не «за ботом», а из-за ощущений: страшно запускаться,
            стыдно за технику перед аудиторией, команда выгорает на ручных костылях.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold mb-2">
                Был болезненный техсбой, страшно запускаться снова
              </h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                <li>Запуски, вебинары, интенсины: кто-то не получил доступ, оплаты потерялись.</li>
                <li>Каждый новый старт — как лотерея «повезёт / не повезёт».</li>
                <li>Нужен понятный план, что починить прямо сейчас, чтобы не проживать это второй раз.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold mb-2">
                Система выросла из «халтурки» и вот-вот развалится
              </h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                <li>Несколько подрядчиков настраивали всё по кусочкам, общей картины нет.</li>
                <li>Любое изменение — как разминирование: страшно трогать, чтобы не сломать остальное.</li>
                <li>Хотите расти, но боитесь, что техника не выдержит 2–3-кратного увеличения нагрузки.</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold mb-2">
                Всё держится на одном фрилансере
              </h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4">
                <li>Вся логика и доступы — в голове одного человека.</li>
                <li>Если он заболеет или уйдёт, запуск под угрозой, команда ничего не понимает.</li>
                <li>Нужна мини-команда и документация, чтобы бизнес не зависел от одного исполнителя.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Сетка услуг */}
        <section id="services-grid" className="mb-12 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Что мы делаем для наведения порядка
          </h2>
          <p className="text-sm text-slate-300 max-w-3xl">
            Каждый блок услуг завязан на конкретные болевые сценарии — мы не настраиваем «ещё один сервис»,
            а собираем рабочую систему вокруг ваших запусков и ежедневной рутины.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-2">
                Услуга
              </p>
              <h3 className="text-sm font-semibold mb-2">
                Telegram-боты и воронки без техсбоев в день старта
              </h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4 mb-3">
                <li>Сводим заявки, оплаты и выдачу доступов в одну логичную цепочку.</li>
                <li>Готовим и прогоняем чек-лист «анти-техсбой» перед запуском.</li>
                <li>Делаем бота, в котором не страшно что-то менять перед следующими волнами.</li>
              </ul>
              <Link
                href="/contact?plan=Интересует%20бот%20и%20воронка"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                Обсудить бота и воронку
              </Link>
            </article>
            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-2">
                Услуга
              </p>
              <h3 className="text-sm font-semibold mb-2">
                Интеграции, n8n и CRM без «костылей», от которых всё зависит
              </h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4 mb-3">
                <li>Разбираем, какие интеграции действительно нужны, а какие создают хаос.</li>
                <li>Пересобираем сценарии так, чтобы падение одного сервиса не ломало весь процесс.</li>
                <li>Фиксируем архитектуру в схеме, чтобы команда понимала, как всё работает.</li>
              </ul>
              <Link
                href="/contact?plan=Интересуют%20интеграции%20и%20n8n"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                Разобрать мои интеграции
              </Link>
            </article>
            <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-2">
                Сопровождение
              </p>
              <h3 className="text-sm font-semibold mb-2">
                Техсопровождение запусков и онлайн-школ
              </h3>
              <ul className="text-xs text-slate-300 space-y-1 list-disc pl-4 mb-3">
                <li>До старта: прогоны, тестовые оплаты и доступы по чек-листу.</li>
                <li>Во время пиков: мы на связи, ловим сбои до того, как они становятся публичной катастрофой.</li>
                <li>После: разбор инцидентов и донастройка системы под следующие волны.</li>
              </ul>
              <Link
                href="/contact?plan=Интересует%20техсопровождение%20запусков"
                className="mt-auto inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
              >
                Настроить техсопровождение
              </Link>
            </article>
          </div>
        </section>

        {/* Почему с нами спокойнее */}
        <section className="mb-12 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Почему с нами спокойнее, чем с одиночным фрилансером
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold mb-2">
                Мини-команда вместо одного «супергероя»
              </h3>
              <p className="text-xs text-slate-300">
                Над проектом всегда минимум два человека в курсе: один ведёт, второй знает контекст.
                Это снижает риск остановки процессов из-за болезни или выгорания одного исполнителя.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold mb-2">
                Документация и порядок в доступах
              </h3>
              <p className="text-xs text-slate-300">
                Мы собираем карту системы, наводим порядок в логинах и доступах, фиксируем критические сценарии.
                Бизнес перестаёт зависеть от одной головы и одной записной книжки.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold mb-2">
                Вменяемые SLA вместо обещаний «24/7»
              </h3>
              <p className="text-xs text-slate-300">
                Для рабочих задач и критических сбоев — разные окна реакции.
                Мы не обещаем невозможное, но честно выполняем то, что берём на себя.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold mb-2">
                Честный отбор задач
              </h3>
              <p className="text-xs text-slate-300">
                Если ваш запрос не окупится или не вписывается в наш формат — мы прямо говорим об этом.
                Наша задача — не продать «максимальный пакет», а собрать рабочую систему.
              </p>
            </article>
          </div>
        </section>

        {/* Финальный CTA */}
        <section className="rounded-2xl border border-emerald-500/60 bg-gradient-to-r from-emerald-500/10 via-slate-900/80 to-slate-950 p-5 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Не обязательно сразу знать, какая услуга вам нужна
          </h2>
          <p className="text-sm text-slate-200 max-w-3xl">
            Опишите, где сейчас болит: что ломается на пути клиента, где вы боитесь запуска, какие техсбоев уже прожили.
            Мы предложим 1–2 варианта без давления и поможем выбрать, с чего разумнее начать.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Разобрать мой теххаос
            </Link>
            <p className="text-xs text-emerald-200/90">
              Ответ обычно в течение рабочего дня. Если задача горит — сразу напишите об этом в сообщении.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
