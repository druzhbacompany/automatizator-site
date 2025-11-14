import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Тарифы и сопровождение автоматизации — Автоматизатор',
  description:
    'Пакеты START, GROW и SCALE для онлайн-школ: внедрение GetCourse, Salebot, Bizon365 и резервных интеграторов с понятным SLA и поддержкой.',
};

const pricingFaq = [
  {
    q: 'Почему цены “от”, а не фиксированные?',
    a: 'Объём задач по автоматизации сильно отличается от проекта к проекту. Базовые пакеты описывают типовой объём работ, но внутри них всегда есть вариации по числу сценариев, сервисов и доработок. На первой консультации мы фиксируем конкретный объём и бюджет под вашу ситуацию.',
  },
  {
    q: 'Можно начать с маленькой задачи, не заходя в большой пакет?',
    a: 'Да. Часто мы начинаем с одной–двух задач: докрутить бота, починить интеграцию, собрать отчёт. Для этого есть блок с разовыми задачами и мини-проектами. После этого можно перейти в пакет START / GROW / SCALE или остаться на формате задач и ретейнера.',
  },
  {
    q: 'Вы работаете по договору и безналу?',
    a: 'Да. По запросу оформляем договор, акт и работаем по безналичному расчёту от ИП или ООО. Условия фиксируются до начала работ.',
  },
  {
    q: 'Что если проект вырастет и нужно перейти с START на GROW или SCALE?',
    a: 'Переход между пакетами возможен в любой момент. Мы оцениваем текущий объём автоматизации, план по росту и предлагаем апгрейд с учётом уже сделанных работ, а не “с нуля”.',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* HERO */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Пакеты внедрения и сопровождения автоматизации
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Тарифы и сопровождение автоматизации
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Три пакета под разные этапы роста онлайн-школы: от авторов одиночных курсов до B2B white-label.
              Фиксированные сроки, понятный бюджет и прописанный SLA — без сюрпризов и “магии в чёрном ящике”.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Обсудить задачу
            </a>
            <p className="text-xs text-slate-400 sm:text-sm">
              На первой консультации разбираем текущую систему и подбираем формат: пакет или разовые задачи.
            </p>
          </div>
        </section>

        {/* ПАКЕТЫ START / GROW / SCALE */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Три пакета для разных этапов роста
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              START, GROW и SCALE — это связки GetCourse, Salebot, Bizon365 и резервных интеграторов,
              заточенные под конкретный уровень онлайн-школы: от одиночных курсов до B2B white-label-решений.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* START */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                START
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  для авторов курсов
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-50">Авторы одиночных курсов</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Для тех, кто запускает или перезапускает один курс и хочет, чтобы продажи, доступы и сообщения
                студентам работали без ручной рутины.
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-sm text-slate-300">
                  Проект: <span className="font-semibold text-slate-50">45 000 ₽</span>
                </p>
                <p className="text-sm text-slate-300">
                  Поддержка: <span className="font-semibold text-slate-50">3 000 ₽/мес</span>
                </p>
                <p className="text-xs text-slate-400">Сроки внедрения — до 5 рабочих дней.</p>
              </div>
              <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-300 sm:text-sm">
                <li>• Базовая структура GetCourse: продукты, уроки, платежи.</li>
                <li>• Автоматический доступ к курсу после оплаты.</li>
                <li>• Email-уведомления по ключевым событиям.</li>
                <li>• Небольшой Telegram-бот/уведомления через Salebot.</li>
                <li>• Видео-гайд по работе с системой.</li>
                <li>• 1 месяц поддержки включён.</li>
              </ul>
              <div className="mt-4 space-y-1 text-xs text-slate-400">
                <p>Не входит: сложные интеграции и кастомная разработка — только типовой стек.</p>
              </div>
            </div>

            {/* GROW */}
            <div className="flex flex-col rounded-2xl border border-emerald-500 bg-slate-900/80 p-5 shadow-[0_0_0_1px_rgba(16,185,129,0.35)]">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                GROW
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  оптимальный выбор
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-50">Растущие онлайн-школы</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Для школ с растущими бюджетами на рекламу, несколькими продуктами и сложными воронками.
                Здесь важны стабильность, аналитика и резервные сценарии.
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-sm text-slate-300">
                  Проект: <span className="font-semibold text-slate-50">75 000 ₽</span>
                </p>
                <p className="text-sm text-slate-300">
                  Поддержка: <span className="font-semibold text-slate-50">7 000 ₽/мес</span>
                </p>
                <p className="text-xs text-slate-400">Сроки внедрения — обычно 7–10 рабочих дней.</p>
              </div>
              <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-300 sm:text-sm">
                <li>• Оптимизация GetCourse под текущий и планируемый объём.</li>
                <li>• Salebot: лид-боты, поддержка, FAQ, сценарии дооплаты.</li>
                <li>• Bizon365 для вебинаров и автоворонок.</li>
                <li>• Резервный интегратор (например, Albato) на случай отказа основного сервиса.</li>
                <li>• Отчётность по ключевым метрикам в Google Sheets / CRM.</li>
                <li>• SLA-договор минимум на 12 месяцев.</li>
              </ul>
              <div className="mt-4 space-y-1 text-xs text-slate-400">
                <p>СLA: ответ до 2 часов (24/7), исправление типовых инцидентов до 12 часов, Uptime 99.5%+.</p>
                <p>При нарушении SLA — скидки или дополнительные часы работ по договорённости.</p>
              </div>
            </div>

            {/* SCALE */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-300">
                SCALE
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  B2B / white-label
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-50">B2B и white-label-решения</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Для агентств и крупных проектов, которые продают интеграции и автоматизацию как свой продукт
                и требуют предсказуемого SLA и резервных сценариев.
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-sm text-slate-300">
                  Проект:{' '}
                  <span className="font-semibold text-slate-50">
                    120–150 000 ₽
                  </span>
                </p>
                <p className="text-sm text-slate-300">
                  Поддержка: <span className="font-semibold text-slate-50">10–15 000 ₽/мес</span>
                </p>
                <p className="text-xs text-slate-400">Сроки внедрения обсуждаются индивидуально (обычно 10–20 дней).</p>
              </div>
              <ul className="mt-4 flex-1 space-y-2 text-xs text-slate-300 sm:text-sm">
                <li>• White-label-архитектура: интеграции как продукт под вашим брендом.</li>
                <li>• Стек: GetCourse, Salebot/Vakas, Albato, Bizon365, GA4, Roistat, CRM.</li>
                <li>• Документация и регламенты для команды и поддержки.</li>
                <li>• Мониторинг, алерты и регулярные отчёты.</li>
                <li>• Индивидуальные условия SLA и компенсаций.</li>
              </ul>
              <div className="mt-4 space-y-1 text-xs text-slate-400">
                <p>Uptime до 99.9% (без учёта отказов платформ), приоритетный канал связи и on-call по критичным инцидентам.</p>
              </div>
            </div>
          </div>
        </section>

        {/* МАЛЕНЬКИЕ ЗАДАЧИ */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Реализуем небольшие задачи
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Не обязательно сразу заходить в большой пакет. Часто мы начинаем с одной–двух задач: докрутить бота,
              починить интеграцию, собрать отчёт. Это помогает протестировать сотрудничество и увидеть эффект на
              цифрах, а потом перейти к большему объёму.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                Разовая задача «под ключ»
              </h3>
              <p className="mt-1 text-sm font-semibold text-emerald-300">от 4 000 до 12 000 ₽</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Одна услуга на выбор: интеграция, сценарий бота, отчёт, мелкий фикс. Формат: вы описываете проблему,
                мы предлагаем решение и фиксируем бюджет до начала работ.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                Мини-проект на 2–3 услуги
              </h3>
              <p className="mt-1 text-sm font-semibold text-emerald-300">
                от 15 000 до 35 000 ₽ + 2–4 000 ₽/мес поддержки
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Например: бот + GetCourse + отчёты, или интеграция нескольких сервисов в одну воронку. Хороший формат,
                чтобы собрать ядро автоматизации и дальше перейти в GROW или ретейнер.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                Ретейнер без крупного проекта
              </h3>
              <p className="mt-1 text-sm font-semibold text-emerald-300">от 2 000 до 10 000 ₽/мес</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                Вечная поддержка и мониторинг ключевых сценариев, очередь задач, мелкие улучшения. Вы не держите
                техспециалиста в штате, но у вас всегда есть кто-то “на проводе”.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-400 sm:text-sm">
            Все эти задачи могут входить внутрь пакетов START / GROW / SCALE. На консультации решаем, выгоднее собрать
            их в пакет или закрыть точечно.
          </p>
        </section>

        {/* SLA ТАБЛИЦА */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Уровни поддержки и SLA
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Мы фиксируем понятные сроки реакции и каналы связи, чтобы автоматизация не превращалась в “чёрный ящик”.
              Ниже — базовые ориентиры по пакетам, детали уточняем в договоре.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60">
            <table className="min-w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80">
                  <th className="px-4 py-3 text-left font-semibold text-slate-300">Параметр</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-300">START</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-300">GROW</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-300">SCALE</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800/60">
                  <td className="px-4 py-3 text-slate-300">Время первой реакции</td>
                  <td className="px-4 py-3 text-slate-300">до 4 часов в рабочие дни</td>
                  <td className="px-4 py-3 text-slate-300">до 2 часов, 24/7</td>
                  <td className="px-4 py-3 text-slate-300">до 1 часа, 24/7</td>
                </tr>
                <tr className="border-b border-slate-800/60">
                  <td className="px-4 py-3 text-slate-300">Время исправления типовой задачи</td>
                  <td className="px-4 py-3 text-slate-300">до 24 часов</td>
                  <td className="px-4 py-3 text-slate-300">до 12 часов</td>
                  <td className="px-4 py-3 text-slate-300">4–8 часов по критичным инцидентам</td>
                </tr>
                <tr className="border-b border-slate-800/60">
                  <td className="px-4 py-3 text-slate-300">Гарантированный Uptime автоматизаций</td>
                  <td className="px-4 py-3 text-slate-300">99%+ (за вычетом отказов платформ)</td>
                  <td className="px-4 py-3 text-slate-300">99.5%+ (за вычетом отказов платформ)</td>
                  <td className="px-4 py-3 text-slate-300">до 99.9% (за вычетом отказов платформ)</td>
                </tr>
                <tr className="border-b border-slate-800/60">
                  <td className="px-4 py-3 text-slate-300">Каналы связи</td>
                  <td className="px-4 py-3 text-slate-300">Telegram + e-mail</td>
                  <td className="px-4 py-3 text-slate-300">Telegram + созвоны по запросу</td>
                  <td className="px-4 py-3 text-slate-300">Выделенный чат, регулярные созвоны, on-call</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-300">Компенсации при нарушении SLA</td>
                  <td className="px-4 py-3 text-slate-300">
                    Быстрый фикс, без денежных компенсаций
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    Скидки или дополнительные часы работ по договорённости
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    Индивидуальные условия компенсаций, закреплённые в договоре
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Частые вопросы про деньги и сроки
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Здесь коротко отвечаем на вопросы, которые чаще всего задают перед стартом. На созвоне можем разобрать
              ваш кейс подробнее и показать, как это выглядело у похожих проектов.
            </p>
          </div>
          <div className="space-y-4">
            {pricingFaq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">{item.q}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ФИНАЛЬНЫЙ CTA */}
        <section className="space-y-4 rounded-2xl border border-emerald-500/60 bg-gradient-to-r from-emerald-500/10 via-slate-900/80 to-slate-950 p-5">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Не обязательно сразу знать, какой пакет вам нужен
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Опишите текущую ситуацию: на чём работает школа, где ломается путь клиента, какие задачи уже пробовали
            решать. Мы предложим 1–2 варианта с понятным бюджетом и сроками и поможем выбрать, с чего разумнее начать.
          </p>          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Оставить заявку
            </a>
            <p className="text-xs text-emerald-200/90 sm:text-sm">
              Ответ обычно в течение рабочего дня. Если задача горит — можно сразу указать это в сообщении.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
