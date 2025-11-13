import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты и формат работы | Automatizator",
  description:
    "Как с нами связаться, какие вопросы задаём на старте и как выглядит совместная работа по автоматизации.",
};

export default function ContactsPage() {
  return (
    <main className="border-t border-[#20242e]">
      <div className="container py-10 space-y-10">
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
            Контакты и формат работы
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            Мы — команда технических специалистов по автоматизации онлайн-бизнеса.
            Ниже коротко описали, как лучше всего с нами связаться и что происходит после первого контакта.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
              Как лучше всего к нам обратиться
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Базовый и самый удобный вариант — оставить заявку через форму.
              Так мы сразу получаем структурированную информацию и можем быстро оценить задачу.
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Форма на сайте.</span>{" "}
                  Перейдите на страницу{" "}
                  <Link
                    href="/contact"
                    className="text-emerald-300 hover:text-emerald-200 underline underline-offset-2"
                  >
                    «Оставить заявку»
                  </Link>{" "}
                  и коротко опишите задачу: на чём работает проект, что
                  хотите автоматизировать и какие есть ограничения.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Ответ на вопросы брифа.</span>{" "}
                  При необходимости мы пришлём небольшой уточняющий бриф, чтобы
                  собрать технические и бизнес-детали.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Созвон или переписка.</span>{" "}
                  Дальше обсуждаем детали в удобном формате: созвон, голосовые
                  или текстом. На этом этапе формируем предложение.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
              Что подготовить заранее
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Не обязательно иметь всё сразу, но эти вещи сильно ускоряют старт.
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                <span>Ссылки на бота, лендинги, личный кабинет или CRM.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                <span>Краткое описание текущего процесса: как сейчас всё работает.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
                <span>Цели по результату: цифры, нагрузки, сроки, приоритеты.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
              Как устроен процесс после заявки
            </h2>
            <ol className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-2">
                <span className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 text-[11px] font-semibold">
                  1
                </span>
                <span>Разбираем ваш запрос и задаём несколько уточняющих вопросов.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 text-[11px] font-semibold">
                  2
                </span>
                <span>Формируем 1–2 варианта решения с примерными бюджетами и сроками.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 text-[11px] font-semibold">
                  3
                </span>
                <span>Согласуем стек и формат работы (разовая задача, пакет, поддержка).</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[2px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 text-[11px] font-semibold">
                  4
                </span>
                <span>Закрепляем договорённости и стартуем с пилота или приоритетной задачи.</span>
              </li>
            </ol>
          </div>

          <div className="space-y-4 rounded-2xl border border-emerald-500/60 bg-gradient-to-b from-emerald-500/10 via-slate-900/80 to-slate-950 p-5">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
              Готовы обсудить ваш проект
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              Если вы не уверены, с чего начать, — достаточно описать пару проблемных мест.
              Мы поможем сформулировать задачу и предложим понятный план по шагам.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
              >
                Оставить заявку
              </Link>
              <p className="text-xs sm:text-sm text-emerald-100/90">
                Чем больше контекста вы дадите на старте, тем быстрее мы
                предложим конкретные решения и бюджеты.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
EOF