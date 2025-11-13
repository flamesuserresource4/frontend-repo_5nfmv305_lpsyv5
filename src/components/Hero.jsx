import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none"/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="text-center">
          <motion.h1 initial={{ textShadow: '0 0 0px #00FFFF' }} animate={{ textShadow: ['0 0 8px #00FFFF', '0 0 24px #FF4500', '0 0 8px #00FFFF'] }} transition={{ repeat: Infinity, duration: 4 }} className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-gray-100 via-white to-gray-400 text-transparent bg-clip-text drop-shadow-[0_0_30px_#00FFFF]" style={{fontFamily:'Orbitron, Exo, Audiowide, sans-serif'}}>
            SPARK 2K25
          </motion.h1>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">SV College, Tirupati — Where innovation meets adrenaline. Join the ultimate campus showdown.</p>

          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} onClick={onCTAClick} className="mt-8 inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-orange-500 text-black font-extrabold tracking-wider shadow-[0_0_30px_#00FFFF88] hover:shadow-[0_0_50px_#FF450088] transition">
            Join the Battle
            <span className="animate-pulse">⟶</span>
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
