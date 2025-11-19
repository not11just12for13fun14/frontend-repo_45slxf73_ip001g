const areas = [
  { title: "Surgical Errors", desc: "Wrong-site surgery, retained instruments, anesthesia mistakes." },
  { title: "Birth Injuries", desc: "Hypoxia, cerebral palsy, shoulder dystocia, NICU negligence." },
  { title: "Misdiagnosis & Delay", desc: "Missed cancer, stroke, heart attack, infections." },
  { title: "Medication Errors", desc: "Overdose, drug interactions, pharmacy negligence." },
  { title: "Hospital Negligence", desc: "Falls, bedsores, understaffing, failure to monitor." },
  { title: "ER & Urgent Care", desc: "Triage failures, delays, improper discharge." },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-16 sm:py-20 bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Practice Areas</h2>
          <p className="mt-3 text-slate-300">We handle complex cases against hospitals, physicians, and healthcare systems.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div key={a.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
              <h3 className="text-white font-semibold">{a.title}</h3>
              <p className="text-slate-300 mt-2 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
