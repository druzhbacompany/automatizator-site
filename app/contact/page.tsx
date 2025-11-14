import ContactForm from '@/app/components/ContactForm';

export const metadata = {
  title: 'Связаться — Automatizator',
  description: 'Оставьте заявку — ответим в этот же день.',
};

export default function ContactPage(){
  return (
    <main>
      <section className="border-b border-[#20242e] sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b0cb3]">
        <div className="container flex items-center justify-between py-4">
          <div className="font-black tracking-tight text-xl">Automatizator</div>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <a href="/" className="hover:text-white">Главная</a>
            <a href="/#services" className="hover:text-white">Услуги</a>
            <a href="/#sla" className="hover:text-white">SLA</a>
            <a href="/#faq" className="hover:text-white">FAQ</a>
          </nav>
        </div>
      </section>
      <section className="container py-14">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Связаться</h1>
        <p className="text-muted mb-8 max-w-2xl">Заполните форму — заявка улетит в Telegram и (если настроено) в CRM.</p>
        <ContactForm
          source="contact-page"
          context="contact:main-form"
          defaultMessage="Кратко опишите задачу и с какими сервисами вы уже работаете: боты, платформы, n8n, CRM, парсеры и т.п."
        />
      </section>
      <footer className="border-t border-[#20242e] mt-16">
        <div className="container py-8 small">© {new Date().getFullYear()} Automatizator</div>
      </footer>
    </main>
  );
}
