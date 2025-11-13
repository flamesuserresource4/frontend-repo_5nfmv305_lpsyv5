import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-10" style={{fontFamily:'Orbitron, Exo, Audiowide, sans-serif'}}>Register / Contact</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10">
            <div>
              <label className="block text-sm text-cyan-300 mb-1">Name</label>
              <input type="text" required className="w-full px-3 py-2 rounded bg-black/60 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none text-white placeholder:text-gray-400" placeholder="Your full name"/>
            </div>
            <div>
              <label className="block text-sm text-cyan-300 mb-1">Email</label>
              <input type="email" required className="w-full px-3 py-2 rounded bg-black/60 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none text-white placeholder:text-gray-400" placeholder="you@email.com"/>
            </div>
            <div>
              <label className="block text-sm text-cyan-300 mb-1">Category</label>
              <select className="w-full px-3 py-2 rounded bg-black/60 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none text-white">
                <option>Technical</option>
                <option>Gaming</option>
                <option>Cultural</option>
                <option>Fun</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-cyan-300 mb-1">Message</label>
              <textarea rows="4" className="w-full px-3 py-2 rounded bg-black/60 border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none text-white placeholder:text-gray-400" placeholder="Tell us more" />
            </div>
            <button type="submit" className="w-full py-2 rounded-lg font-bold text-black bg-gradient-to-r from-cyan-500 to-orange-500 shadow-[0_0_20px_#00FFFF88] hover:shadow-[0_0_40px_#FF450088] transition">Submit</button>
            {submitted && <p className="text-green-400 text-sm">Submitted! We will get back to you soon.</p>}
          </form>

          <div className="p-6 rounded-xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10">
            <div className="text-white font-semibold">SV College, Tirupati</div>
            <div className="text-gray-300 text-sm mt-1">Chandragiri Rd, Tirupati, Andhra Pradesh</div>
            <div className="mt-4">
              <iframe title="map" src="https://www.google.com/maps?q=SV%20College%20Tirupati&output=embed" className="w-full h-64 rounded-lg border border-white/10"></iframe>
            </div>
            <div className="mt-4 flex gap-3 text-sm text-gray-300">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
