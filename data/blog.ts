// data/blog.ts

export type BlogPostContentBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string; author?: string };

export type BlogPostCategory = 'guide' | 'case' | 'news';

export type BlogPostStatus = 'draft' | 'published';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  updatedAt?: string;
  tags: string[];
  category?: BlogPostCategory;
  readingTime?: string;
  heroImage?: string;
  canonicalUrl?: string;
  status: BlogPostStatus;
  syndicateToZen?: boolean;
  zenCategory?: string;
  zenCover?: string;
  content: BlogPostContentBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'telegram-bot-mvp-for-business',
    title: 'С чего начать с Telegram-бота: MVP, который реально работает',
    excerpt:
      'Разбираем, как запустить минимально жизнеспособного бота за 2–3 недели, не превратив проект в вечную стройку.',
    date: '2025-11-01',
    tags: ['telegram', 'боты', 'mvp', 'лидогенерация'],
    category: 'guide',
    readingTime: '8 минут',
    status: 'published',
    syndicateToZen: true,
    zenCategory: 'Бизнес и технологии',
    content: [
      {
        type: 'h2',
        text: 'Почему Telegram-бот — это не “игрушка”, а канал продаж',
      },
      {
        type: 'p',
        text: 'У большинства бизнесов бот появляется “потому что у всех есть”. В итоге — сложное меню, куча сценариев и почти нулевой результат. Правильнее смотреть на бота как на интерфейс к уже существующим процессам: заявкам, оплатам, записям, поддержке.',
      },
      {
        type: 'p',
        text: 'MVP-бот — это не “обрезанная версия”. Это минимальный набор веток, который закрывает конкретную задачу: записать клиента, принять оплату, собрать лид, прогреть перед консультацией.',
      },
      {
        type: 'h2',
        text: 'Какие процессы имеет смысл отдать боту в первую очередь',
      },
      {
        type: 'list',
        items: [
          'Первичный сбор заявки: имя, контакт, интересующий продукт/услуга.',
          'Запись на консультацию или пробный урок в удобные слоты.',
          'Прогрев: выдача ответов на частые вопросы и базовые возражения.',
          'Уведомления менеджеру в CRM / чат при новой заявке.',
        ],
      },
      {
        type: 'quote',
        text: 'Хороший MVP-бот делает одну вещь, но делает её стабильно: каждый день приносит понятные, структурированные заявки.',
      },
    ],
  },
  {
    slug: 'automation-for-beauty-salons',
    title: 'Автоматизация салона красоты: как перестать терять записи в мессенджерах',
    excerpt:
      'Типовая ситуация: клиенты пишут в WhatsApp и Telegram, администраторы путаются в переписках. Рассказываем, как собрать систему, в которой заявки не теряются.',
    date: '2025-11-05',
    tags: ['салон красоты', 'автоматизация', 'локальный бизнес', 'кейсы'],
    category: 'case',
    readingTime: '10 минут',
    status: 'draft',
    syndicateToZen: false,
    content: [
      {
        type: 'h2',
        text: 'Что обычно происходит в салонах без автоматизации',
      },
      {
        type: 'p',
        text: 'Администраторы ведут записи в тетрадях, Excel или внутри мессенджеров. Клиент написал в Instagram*, потом продублировал в Telegram, а в день визита никто не подтвердил запись — и слот просто “сгорел”.',
      },
      {
        type: 'p',
        text: 'Владелец видит наполненный день администратора, но не видит, сколько денег теряется на пропущенных и забытых заявках.',
      },
      {
        type: 'h2',
        text: 'Как выглядит минимальный набор автоматизации для салона',
      },
      {
        type: 'list',
        items: [
          'Единая точка входа заявок: бот или форма, которая сразу пишет в CRM.',
          'Автоматические напоминания клиенту о записи за 24 и 3 часа.',
          'Уведомления администратору о новых заявках и переносах.',
          'Быстрый отчёт по загруженности мастеров и потерянным заявкам.',
        ],
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.status === 'published').sort(
    (a, b) => (a.date < b.date ? 1 : -1),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(
    (post) => post.slug === slug && post.status === 'published',
  );
}

export function getAllPublishedSlugs(): string[] {
  return BLOG_POSTS.filter((post) => post.status === 'published').map(
    (post) => post.slug,
  );
}
