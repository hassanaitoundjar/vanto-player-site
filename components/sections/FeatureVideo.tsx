'use client';

import { Play, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function FeatureVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#0a0a0a] py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
            Media Engine Overview
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Precision Playback</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
            Experience smooth, hardware-accelerated playback with Vanto Player&apos;s intuitive interface. Organize your personal media files, user-supplied M3U/M3U8 playlists, and electronic program guides in one clean, distraction-free environment.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
              <span>Full support for H.264, HEVC (H.265), VP9, and AV1 video streams</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
              <span>Automatic XMLTV and EPG parsing from user-provided sources</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
              <span>Multi-audio track switching and external subtitle synchronization</span>
            </div>
          </div>
          
          <Link 
            href="#features" 
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#3b82f6] text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors text-sm md:text-base shadow-lg shadow-blue-500/20"
          >
            Explore Technical Features <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Right Video / Image Facade */}
        <div 
          className="w-full aspect-video bg-[#111111] rounded-2xl overflow-hidden relative shadow-2xl group cursor-pointer border border-white/10"
          onClick={() => setIsPlaying(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsPlaying(true); }}
          aria-label="Play Vanto Player demonstration video"
        >
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/36gGjqseE7E?autoplay=1"
              title="Vanto Player Feature Demonstration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            ></iframe>
          ) : (
            <>
              {/* Placeholder background image representing the app interface */}
              <div className="absolute inset-0 bg-[url('/screenshots/home-screen.png')] bg-cover bg-center opacity-75 group-hover:scale-105 transition-transform duration-700"></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center shadow-xl shadow-blue-500/40 group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-white fill-white ml-1" aria-hidden="true" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/80 bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                Click to watch interface walkthrough & feature demo
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
