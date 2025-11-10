export default function Section({ id, title, lead, children }:{
  id?: string; title: string; lead?: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="container my-16">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
        {lead && <p className="small mt-2 max-w-2xl">{lead}</p>}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}
