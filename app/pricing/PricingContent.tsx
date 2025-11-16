'use client';

import Link from 'next/link';

export default function PricingContent() {
  return (
    <section className="mt-16 max-w-5xl mx-auto px-4">
      <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 mb-2">
        ПАКЕТЫ И ФОРМАТЫ РАБОТЫ
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold mb-3">
        Три пакета под разный уровень хаоса и масштаба
      </h2>
      <p className="text-sm text-slate-300 mb-6 max-w-3xl">
        Мы не продаём «одну кнопку автоматизации». У кого-то впереди первый запуск,
        у кого-то регулярные релизы, у кого-то уже сеть проектов. Пакеты ниже — про
        разный уровень риска, нагрузки и контроля, а не просто разный ценник.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        {/* START */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-1">
            ПАКЕТ START
          </p>
          <h3 className="text-sm font-semibold mb-1">
            Базовая автоматизация без техпаники на запуске
          </h3>
          <p className="text-xs text-slate-300 mb-2">
            Для тех, у кого впереди первый запуск или пересборка системы. Хочется,
            чтобы всё просто не легло в день старта и заявки не терялись по дороге.
          </p>
          <p className="text-sm font-semibold text-emerald-300 mb-3">от 45&nbsp;000 ₽</p>
          <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4 mb-3">
            <li>Собираем «скелет» системы: бот / форма → CRM → уведомления команде.</li>
            <li>Минимальный набор автоматизации под конкретный запуск, без лишнего.</li>
            <li>Чек-лист «анти-техсбой» и тестовый прогон перед стартом.</li>
            <li>Краткая документация: что где лежит и как этим пользоваться.</li>
          </ul>
          <p className="text-[11px] text-slate-400 mb-4">
            Подходит, если вы боитесь сорвать запуск из-за техники и хотите первый
            контролируемый опыт автоматизации, а не гигантскую систему «на вырост».
          </p>
          <Link
            href={`/contact?plan=${encodeURIComponent('Пакет START (базовая автоматизация)')}`}
            className="mt-auto inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            Обсудить пакет START
          </Link>
        </article>

        {/* GROW */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-1">
            ПАКЕТ GROW
          </p>
          <h3 className="text-sm font-semibold mb-1">
            Рост и систематизация без постоянных техпожаров
          </h3>
          <p className="text-xs text-slate-300 mb-2">
            Для проектов, которые уже продают и запускаются, но за кулисами — хаос:
            дубли заявок, потерянные оплаты, вечные ручные проверки.
          </p>
          <p className="text-sm font-semibold text-emerald-300 mb-3">от 75&nbsp;000 ₽</p>
          <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4 mb-3">
            <li>Аудит текущей архитектуры: где именно теряются деньги и заявки.</li>
            <li>Пересборка ключевых сценариев (заявки, оплаты, доступы, уведомления).</li>
            <li>Нормальные отчёты: что работает, где узкие места, где вы теряете выручку.</li>
            <li>Базовые резервные цепочки на случай сбоев (план B, а не «паника в чате»).</li>
          </ul>
          <p className="text-[11px] text-slate-400 mb-4">
            Подходит, если команда уже выгорела от ручных проверок и страха «что-то тронуть»,
            а вы хотите систему, которая выдерживает регулярные запуски без потерь.
          </p>
          <Link
            href={`/contact?plan=${encodeURIComponent('Пакет GROW (рост и систематизация)')}`}
            className="mt-auto inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            Обсудить пакет GROW
          </Link>
        </article>

        {/* SCALE */}
        <article className="rounded-2xl border border-emerald-600 bg-slate-900/80 p-5 flex flex-col relative">
          <div className="absolute -top-2 right-4 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-slate-950">
            для сетей и нескольких направлений
          </div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 mb-1">
            ПАКЕТ SCALE
          </p>
          <h3 className="text-sm font-semibold mb-1">
            Масштабирование без зависимости от одного техспеца
          </h3>
          <p className="text-xs text-slate-300 mb-2">
            Для школ, проектов и сетей, где на одного человека завязана вся техника. Страшно
            масштабироваться, потому что любое изменение может «уронить» систему.
          </p>
          <p className="text-sm font-semibold text-emerald-300 mb-3">от 120&nbsp;000 ₽</p>
          <ul className="text-[11px] text-slate-300 space-y-1 list-disc pl-4 mb-3">
            <li>Перестраиваем систему под рост: разгружаем узкие места и хрупкие точки.</li>
            <li>Наводим порядок с доступами и конфигурациями, убираем «магические» настройки.</li>
            <li>Делаем базовую документацию: схемы, инструкции для команды, список рисков.</li>
            <li>Настраиваем формат сопровождения и SLA под ваши запуски и сезонность.</li>
          </ul>
          <p className="text-[11px] text-slate-400 mb-4">
            Подходит, если вы хотите расти до сети / нескольких направлений и при этом не жить
            в страхе, что один человек уйдёт — и всё встанет.
          </p>
          <Link
            href={`/contact?plan=${encodeURIComponent('Пакет SCALE (масштабирование, сети)')}`}
            className="mt-auto inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            Обсудить пакет SCALE
          </Link>
        </article>
      </div>

      <p className="mt-5 text-[11px] text-slate-400 max-w-3xl">
        Сейчас у нас нет витрины из десятков кейсов — мы осознанно стартуем компактной студией.
        Вместо этого делаем ставку на прозрачный процесс, понятные сроки и аккуратную техподдержку.
        Если вы не уверены, какой пакет вам подойдёт, просто оставьте заявку — на созвоне честно
        скажем, что имеет смысл делать в вашей ситуации, а что — нет.
      </p>
    </section>
  );
}
