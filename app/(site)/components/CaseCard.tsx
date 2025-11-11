export default function CaseCard({title, before, after, numbers}:{title:string; before:string; after:string; numbers:string}){
  return (
    <div className="card p-5">
      <div className="text-lg font-bold mb-1">{title}</div>
      <div className="grid gap-2 small">
        <div><span className="text-gray-400">Было: </span>{before}</div>
        <div><span className="text-gray-400">Стало: </span>{after}</div>
        <div><span className="text-gray-400">Цифры: </span>{numbers}</div>
      </div>
    </div>
  )
}
