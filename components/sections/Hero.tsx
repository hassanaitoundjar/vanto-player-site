'use client';

import { X, Info, Download, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [showNotice, setShowNotice] = useState(true);

  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100vh-6rem)] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/15 via-[#0a0a0a]/90 to-[#0a0a0a]"></div>
      
      {/* Grid Pattern for Modern Tech Vibe */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-8 xl:px-12 flex flex-col justify-center h-full pt-12 pb-24">
        
        {/* Main Content Container */}
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Hardware-Accelerated Media Player
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Vanto Player:</span><br/> The Modern Media Player for All Screens
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-white/70 max-w-2xl mb-10 font-normal leading-relaxed">
            A fast, cross-platform media player application built to organize and render your personal M3U/M3U8 playlists and video files. Enjoy smooth 4K playback, customizable subtitles, and an intuitive UI across Android, Smart TV, and Web browsers.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link 
              href="/download" 
              className="px-8 py-4 bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-blue-600 transition-all duration-300 text-sm md:text-base shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.7)] hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Download Free Player
            </Link>
            <Link 
              href="/how-to/use-vanto-player" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm md:text-base text-center flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5 text-blue-400" aria-hidden="true" />
              Quick Start Guide
            </Link>
          </div>
        </div>

        {/* Dismissible Legal & Product Disclaimer Card */}
        {showNotice && (
          <aside aria-label="Legal notice" className="mt-16 lg:absolute lg:bottom-12 lg:right-12 lg:mt-0 max-w-md w-full bg-black/60 backdrop-blur-xl border border-[#3b82f6]/30 rounded-2xl p-6 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
            
            <button 
              onClick={() => setShowNotice(false)} 
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10 p-1" 
              aria-label="Close disclaimer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
            
            <div className="flex gap-3 relative z-10">
              <Info className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs text-white/80 leading-relaxed pr-4">
                <strong className="text-white font-semibold block mb-1">Important Product Notice:</strong>
                Vanto Player is an independent media player software application. It does not provide, host, bundle, or distribute any media content, channels, or stream sources. Users are solely responsible for supplying their own legally authorized playlists and media files.
              </div>
            </div>
          </aside>
        )}

      </div>
    </section>
  );
}
