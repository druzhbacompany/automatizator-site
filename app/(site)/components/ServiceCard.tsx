export default function ServiceCard({title, desc, benefit}:{title:string; desc:string; benefit:string}){
  return (
    <div className="card p-5">
      <div className="text-lg font-bold mb-1">{title}</div>
      <p className="small mb-3">{desc}</p>
      <div className="text-sm text-[#e5e7eb]">✅ {benefit}</div>
    </div>
  )
}