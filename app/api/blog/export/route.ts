import { NextResponse } from 'next/server';
import { getAllPosts } from '@/data/blog';

export async function GET() {
  const posts = getAllPosts();

  const payload = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    tags: post.tags,
    category: post.category,
    readingTime: post.readingTime,
    syndicateToZen: post.syndicateToZen ?? false,
    zenCategory: post.zenCategory ?? null,
    heroImage: post.heroImage ?? null,
    canonicalUrl: post.canonicalUrl ?? null,
    // Блоки контента как есть — удобно парсить на стороне n8n/скрипта
    content: post.content,
  }));

  return NextResponse.json(
    {
      source: 'automatizator-blog',
      version: 1,
      generatedAt: new Date().toISOString(),
      posts: payload,
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=60',
      },
    },
  );
}
