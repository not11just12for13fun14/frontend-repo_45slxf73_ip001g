import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-tight">Harbor & Wells Law</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="#results" className="hover:text-white transition">Results</a>
          <a href="#practice" className="hover:text-white transition">Practice Areas</a>
          <a href="#testimonials" className="hover:text-white transition">Stories</a>
          <a href="#contact" className="hover:text-white transition">Free Case Review</a>
        </nav>
        <button className="md:hidden text-slate-200" aria-label="Open Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
