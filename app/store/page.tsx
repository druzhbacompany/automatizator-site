"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ProductCategory = "chatbots" | "n8n" | "one_off" | "analytics";

type Product = {
  id: number;
  slug: string;
  title: string;
  category: ProductCategory;
  categoryLabel: string;
  short: string;
  priceFrom: number;
  rating: number;
  orders: number;
  badge?: string;
  tags: string[];
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "telegram-chatbot-business",
    title: "Telegram-чат-бот под ключ для бизнеса",
    category: "chatbots",
    categoryLabel: "Чат-боты",
    short:
      "Проектируем и запускаем Telegram-бота под продажи, заявки или поддержку клиентов.",
    priceFrom: 6000,
    rating: 4.9,
    orders: 41,
    badge: "Топ выбор",
    tags: ["Telegram", "Продажи", "Заявки"],
  },
  {
    id: 2,
    slug: "n8n-automation-pack",
    title: "Пакет автоматизаций на n8n",
    category: "n8n",
    categoryLabel: "n8n-автоматизации",
    short:
      "Связываем CRM, формы, ботов и таблицы в один живой конвейер заявок и уведомлений.",
    priceFrom: 7500,
    rating: 5.0,
    orders: 27,
    badge: "Автоматизация",
    tags: ["n8n", "CRM", "Интеграции"],
  },
  {
    id: 3,
    slug: "one-off-fixes",
    title: "Разовые задачи и аварийные фиксы",
    category: "one_off",
    categoryLabel: "Разовые задачи",
    short:
      "Закрываем точечные задачи: починить форму, поправить бота, настроить триггер.",
    priceFrom: 2500,
    rating: 4.8,
    orders: 53,
    badge: "Срочно",
    tags: ["Фиксы", "Баги", "Поддержка"],
  },
  {
    id: 4,
    slug: "analytics-dashboards",
    title: "Отчётность и аналитика по заявкам",
    category: "analytics",
    categoryLabel: "Аналитика",
    short:
      "Собираем данные из ботов, форм и CRM в понятные дашборды и сводки для владельца.",
    priceFrom: 9000,
    rating: 4.9,
    orders: 18,
    tags: ["Отчёты", "Дашборды", "BI"],
  },
];

const CATEGORY_FILTERS: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "Все услуги" },
  { id: "chatbots", label: "Чат-боты" },
  { id: "n8n", label: "n8n-автоматизации" },
  { id: "one_off", label: "Разовые задачи" },
  { id: "analytics", label: "Аналитика" },
];

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<"all" | ProductCategory>(
    "all",
  );
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (activeCategory !== "all" && product.category !== activeCategory) {
        return false;
      }

      if (!search.trim()) return true;

      const query = search.toLowerCase();
      return (
        product.title.toLowerCase().includes(query) ||
        product.short.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, search]);

  return (
    <main className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* Заголовок страницы */}
        <header className="mb-6 space-y-3 sm:mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500">
            Магазин автоматизаций
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-[32px]">
            Готовые услуги и решения по автоматизации
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Здесь будут собраны продающие пакеты: чат-боты, n8n-сценарии,
            аналитика и разовые задачи. Каждый продукт — понятная карточка с
            описанием, сроками и ценой.
          </p>
        </header>

        {/* Фильтры */}
        <section className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Категории */}
          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                    isActive
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Поиск */}
          <div className="w-full sm:w-auto sm:min-w-[260px]">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs sm:text-sm">
              <span className="text-slate-400">🔍</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Найти услугу по названию или тегу"
                className="h-7 w-full border-none bg-transparent text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </section>

        {/* Грид карточек */}
        <section>
          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-4 py-10 text-center text-sm text-slate-500 sm:px-6">
              По выбранным фильтрам ничего не найдено. Попробуйте изменить
              запрос или категорию.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5"
                >
                  <div className="space-y-3">
                    {/* Топ карточки */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                        {product.categoryLabel}
                      </span>
                      {product.badge && (
                        <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Заглушка под визуал */}
                    <div className="h-24 w-full rounded-xl bg-slate-100" />

                    {/* Текст */}
                    <div className="space-y-1.5">
                      <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                        {product.title}
                      </h2>
                      <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                        {product.short}
                      </p>
                    </div>
                  </div>

                  {/* Низ карточки */}
                  <div className="mt-4 flex items-end justify-between gap-3 text-xs sm:text-sm">
                    <div className="space-y-1">
                      <div className="text-[11px] uppercase tracking-wide text-slate-400">
                        от
                      </div>
                      <div className="text-base font-semibold text-slate-900 sm:text-lg">
                        {product.priceFrom.toLocaleString("ru-RU")} ₽
                      </div>
                      <div className="text-slate-500">
                        ⭐ {product.rating.toFixed(1)} · {product.orders} заказов
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex flex-wrap justify-end gap-1">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/store/${product.slug}`}
                        className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-emerald-600 sm:text-xs"
                      >
                        Подробнее
                        <span className="ml-1.5">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
