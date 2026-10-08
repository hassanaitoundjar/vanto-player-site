import { CheckCircle2, Play } from 'lucide-react';
import Image from 'next/image';

export default function FeaturesOverview() {
  const features = [
    {
      title: "User-Friendly Interface",
      description: "Modern design for bufferfree media playback"
    },
    {
      title: "Multiple Playlist Formats",
      description: "It Supports M3U, JSON, and other file formats( Video & Audio)"
    },
    {
      title: "High-Quality Playback",
      description: "Enjoy smooth streaming with advanced video codecs (HD & 4K)"
    },
    {
      title: "Multi Cross-Platform Support",
      description: "Available on Android, iOS, Smart TV's, Windows, macOS, and Web"
    },
    {
      title: "Personalized Experience",
      description: "Customize settings for an excellent viewing experience"
    }
  ];

  return (
    <section className="w-full bg-[#f8fafe] py-24">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e293b] tracking-wide uppercase mb-4">
            Vanto Player Features Overview
          </h2>
          <div className="w-16 h-[3px] bg-[#3b82f6] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 xl:gap-16 items-center">
          
          {/* Left Column: Features List */}
          <div className="flex flex-col gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white fill-[#3b82f6] group-hover:scale-110 transition-transform" aria-hidden="true" />
                </div>
                <div className="leading-relaxed">
                  <h3 className="text-[#334155] font-semibold text-[17px] inline mr-1">{feature.title}</h3>
                  <span className="text-gray-600 text-[17px]">
                    – {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image Composition */}
          <div className="relative w-full h-[450px] md:h-[550px] lg:h-[450px] xl:h-[500px] flex items-center justify-center">
            
            {/* Back Image (Landscape) */}
            <div className="absolute right-0 top-10 w-[85%] h-[80%] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/20">
              <Image 
                src="/screenshots/live-player.png" 
                alt="Vanto Player High Quality Streaming Interface" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-black fill-black ml-1" aria-hidden="true" />
                </div>
              </div>
              {/* Fake Video Player Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="h-1 bg-white/30 rounded-full flex-1 overflow-hidden">
                  <div className="h-full bg-white w-1/3 rounded-full"></div>
                </div>
                <div className="flex gap-2">
                   {/* Mock controls icons */}
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Front Image (Tilted Portrait) */}
            <div className="absolute left-0 bottom-4 md:bottom-10 w-[50%] h-[75%] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] bg-black -rotate-[15deg] border-[6px] border-white transition-transform hover:-rotate-6 duration-300 z-10">
              <Image 
                src="/screenshots/multiscreen.png" 
                alt="Vanto Player Mobile Streaming Interface" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-black fill-black ml-1" aria-hidden="true" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
