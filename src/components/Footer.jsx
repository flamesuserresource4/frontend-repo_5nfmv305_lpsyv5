import { Sparkles } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{background:'radial-gradient(800px_120px_at_50%_-20%,rgba(255,69,0,0.15),transparent), radial-gradient(600px_120px_at_10%_120%,rgba(0,255,255,0.12),transparent)'}}/>
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white">
          <Sparkles className="w-5 h-5 text-orange-400"/>
          <span className="font-semibold">SPARK 2K25</span>
        </div>
        <div className="text-sm text-gray-400">Rise. Play. Conquer.</div>
        <div className="text-sm text-gray-500">© {new Date().getFullYear()} SV College, Tirupati</div>
      </div>
    </footer>
  )
}
