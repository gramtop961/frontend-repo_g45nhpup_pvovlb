import { Users, Activity, AlertTriangle, Gauge } from 'lucide-react'

const cards = [
  { title: 'Live Visitors', value: '1,204', icon: Users, color: 'from-cyan-500 to-teal-500' },
  { title: 'Total Requests Today', value: '87,943', icon: Activity, color: 'from-fuchsia-500 to-cyan-500' },
  { title: 'Threat Level Gauge', value: 'Medium', icon: Gauge, color: 'from-amber-400 to-orange-500' },
  { title: 'Suspicious Events Detected', value: '342', icon: AlertTriangle, color: 'from-red-500 to-rose-500' },
]

export default function Stats() {
  return (
    <section id="security" className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ title, value, icon: Icon, color }) => (
            <div key={title} className="group rounded-2xl p-5 border border-cyan-400/20 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.12)] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-shadow">
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${color} text-white shadow-[0_0_18px_rgba(34,211,238,0.35)]`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="mt-3 text-slate-400 text-sm">{title}</div>
              <div className="text-2xl font-semibold text-cyan-100">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
