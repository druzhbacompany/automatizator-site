import { NextResponse } from 'next/server';
import { getAllPosts } from '@/data/blog';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = getAllPosts();

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://automatizator-site.vercel.app';

  const items = posts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const title = escapeXml(post.title);
      const description = escapeXml(post.excerpt || '');

      return `
  <item>
    <title>${title}</title>
    <link>${url}</link>
    <guid>${url}</guid>
    <description>${description}</description>
    <pubDate>${pubDate}</pubDate>
  </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Блог Automatizator</title>
  <link>${siteUrl}/blog</link>
  <description>Статьи про автоматизацию, Telegram-ботов и системный подход к процессам.</description>
  <language>ru-ru</language>
  ${items}
</channel>
</rss>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
