const results = [
  { amount: "$8,200,000", label: "Hospital Negligence" },
  { amount: "$5,100,000", label: "Birth Injury" },
  { amount: "$3,450,000", label: "Surgical Error" },
  { amount: "$2,900,000", label: "Failure to Diagnose" },
];

export default function Results() {
  return (
    <section id="results" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Results that make a difference</h2>
          <p className="mt-3 text-slate-300">A sample of recoveries obtained by our attorneys. Past results do not guarantee a similar outcome.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r) => (
            <div key={r.label} className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-blue-900/20">
              <div className="text-3xl font-bold text-white">{r.amount}</div>
              <div className="mt-2 text-slate-300/90 text-sm">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
