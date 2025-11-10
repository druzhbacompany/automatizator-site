import { services } from "@/data/services"
import ServiceCard from "./(site)/components/ServiceCard"

const services = [
  { title:"TG-контент-системы и автопостинг", desc:"Сбор контента, фильтры, расписания.", benefit:"Экономия 2–4 ч/день и стабильный рост охватов."},
  { title:"Чат-боты и мини-приложения", desc:"Запись, квизы, продажи, CRM-связки.", benefit:"Больше заявок без роста штата."},
  { title:"Интеграции: GetCourse/Salebot/Bizon", desc:"Платежи, статусы, вебинары, воронки.", benefit:"Меньше ручных ошибок и «залипаний»."},
  { title:"n8n/Make сценарии", desc:"Повторяющиеся процессы — в автоматы.", benefit:"Команда занимается задачами роста."},
  { title:"Парсеры, импорт/экспорт", desc:"Каталоги, карточки, отзывы, PDF/изображения.", benefit:"Каталог 5–10k SKU без ручного ввода."},
  { title:"Woo + Kadence + SEO", desc:"ACF/шаблоны, CSV-импорт, SEO-структура.", benefit:"Масштаб до 10k+ товаров, индексация."},
  { title:"Сайты на Lovable.dev", desc:"Лендинги и сайты с правкой через GitHub.", benefit:"Быстрый прогон идей в прод."}
];

const faqs = [
  {q:"Как стартуем?", a:"Короткий бриф → план на 2–3 итерации → MVP за 3–7 дней."},
  {q:"Сроки?", a:"MVP 3–10 дней, средние 2–4 недели."},
  {q:"Оплата?", a:"Фикс по этапам или T&M, прозрачные отчеты."},
];

export default function Home() {
  return (
    <>
      <section className="container pt-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Автоматизируем рутину.<br/> Растим выручку.
            </h1>
            <p className="small mt-4 max-w-xl">
              Сайты, боты, интеграции, парсеры и сценарии n8n — быстро, технично, с упором на результат.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#services" className="btn">Смотреть услуги</a>
              <a href="#contact" className="btn" style={{background:"#1f2937"}}>Консультация</a>
            </div>
          </div>
          <div className="card p-6 shadow-soft">
            <div className="small mb-2 text-muted">Пакеты старта</div>
            <ul className="grid gap-3">
              <li className="flex justify-between"><span>Bot MVP / автопостинг</span><span className="text-white font-semibold">от 25k</span></li>
              <li className="flex justify-between"><span>Интеграции + n8n</span><span className="text-white font-semibold">от 35k</span></li>
              <li className="flex justify-between"><span>Каталог Woo + CSV</span><span className="text-white font-semibold">от 45k</span></li>
            </ul>
            <div className="small mt-2">Цены ориентировочные — фиксируем после брифа.</div>
          </div>
        </div>
      </section>

      <Section id="services" title="Что делаем" lead="Живые решения под цели бизнеса.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s,i)=>(
            <div key={i} className="card p-5">
              <div className="text-lg font-bold mb-1">{s.title}</div>
              <p className="small mb-3">{s.desc}</p>
              <div className="text-sm text-[#e5e7eb]">✅ {s.benefit}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="sla" title="SLA / как работаем" lead="Прозрачно и предсказуемо.">
        <div className="card p-0 overflow-hidden">
          <table className="table">
            <thead><tr><th>Параметр</th><th>Базовый</th><th>Pro</th></tr></thead>
            <tbody>
              <tr><td>Реакция на баг</td><td>до 24 ч</td><td>до 4 ч</td></tr>
              <tr><td>Фикс критичных</td><td>1–3 дня</td><td>до 24 ч</td></tr>
              <tr><td>Коммуникация</td><td>Telegram/Email</td><td>+ выделенный канал</td></tr>
              <tr><td>Деплой</td><td>по запросу</td><td>CI/CD + чек-листы</td></tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="faq" title="FAQ">
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f,i)=>(
            <div key={i} className="card p-5">
              <div className="font-semibold mb-2">{f.q}</div>
              <div className="small">{f.a}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Связаться">
        <div className="card p-6">
          <p className="small mb-4">Опишите, что хотите автоматизировать — пришлём план сегодня.</p>
          <a className="btn" href="mailto:no-reply @example.local">Написать на почту</a>
        </div>
      </Section>
    </>
  );
}