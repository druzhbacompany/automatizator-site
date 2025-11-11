export default function PlainBenefit({title, plain, impact}:{title:string; plain:string; impact:string}){
  return (
    <div className="card p-5">
      <div className="text-lg font-semibold">{title}</div>
      <p className="small mt-2">{plain}</p>
      <p className="mt-3 text-sm text-[#e5e7eb]">💡 {impact}</p>
    </div>
  )
}
