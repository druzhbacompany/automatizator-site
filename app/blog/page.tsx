import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Блог — Automatizator',
  description:
    'Статьи про автоматизацию, Telegram-ботов, n8n и системный подход к процессам без магии и воды.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="py-12 lg:py-16">
      <section className="max-w-5xl mx-auto px-4">
        <header className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 mb-2">
            БЛОГ
          </p>
          <h1 className="text-3xl md:text-4xl font-black mb-3">
            Блог про автоматизацию и ботов без магической кнопки
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            Разбираем реальные кейсы, MVP-подход к ботам и автоматизации, ошибки, которые
            мы видели у клиентов, и что с этим делать на практике.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-slate-400 text-sm">
            Здесь пока нет опубликованных статей. Скоро появятся первые разборы.
          </p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-emerald-500/60 transition"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
                  <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                  {post.readingTime && (
                    <>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </>
                  )}
                  {post.category && (
                    <>
                      <span>•</span>
                      <span>
                        {post.category === 'guide'
                          ? 'Гайд'
                          : post.category === 'case'
                          ? 'Кейс'
                          : 'Новости'}
                      </span>
                    </>
                  )}
                </div>

                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-emerald-400 transition"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-300 mb-3">{post.excerpt}</p>

                {post.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 px-2 py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
