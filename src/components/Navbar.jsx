import { useState } from 'react'
import { Globe2, ChevronDown } from 'lucide-react'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'Hindi' },
  { code: 'gu', label: 'Gujarati' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState(languages[0])

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.12)]">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 blur-lg opacity-60 bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 rounded-lg" />
                <div className="relative px-3 py-1.5 rounded-lg bg-slate-900/80 border border-cyan-400/30">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-fuchsia-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] font-semibold tracking-wide">SecureVision</span>
                </div>
              </div>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex items-center gap-8 text-sm">
              {['Home','Features','Security','Docs'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-300 hover:text-white transition-colors relative">
                    <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-fuchsia-500 after:transition-all hover:after:w-full">{item}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <button onClick={() => setOpen((v) => !v)} className="group inline-flex items-center gap-2 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-cyan-400/20 bg-slate-900/60 hover:border-cyan-400/40 transition-colors">
                  <Globe2 className="w-4 h-4 text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  <span className="text-sm">{lang.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && (
                  <div className="absolute right-0 mt-2 w-40 rounded-xl border border-cyan-400/20 bg-slate-900/90 backdrop-blur-xl shadow-xl">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l)
                          setOpen(false)
                        }}
                        className={`w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-slate-800/60 ${l.code===lang.code? 'text-cyan-300' : 'text-slate-300'}`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#login" className="px-4 py-2 text-sm rounded-lg border border-cyan-400/40 text-cyan-200 hover:text-white hover:shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:border-cyan-300/60 transition-all">
                Login
              </a>
              <a href="#signup" className="px-4 py-2 text-sm rounded-lg text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-fuchsia-500 shadow-[0_0_30px_rgba(217,70,239,0.25)] hover:shadow-[0_0_40px_rgba(56,189,248,0.45)] transition-shadow">
                Signup
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
