import { useState, useEffect } from 'react'
import { Menu, X, Gamepad2, Instagram, Facebook, Twitter } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'contact', label: 'Register' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/60 shadow-[0_0_30px_rgba(0,255,255,0.2)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNav('home')}>
            <div className="relative w-10 h-10 grid place-items-center rounded-md bg-gradient-to-br from-cyan-400 to-orange-500 shadow-[0_0_25px_#00FFFF55,0_0_45px_#FF450055]">
              <Gamepad2 className="w-6 h-6 text-black" />
              <span className="absolute inset-0 rounded-md ring-2 ring-cyan-400/40 animate-pulse"></span>
            </div>
            <div className="leading-tight">
              <div className="text-cyan-300 text-sm tracking-widest">SV COLLEGE, TIRUPATI</div>
              <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-300 via-white to-orange-400 text-transparent bg-clip-text" style={{fontFamily:'Orbitron, Exo, Audiowide, sans-serif'}}>SPARK 2K25</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNav(item.id)} className="relative text-sm uppercase tracking-widest text-gray-200 hover:text-white px-2 py-1 transition">
                <span className="relative z-10 drop-shadow-[0_0_10px_#00FFFF]">{item.label}</span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 via-orange-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-cyan-300" aria-label="Instagram"><Instagram className="w-5 h-5"/></a>
            <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-cyan-300" aria-label="Facebook"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-cyan-300" aria-label="Twitter"><Twitter className="w-5 h-5"/></a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="w-7 h-7"/> : <Menu className="w-7 h-7"/>}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNav(item.id)} className="block w-full text-left px-3 py-2 rounded bg-white/5 hover:bg-white/10 text-gray-200">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
