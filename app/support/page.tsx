import Link from 'next/link';
import { LifeBuoy, MessageSquare, PlayCircle, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import FAQSection from '@/components/sections/FAQ';
import { buildMetadata } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Support Center | Vanto Player Documentation',
  description:
    'Get technical support for Vanto Player. Read troubleshooting guides, configure M3U playlists, learn how to install on Smart TVs, and reach our engineering support team.',
  path: '/support',
});

const supportResources = [
  {
    title: 'How-to Tutorials',
    description: 'Step-by-step guides on how to install and configure Vanto Player across Smart TVs, Firestick, and Android.',
    icon: PlayCircle,
    href: '/blog',
    tag: 'Guides'
  },
  {
    title: 'Installation Walkthroughs',
    description: 'Hardware-specific setup guides for Samsung Tizen, LG webOS, and Android TV operating systems.',
    icon: Cpu,
    href: '/download',
    tag: 'Setup'
  },
  {
    title: 'Contact Support Team',
    description: 'Need assistance diagnosing a player error or have a licensing inquiry? Our technical support team is here to assist.',
    icon: MessageSquare,
    href: '/contact',
    tag: '24/7 Help'
  },
  {
    title: 'Fraud & Clone Advisory',
    description: 'Verify official Vanto Player distribution channels and report fraudulent websites selling illegal channel bundles.',
    icon: ShieldAlert,
    href: '/#fraud',
    tag: 'Security'
  }
];

export default function SupportPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-8 xl:px-12 overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#22c55e]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <LifeBuoy className="w-8 h-8" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#22c55e]">help you?</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Browse our technical knowledge base, read device troubleshooting guides, or contact our engineering team directly.
          </p>
        </div>
      </section>

      {/* Support Cards Grid */}
      <section className="w-full py-20 px-6 md:px-8 xl:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {supportResources.map((res, index) => {
              const Icon = res.icon;
              return (
                <Link 
                  key={index} 
                  href={res.href} 
                  className="bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300 group shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400 border border-white/10 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                        {res.tag}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">
                      {res.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {res.description}
                    </p>
                  </div>
                  <div className="flex items-center text-blue-400 font-semibold text-sm group-hover:text-blue-300 transition-colors">
                    Access Portal <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Inline FAQ */}
          <FAQSection />
        </div>
      </section>
    </div>
  );
}
