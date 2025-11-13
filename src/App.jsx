import { useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const regRef = useRef(null)

  useEffect(() => {
    // optional: preload hover sound
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/10/audio_7a4d7c8f85.mp3?filename=select-3-200995.mp3')
    audio.volume = 0.25
    const buttons = document.querySelectorAll('button, a')
    const onEnter = () => { try { audio.currentTime = 0; audio.play() } catch(e){} }
    buttons.forEach(b => b.addEventListener('mouseenter', onEnter))
    return () => buttons.forEach(b => b.removeEventListener('mouseenter', onEnter))
  }, [])

  const handleCTAClick = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main>
        <Hero onCTAClick={handleCTAClick} />
        <About />
        <Events />
        <Gallery />
        <Schedule />
        <Contact ref={regRef} />
      </main>
      <Footer />
    </div>
  )
}

export default App
