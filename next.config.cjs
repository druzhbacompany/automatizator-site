/** @type {import('next').NextConfig} */
const isPreview = process.env.VERCEL_ENV === 'preview';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const robotsHeaders = isPreview
  ? [{ key: 'X-Robots-Tag', value: 'noindex, nofollow, noarchive' }]
  : [];

module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [...securityHeaders, ...robotsHeaders],
      },
    ];
  },
};
