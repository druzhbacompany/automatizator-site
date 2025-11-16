import { Metadata } from 'next';
import ContactForm from '@/app/components/ContactForm';

export const metadata: Metadata = {
  title: 'Связаться — Automatizator',
  description: 'Оставьте заявку — ответим в этот же день.',
};

type ContactPageProps = {
  searchParams?: { plan?: string };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const rawPlan = typeof searchParams?.plan === 'string' ? searchParams.plan : undefined;
  const decodedPlan = rawPlan ? decodeURIComponent(rawPlan) : undefined;

  return (
    <main className="py-12 lg:py-16">
        <section className="max-w-5xl mx-auto px-4">
          <header className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 mb-2">
              КОНСУЛЬТАЦИЯ СПОКОЙСТВИЯ
            </p>
            <h1 className="text-3xl md:text-4xl font-black mb-3">
              Забронируйте 30 минут, чтобы перестать бояться техсбоев
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Разберём, где техника сейчас ломает ваши запуски и ежедневную работу:
              боты, воронки, CRM, n8n-сценарии. Покажем, какие риски вы реально несёте
              в день старта и что можно привести в порядок за ближайшие 7–10 дней.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            {/* Левая колонка — бьём в боли и обещаем результат созвона */}
            <div className="space-y-5 text-sm text-slate-200">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-50">
                  Что будет на консультации
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                  <li>
                    Кратко разберём вашу текущую систему: платформы, ботов, интеграции, где сейчас
                    чаще всего «стреляет».
                  </li>
                  <li>
                    Отметим 3–5 точек риска: где вы можете потерять деньги или репутацию при
                    следующем запуске.
                  </li>
                  <li>
                    Прикинем, сколько времени и денег сейчас «съедает» техника — без сложных формул,
                    на понятных цифрах.
                  </li>
                  <li>
                    Набросаем план: что можно починить за 3–5 рабочих дней, а что потребует 2–3 недель.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-50">
                  Для кого эта консультация
                </h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-300">
                  <li>
                    Авторы курсов, у которых уже был болезненный техсбой на запуске и теперь страшно
                    выходить снова.
                  </li>
                  <li>
                    Онлайн-школы, которые растут к 500–5000 ученикам и боятся, что система не выдержит
                    нагрузку.
                  </li>
                  <li>
                    Команды, которые устали зависеть от одного фрилансера-техспеца и жить в режиме
                    «лишь бы ничего не сломалось».
                  </li>
                </ul>
              </div>

              <p className="text-[11px] text-slate-400 max-w-xl">
                Сейчас у нас нет витрины из десятков кейсов — мы осознанно стартуем как компактная
                студия. Вместо этого делаем ставку на прозрачный процесс, понятные сроки и SLA:
                если не можем дать ощутимый эффект в вашей ситуации, честно говорим об этом на
                консультации.
              </p>
            </div>

            {/* Правая колонка — форма + микротекст доверия */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-base font-semibold text-slate-50 mb-2">
                Оставьте заявку на консультацию
              </h2>
              <p className="text-xs text-slate-300 mb-4">
                Заполните так, как удобно: достаточно контакта и пары строк о задаче. Обычно мы
                отвечаем в течение одного рабочего дня.
              </p>

              {decodedPlan && (
                <div className="mb-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3">
                  <div className="font-semibold text-emerald-300 text-sm">Вы выбрали:</div>
                  <div className="mt-1 text-emerald-100 text-sm">{decodedPlan}</div>
                </div>
              )}

              <ContactForm
                source="contact-page"
                context="contact:main-form"
                initialPlan={decodedPlan}
              />

              <p className="mt-3 text-[11px] text-slate-500">
                Мы не добавляем вас в рассылки без согласия и не навязываем лишние услуги. Цель
                созвона — понять, где техника реально мешает вашему росту и имеет ли смысл подключать
                нашу команду именно сейчас.
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}
