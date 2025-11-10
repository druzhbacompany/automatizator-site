import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AUTOMATIZATOR — SLA, резерв и вечная поддержка",
  description: "SLA-гарантии, резервные интеграции и вечная поддержка для онлайн-школ и авторов."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-dvh bg-[#19272D] text-white antialiased">{children}</body>
    </html>
  );
}
