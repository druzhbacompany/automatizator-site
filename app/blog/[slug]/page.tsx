import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPublishedSlugs } from '@/data/blog';

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const slugs = getAllPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Статья не найдена',
      robots: { index: false, follow: false }
    };
  }

  const baseTitle = `${post.title}`;
  const fullTitle = `${baseTitle} — блог об автоматизации`;

  return {
    title: fullTitle,
    description: post.excerpt,
    openGraph: {
      title: fullTitle,
      description: post.excerpt,
      type: 'article',
      url: `/blog/${post.slug}`
    },
    alternates: post.canonicalUrl
      ? {
          canonical: post.canonicalUrl
        }
      : undefined
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="py-10 lg:py-14">
      <section className="max-w-3xl mx-auto px-4">
        <div className="mb-6 text-xs text-slate-400 flex flex-wrap items-center gap-2">
          <Link href="/blog" className="hover:text-emerald-400 transition">
            ← ко всем статьям
          </Link>
        </div>

        <header className="mb-8">
          <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 mb-3">
            {post.category === 'guide'
              ? 'ГАЙД'
              : post.category === 'case'
              ? 'КЕЙС'
              : 'БЛОГ'}
          </p>

          <h1 className="text-3xl md:text-4xl font-black mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3">
            <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime}</span>
              </>
            )}
            {post.tags?.length > 0 && (
              <>
                <span>•</span>
                <span>{post.tags.join(' · ')}</span>
              </>
            )}
          </div>

          {post.excerpt && (
            <p className="text-sm text-slate-300 max-w-2xl">{post.excerpt}</p>
          )}

          {post.syndicateToZen && (
            <p className="mt-3 text-[11px] text-emerald-300/80">
              Готово к публикации в Дзен: категория «{post.zenCategory ?? 'Бизнес'}».
            </p>
          )}
        </header>

        <article className="prose prose-invert prose-sm md:prose-base max-w-none">
          {post.content.map((block, index) => {
            if (block.type === 'h2') {
              return (
                <h2 key={index} className="text-xl md:text-2xl font-semibold mt-8 mb-3">
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'p') {
              return (
                <p key={index} className="text-sm md:text-base text-slate-200 leading-relaxed">
                  {block.text}
                </p>
              );
            }

            if (block.type === 'list') {
              return (
                <ul key={index} className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === 'quote') {
              return (
                <figure
                  key={index}
                  className="border-l-4 border-emerald-500/70 pl-4 py-2 my-4 text-sm md:text-base text-slate-100/90 italic"
                >
                  {block.text}
                </figure>
              );
            }

            return null;
          })}
        </article>
      </section>
    </main>
  );
}
