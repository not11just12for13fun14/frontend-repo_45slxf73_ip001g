import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Results from './components/Results'
import PracticeAreas from './components/PracticeAreas'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
      <Navbar />

      <main>
        <Hero />
        <Results />
        <PracticeAreas />
        <Testimonials />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300/80 text-sm">
          <p>© {new Date().getFullYear()} Harbor & Wells Law. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#practice" className="hover:text-white transition">Areas</a>
            <a href="#results" className="hover:text-white transition">Results</a>
            <a href="#contact" className="hover:text-white transition">Free Case Review</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
