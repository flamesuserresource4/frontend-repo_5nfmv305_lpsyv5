import { useEffect, useState } from 'react'

const targetDate = new Date('2025-02-15T09:00:00')

const days = [
  {
    day: 'Day 1',
    date: 'Feb 15',
    items: [
      { time: '09:00', title: 'Opening Ceremony' },
      { time: '10:00', title: 'Hackathon Kickoff' },
      { time: '11:00', title: 'BGMI Qualifiers' },
      { time: '16:00', title: 'Tech Talk: AI & Gaming' },
    ],
  },
  {
    day: 'Day 2',
    date: 'Feb 16',
    items: [
      { time: '09:00', title: 'Valorant Semi-Finals' },
      { time: '11:00', title: 'Robo-Soccer Finals' },
      { time: '14:00', title: 'Cultural Show' },
      { time: '18:00', title: 'Concert & DJ Night' },
    ],
  },
]

function useCountdown(target) {
  const [diff, setDiff] = useState(target - new Date())
  useEffect(() => {
    const id = setInterval(() => setDiff(target - new Date()), 1000)
    return () => clearInterval(id)
  }, [target])
  const total = Math.max(0, Math.floor(diff / 1000))
  const d = Math.floor(total / 86400)
  const h = Math.floor((total % 86400) / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return { d, h, m, s }
}

export default function Schedule() {
  const { d, h, m, s } = useCountdown(targetDate)
  return (
    <section id="schedule" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10" style={{fontFamily:'Orbitron, Exo, Audiowide, sans-serif'}}>Schedule</h2>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            {days.map((d0, idx) => (
              <div key={idx} className="rounded-xl p-6 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-white">{d0.day}</div>
                  <div className="text-cyan-300">{d0.date}</div>
                </div>
                <div className="mt-4 space-y-3">
                  {d0.items.map((it, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="text-orange-400 w-16 font-mono">{it.time}</div>
                      <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-orange-500/40"/>
                      <div className="text-gray-200">{it.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 text-center">
            <div className="text-white font-bold" style={{fontFamily:'Orbitron, Exo, Audiowide, sans-serif'}}>Countdown</div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[{label:'D',val:d},{label:'H',val:h},{label:'M',val:m},{label:'S',val:s}].map((b,i)=>(
                <div key={i} className="rounded-lg p-3 bg-black/50 ring-1 ring-white/10">
                  <div className="text-3xl font-extrabold text-cyan-300 drop-shadow-[0_0_12px_#00FFFF]">{String(b.val).padStart(2,'0')}</div>
                  <div className="text-xs text-gray-400 mt-1">{b.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-gray-300 text-sm">Main Event: 15 Feb 2025</div>
          </div>
        </div>
      </div>
    </section>
  )
}
