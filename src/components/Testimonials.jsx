const testimonials = [
  {
    quote:
      "They treated us like family and fought for our daughter. We finally have the resources for her lifelong care.",
    name: "A.C.",
  },
  {
    quote:
      "Every question was answered, every call returned. They uncovered what really happened in that hospital.",
    name: "M.R.",
  },
  {
    quote:
      "I was hesitant to call. Best decision I made. Professional, compassionate, relentless.",
    name: "J.T.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-slate-950/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Client Stories</h2>
          <p className="mt-3 text-slate-300">Real voices from families we were honored to represent.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-slate-200 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
