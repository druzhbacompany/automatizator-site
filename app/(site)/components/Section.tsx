export default function Section({id, title, lead, children}:{id?:string; title:string; lead?:string; children:React.ReactNode}){
  return (
    <section id={id} className="container py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
      {lead ? <p className="small mt-2">{lead}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  )
}