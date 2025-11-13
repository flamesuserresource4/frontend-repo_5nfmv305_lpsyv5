import { motion } from 'framer-motion'

const tiles = [
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', label: 'Tech Battles' },
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', label: 'Esports Arena' },
  { src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', label: 'Cultural Night' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0A0A0A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,69,0,0.08),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{fontFamily:'Orbitron, Exo, Audiowide, sans-serif'}}>Where innovation meets adrenaline</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              SPARK 2K25 is SV College’s flagship festival that fuses technology, gaming, culture, and creativity. Expect high-octane competitions, gripping esports showdowns, cutting-edge showcases, and unforgettable performances.
            </p>
            <div className="mt-6 text-cyan-300 uppercase tracking-widest text-sm">Forge your legacy. Conquer the arena.</div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {tiles.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative aspect-[3/4] overflow-hidden rounded-lg ring-1 ring-white/10 bg-white/5">
                <img src={t.src} alt={t.label} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition" />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply"/>
                <div className="absolute bottom-2 left-2 px-2 py-1 text-xs font-mono bg-black/60 text-cyan-300 rounded glitch" data-text={t.label}>{t.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
