import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatizator — Автоматизации и интеграции",
  description: "Сайты, боты, интеграции, парсеры, n8n — под ключ.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="border-b border-[#20242e] sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b0cb3]">
          <div className="container flex items-center justify-between py-4">
            <div className="font-black tracking-tight text-xl">Automatizator</div>
            <nav className="flex items-center gap-6 text-sm text-muted">
              <a href="#services" className="hover:text-white">Услуги</a>
              <a href="#sla" className="hover:text-white">SLA</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#contact" className="btn">Связаться</a>
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