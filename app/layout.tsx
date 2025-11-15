import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatizator — Автоматизации и интеграции",
  description: "Сайты, боты, интеграции, парсеры, n8n — под ключ.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/75 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-slate-50">
                Automatizator
              </span>
            </Link>

            <nav className="flex items-center gap-6 text-sm text-slate-300">
              <Link href="/services" className="hover:text-white">
                Услуги
              </Link>
              <Link href="/pricing" className="hover:text-white">
                Цены и SLA
              </Link>
              <Link href="/approach" className="hover:text-white">
                Подход
              </Link>
              <Link href="/#faq" className="hover:text-white">
                FAQ
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
              >
                Связаться
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-[#20242e] mt-16">
          <div className="container py-8 small">© {new Date().getFullYear()} Automatizator</div>
        </footer>
      </body>
    </html>
  );
}