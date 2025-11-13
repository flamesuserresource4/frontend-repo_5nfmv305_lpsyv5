import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975693413-c56c2c6df04e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544900690-7f3cc3a0d3fd?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => (p + 1) % images.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="gallery" className="relative py-24 bg-[#0A0A0A]">
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-8" style={{fontFamily:'Orbitron, Exo, Audiowide, sans-serif'}}>Gallery</h2>
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black">
          <AnimatePresence initial={false}>
            <motion.img key={index} src={images[index]} alt="gallery" initial={{ opacity: 0, scale: 1.08 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.08 }} transition={{ duration: 0.9 }} className="absolute inset-0 w-full h-full object-cover" />
          </AnimatePresence>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,69,0,0.2),transparent_30%)] mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none" style={{background:'url(https://www.transparenttextures.com/patterns/asfalt-dark.png)'}}/>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full transition ${i===index?'bg-cyan-400 shadow-[0_0_12px_#00FFFF]':'bg-white/30'}`} aria-label={`Go to image ${i+1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
