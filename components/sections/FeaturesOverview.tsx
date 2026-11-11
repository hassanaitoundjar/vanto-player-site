import { Cpu, Layers, Tv, ShieldCheck, Sliders } from 'lucide-react';
import Image from 'next/image';

export default function FeaturesOverview() {
  const features = [
    {
      icon: Cpu,
      title: "Hardware-Accelerated Engine",
      description: "Optimized video decoding for H.264, H.265 (HEVC), and AV1 up to 4K resolution."
    },
    {
      icon: Layers,
      title: "Universal Playlist Parsing",
      description: "Seamless support for M3U, M3U8, and local JSON playlist structures, plus Xtream API authentication."
    },
    {
      icon: Tv,
      title: "Electronic Program Guide (EPG)",
      description: "Parses XMLTV and provider-supplied EPG data for interactive channel schedules."
    },
    {
      icon: ShieldCheck,
      title: "Multi-Platform Uniformity",
      description: "Identical, intuitive interface whether running on Android TV, Firestick, Linux, or Web."
    },
    {
      icon: Sliders,
      title: "Granular Playback Controls",
      description: "Custom aspect ratios, audio track switching, subtitle offset adjustment, and sleep timers."
    }
  ];

  return (
    <section id="features" className="w-full bg-[#0a0a0a] py-24 border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Core Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Engineered for Modern Media Playback
          </h2>
          <div className="w-16 h-[3px] bg-[#3b82f6] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Vanto Player provides the playback technology and organization layer; users supply their own media libraries and streaming credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Features List */}
          <div className="flex flex-col gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1 flex items-center gap-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Screenshot Presentation */}
          <div className="relative w-full h-[420px] md:h-[500px] flex items-center justify-center">
            {/* Back Image (Landscape) */}
            <div className="absolute right-0 top-6 w-[88%] h-[82%] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <Image 
                src="/screenshots/live-player.png" 
                alt="Vanto Player High Quality Streaming Interface" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <span className="font-semibold">Live Playback Engine</span>
                <span className="text-blue-400 font-mono">4K UHD • 60 FPS • AAC</span>
              </div>
            </div>

            {/* Front Image (Overlay) */}
            <div className="absolute left-0 bottom-4 w-[52%] h-[68%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-black border-2 border-white/20 z-10 hidden sm:block">
              <Image 
                src="/screenshots/multiscreen.png" 
                alt="Vanto Player Multi-Screen Dashboard" 
                fill 
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-[11px] text-white font-medium">
                Multi-View Monitor
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
