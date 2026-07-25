import { X, Info } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100vh-6rem)] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/15 via-[#0a0a0a]/90 to-[#0a0a0a]"></div>
      
      {/* Grid Pattern for Modern Tech Vibe */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>


      <div className="relative z-10 container mx-auto px-6 md:px-8 xl:px-12 flex flex-col justify-center h-full pt-12 pb-24">
        
        {/* Main Content Container */}
        <div className="max-w-3xl">
          {/* SEO Optimized Hero Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Vanto Player:</span><br/> The Ultimate IPTV & Media Player
          </h1>

          {/* SEO Optimized Subtitle */}
          <p className="text-base md:text-xl text-white/70 max-w-2xl mb-10 font-medium leading-relaxed">
            Experience the next generation of streaming. Seamlessly play your m3u playlists, live TV, and VOD on Smart TVs, Android devices, and Web with crystal-clear 4K resolution, zero buffering, and a stunningly beautiful interface.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://vantoplayer.com/download" className="px-10 py-4 bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-blue-600 transition-all duration-300 text-sm md:text-base shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.7)] hover:-translate-y-1 text-center inline-block">
              Download App
            </Link>
            <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-sm md:text-base backdrop-blur-md hover:-translate-y-1">
              Become a Reseller
            </button>
          </div>
        </div>

        {/* Modernized Glassmorphic Disclaimer Card (Positioned bottom right on large screens) */}
        <div className="mt-16 lg:absolute lg:bottom-12 lg:right-12 lg:mt-0 max-w-md w-full bg-black/40 backdrop-blur-xl border border-[#3b82f6]/20 rounded-2xl p-6 shadow-2xl relative group">
          {/* Glossy highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
          
          <button className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10" aria-label="Close disclaimer">
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
          
          <div className="flex gap-3 relative z-10">
            <Info className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs text-white/70 leading-relaxed pr-4">
              <strong className="text-white font-semibold">Legal Notice:</strong> VANTO PLAYER does not sell playlists or subscriptions. It is a media player and does not offer channels or include any content. Clients must provide their own content. VANTO PLAYER is not responsible for the content utilized within our app. We offer a 7-day trial period; afterward, a one-time license must be purchased. No refunds after purchase.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
