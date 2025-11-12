import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Базовые security-хедеры
  res.headers.set('X-Content-Type-Options', 'nosniff');
  res.headers.set('X-Frame-Options', 'SAMEORIGIN');
  res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Полный robots только для preview
  const isPreview = process.env.VERCEL_ENV === 'preview';
  if (isPreview) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  } else {
    // На проде — перестраховка: уберём X-Robots-Tag, если он где-то прилип
    res.headers.delete('X-Robots-Tag');
  }

  return res;
}

export const config = {
  matcher: '/:path*',
};
