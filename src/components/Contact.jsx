import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    // For now, just simulate success. This can be wired to the backend later.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    e.target.reset();
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Free Case Review</h2>
          <p className="mt-3 text-slate-300">Tell us what happened. Our team will reach out within 24 hours.</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Full name" className="rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="tel" name="phone" placeholder="Phone" className="rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <input required type="email" name="email" placeholder="Email" className="rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea required name="details" rows="4" placeholder="Briefly describe what happened" className="rounded-lg bg-slate-900 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <div className="flex items-center gap-3">
            <button disabled={status === "submitting"} className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 font-medium shadow-lg shadow-blue-600/30 transition">
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>
            {status === "success" && (
              <span className="text-green-400 text-sm">Thanks — we'll be in touch shortly.</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
