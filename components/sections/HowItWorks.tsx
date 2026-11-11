import { Download, Sliders, PlayCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: Download,
      title: 'Install Vanto Player',
      description: 'Download the app for your Android TV or Firestick using quick code 7392829, or open the Web Player instantly in your browser.',
      cta: 'View Downloads',
      href: '/download',
    },
    {
      step: '02',
      icon: Sliders,
      title: 'Connect Your Media Source',
      description: 'Input your personal M3U/M3U8 playlist URL or Xtream Codes API credentials. Your categories, channels, and VODs populate automatically.',
      cta: 'Setup Guide',
      href: '/how-to/add-m3u-playlist',
    },
    {
      step: '03',
      icon: PlayCircle,
      title: 'Stream with Hardware Acceleration',
      description: 'Enjoy 4K video playback with automatic EPG schedules, multi-audio selection, and customizable subtitles on any screen.',
      cta: 'Explore Features',
      href: '#features',
    },
  ];

  return (
    <section id="how-it-works" className="w-full bg-[#050505] py-24 border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            How Vanto Player Works
          </h2>
          <div className="w-16 h-[3px] bg-[#3b82f6] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            From installation to 4K playback in less than two minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300 relative group flex flex-col justify-between shadow-xl"
              >
                <div className="absolute top-6 right-6 text-3xl font-extrabold text-white/10 group-hover:text-blue-500/20 transition-colors font-mono">
                  {item.step}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <Link 
                  href={item.href} 
                  className="inline-flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors uppercase tracking-wider"
                >
                  {item.cta} <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

