import type { Service } from "@/data/services";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-bold mb-2">{s.title}</h3>
      <p className="small mb-3">{s.short}</p>
      <div className="small mb-3 opacity-80">Результат: {s.outcome}</div>
      <ul className="list-disc pl-5 small space-y-1">
        {s.deliverables.map((d, i) => (<li key={i}>{d}</li>))}
      </ul>
    </div>
  );
}
