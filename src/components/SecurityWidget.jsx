import { Globe2, MapPin, MonitorSmartphone, Fingerprint, Shield, ShieldAlert } from 'lucide-react'

export default function SecurityWidget() {
  return (
    <section id="docs" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
            {/* Hologram tiny world map panel */}
            <div className="md:col-span-2">
              <div className="relative rounded-xl h-40 bg-slate-900/70 border border-cyan-400/20 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{backgroundImage:'radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.9),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(217,70,239,0.9),transparent_40%)'}} />
                <div className="absolute inset-0 opacity-20" style={{backgroundImage:'linear-gradient(rgba(148,163,184,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.15) 1px, transparent 1px)', backgroundSize:'24px 24px'}} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.35)]" />
                </div>
                <div className="absolute top-2 left-2 text-xs text-cyan-200 inline-flex items-center gap-1"><Globe2 className="w-3 h-3" /> World Map</div>
              </div>
            </div>

            {/* Meta */}
            <div className="md:col-span-3 grid grid-cols-2 gap-4">
              <Info label="User IP" value="203.0.113.42" icon={Shield} />
              <Info label="Location" value="Zurich, CH" icon={MapPin} />
              <Info label="Browser" value="Chromium 119" icon={MonitorSmartphone} />
              <Info label="Device ID" value="SV-8F3A-92CD" icon={Fingerprint} />

              <div className="col-span-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-400">Risk Score</span>
                  <span className="px-2 py-1 rounded-md text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-[0_0_18px_rgba(16,185,129,0.45)]">Low (14)</span>
                  <span className="inline-flex items-center gap-1 text-xs text-amber-300"><ShieldAlert className="w-3 h-3" /> No active threats</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Info({ label, value, icon: Icon }) {
  return (
    <div className="rounded-xl border border-cyan-400/20 bg-slate-900/50 backdrop-blur-lg p-4">
      <div className="text-xs text-slate-400">{label}</div>
      <div className="mt-1 text-cyan-100 text-sm inline-flex items-center gap-2">
        <Icon className="w-4 h-4 text-cyan-300" />
        <span className="font-medium">{value}</span>
      </div>
    </div>
  )
}
