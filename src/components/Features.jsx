import { MapPin, Fingerprint, ShieldHalf, BarChart3, FileWarning, Settings } from 'lucide-react'

const features = [
  { title: 'IP Monitoring', icon: ShieldHalf, desc: 'Track and correlate IP behavior across sessions and origins.' },
  { title: 'Geo Tracking', icon: MapPin, desc: 'Pinpoint traffic sources with precision geolocation.' },
  { title: 'Device Fingerprinting', icon: Fingerprint, desc: 'Identify unique devices and patterns securely.' },
  { title: 'Threat Analytics', icon: BarChart3, desc: 'Detect anomalies using advanced analytics.' },
  { title: 'Incident Reporting', icon: FileWarning, desc: 'Push actionable incident summaries to your team.' },
  { title: 'Admin Controls', icon: Settings, desc: 'Fine-grained access rules and policy management.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Core Features</h2>
          <p className="mt-2 text-slate-400">Built for scale, designed for security.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.12)] hover:shadow-[0_0_50px_rgba(168,85,247,0.25)] transition-all">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 blur-lg opacity-60 bg-gradient-to-br from-cyan-500 via-teal-400 to-fuchsia-500 rounded-xl" />
                  <div className="relative w-12 h-12 rounded-xl bg-slate-900/70 border border-cyan-400/30 flex items-center justify-center text-cyan-200">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{title}</h3>
                  <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
