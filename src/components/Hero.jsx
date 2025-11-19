export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100 mb-4">
              No fees unless we win
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Medical Malpractice Attorneys
              <span className="block mt-2 bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">Protecting patients. Pursuing justice.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-200/90 leading-relaxed">
              If you were harmed by a medical error, you deserve answers and accountability. Our team has recovered millions for clients in surgical errors, birth injuries, misdiagnosis, and hospital negligence cases.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-medium shadow-lg shadow-blue-600/30 transition">
                Free Case Review
              </a>
              <a href="#results" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-white px-6 py-3 font-medium border border-white/10 transition">
                See Our Results
              </a>
            </div>
            <div className="mt-6 text-slate-300/80 text-sm">
              Available 24/7 • Nationwide representation • Se habla Español
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(14,165,233,0.15),transparent_55%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sky-200/90">Featured Verdict</p>
                  <p className="mt-2 text-4xl font-bold text-white">$8.2M</p>
                  <p className="mt-2 text-slate-300">Hospital negligence resulting in permanent injury</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-white/10 rounded-xl p-4 shadow-lg">
              <p className="text-sm text-slate-300">Over 250+ five-star client reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
