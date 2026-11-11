import { MonitorPlay, Tv, Film, Settings } from 'lucide-react';
import Image from 'next/image';

export default function AppScreenshots() {
  return (
    <section className="w-full bg-[#050505] py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Interface Preview
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Designed for 10-Foot and Desktop Experiences
          </h2>
          <div className="w-16 h-[3px] bg-[#3b82f6] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Every screen has been crafted for rapid remote-control navigation on TVs, smooth trackpad gestures on desktops, and responsive touch controls on mobile.
          </p>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* Main Cinematic TV Screen - Takes up 2x2 */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-2xl relative group border border-white/10 bg-[#111111]">
            <Image 
              src="/images/home-page.png" 
              alt="Vanto Player Smart TV Main Dashboard Interface" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <div className="bg-blue-500/20 backdrop-blur-xl w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border border-blue-500/30 text-blue-400 shadow-lg">
                <MonitorPlay className="w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-tight">Living Room 10-Foot UI</h3>
              <p className="text-gray-300 text-sm md:text-base font-normal max-w-md">
                High-contrast focus states and oversized typography optimized for couch viewing with standard IR and Bluetooth TV remotes.
              </p>
            </div>
          </div>

          {/* Top Right - Channel Schedule & EPG Guide */}
          <div className="col-span-1 md:col-span-2 md:row-span-1 rounded-3xl overflow-hidden shadow-2xl relative group border border-white/10 bg-[#111111]">
            <Image 
              src="/screenshots/live-screen.png" 
              alt="Vanto Player Electronic Program Guide (EPG) Screen" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Tv className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  <h3 className="text-white text-xl font-bold tracking-tight">EPG & Channel Timeline</h3>
                </div>
                <p className="text-gray-300 text-xs md:text-sm">
                  Parses user-provided XMLTV guides to show upcoming show schedules, descriptions, and air times.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Right 1 - Media Categories */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden shadow-xl relative group border border-white/10 bg-[#111111]">
            <Image 
              src="/screenshots/movies-screen.png" 
              alt="Vanto Player Media Library Organization" 
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <Film className="w-5 h-5 text-blue-400 mb-2" aria-hidden="true" />
              <h3 className="text-white text-lg font-bold">Category Sorting</h3>
              <p className="text-gray-400 text-xs mt-1">Automatic grouping by playlist metadata and tags.</p>
            </div>
          </div>

          {/* Bottom Right 2 - Configuration & Audio Tracks */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 rounded-3xl overflow-hidden shadow-xl relative group border border-white/10 bg-[#111111]">
            <Image 
              src="/public/images/settings.png" 
              alt="Vanto Player Advanced Playback Settings" 
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <Settings className="w-5 h-5 text-blue-400 mb-2" aria-hidden="true" />
              <h3 className="text-white text-lg font-bold">Player Customization</h3>
              <p className="text-gray-400 text-xs mt-1">Hardware decoder switching, buffer sizing, and audio offset.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
