import { motion } from 'framer-motion'
import { Cpu, Gamepad2, Sparkles, PartyPopper } from 'lucide-react'

const events = [
  { title: 'Technical', icon: Cpu, desc: 'Hackathons, AI challenges, robotics & more.' },
  { title: 'Gaming', icon: Gamepad2, desc: 'BGMI, Valorant, FIFA — clutch up and dominate.' },
  { title: 'Cultural', icon: Sparkles, desc: 'Dance, music, cosplay — neon-lit showdowns.' },
  { title: 'Fun', icon: PartyPopper, desc: 'Mini-games, photo ops, and campus quests.' },
]

export default function Events() {
  return (
    <section id="events" className="py-24 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{background:'radial-gradient(600px_200px_at_20%_10%,rgba(0,255,255,0.08),transparent), radial-gradient(600px_200px_at_80%_30%,rgba(255,69,0,0.08),transparent)'}} />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10" style={{fontFamily:'Orbitron, Exo, Audiowide, sans-serif'}}>Events</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((e, i) => (
            <motion.div key={e.title} whileHover={{ y: -6 }} className="group relative rounded-xl p-6 bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 shadow-[0_0_0_1px_#ffffff10]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 blur-xl transition" />
              <e.icon className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_12px_#00FFFF]" />
              <div className="mt-4 text-xl font-bold text-white">{e.title}</div>
              <div className="text-gray-300 text-sm mt-1">{e.desc}</div>
              <div className="mt-4 h-10 bg-gradient-to-r from-cyan-400/30 to-orange-400/30 rounded-md border border-white/10 backdrop-blur-sm group-hover:scale-[1.02] transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
