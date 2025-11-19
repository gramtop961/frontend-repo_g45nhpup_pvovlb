import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import SecurityWidget from './components/SecurityWidget'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Subtle glow backdrop */}
      <div className="fixed inset-0 -z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <SecurityWidget />
      </main>
      <Footer />
    </div>
  )
}

export default App
