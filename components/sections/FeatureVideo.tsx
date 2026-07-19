'use client';

import { Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function FeatureVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 md:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            <span className="text-[#3b82f6]">Vanto Player:</span> Stream Smarter, Binge Better with Our Media Player Service
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Experience seamless streaming with Vanto Player&apos;s user-friendly interface, diverse channel lineup, and high-quality content. Dive into a world of live TV, on-demand entertainment, and innovative features, all tailored to your preferences.
          </p>
          
          <button className="px-10 py-3 bg-[#3b82f6] text-white font-semibold rounded hover:bg-blue-600 transition-colors text-sm md:text-base">
            Explore
          </button>
        </div>

        {/* Right Video / Image */}
        <div 
          className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden relative shadow-2xl group cursor-pointer border border-gray-200"
          onClick={() => setIsPlaying(true)}
        >
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Vanto Player Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          ) : (
            <>
              {/* Placeholder background image representing the app/TV interface */}
              <div className="absolute inset-0 bg-[url('/screenshots/home-screen.png')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
              
              {/* Overlay to darken slightly for text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/70"></div>
              
              {/* YouTube-like Header */}
              <div className="absolute top-0 left-0 w-full p-4 flex items-start gap-3 z-10">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-white shadow-md p-1 overflow-hidden shrink-0">
                    <Image src="/logo.png" alt="Vanto" width={40} height={40} className="w-full h-full object-cover rounded-full" />
                 </div>
                 <div className="text-white drop-shadow-md">
                   <h3 className="font-bold text-base sm:text-lg leading-tight line-clamp-1">Vanto Player - How to Use and Activate the App</h3>
                   <p className="text-xs sm:text-sm text-white/90">Vanto Player Official</p>
                 </div>
              </div>

              {/* YouTube Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-11 sm:w-20 sm:h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-red-700 transition-colors z-10">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white text-white ml-1" />
              </div>

              {/* YouTube-like Footer */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded text-white text-xs sm:text-sm font-medium flex items-center gap-2 border border-white/10 hover:bg-black/80 transition-colors z-10">
                Watch on <span className="font-bold tracking-tight">YouTube</span>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
