import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      {/* Background visual layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        {/* neon gradient lines */}
        <div className="pointer-events-none absolute inset-0 opacity-60" style={{backgroundImage:'radial-gradient(1200px_600px_at_10%_10%,rgba(34,211,238,0.08),transparent),radial-gradient(900px_600px_at_90%_20%,rgba(168,85,247,0.08),transparent),radial-gradient(800px_500px_at_50%_90%,rgba(56,189,248,0.07),transparent)'}} />
        {/* cyber grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:'linear-gradient(rgba(148,163,184,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.15) 1px, transparent 1px)', backgroundSize:'40px 40px'}} />
      </div>

      {/* Spline hero animation */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-slate-900/60 backdrop-blur-xl text-cyan-200 text-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Live Intelligence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_14px_rgba(34,211,238,0.15)]">
            Real-Time Web & Cyber Threat Intelligence
          </h1>
          <p className="mt-5 text-slate-300/90 text-lg max-w-xl">
            Monitor visitors, IPs, attacks, anomalies, and system health in real time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#get-started" className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-cyan-500 via-teal-500 to-fuchsia-500 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(217,70,239,0.45)] transition-shadow">Get Started</a>
            <a href="#demo" className="px-6 py-3 rounded-lg border border-cyan-400/40 text-cyan-200 hover:text-white hover:border-cyan-300/70 hover:shadow-[0_0_18px_rgba(34,211,238,0.45)] transition-all">Live Demo</a>
          </div>

          {/* Glass highlight panels */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { label: 'IPs Tracked', value: '24,581' },
              { label: 'Active Sensors', value: '128' },
              { label: 'Uptime', value: '99.99%' },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-cyan-400/20 bg-slate-900/50 backdrop-blur-xl p-4 shadow-[0_0_24px_rgba(34,211,238,0.12)]">
                <div className="text-xs text-slate-400">{c.label}</div>
                <div className="mt-1 text-xl font-semibold text-cyan-200">{c.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-xl shadow-[0_0_50px_rgba(168,85,247,0.2)]">
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
