import Link from 'next/link';
import { Shield, FileText, Scale, RefreshCcw, ArrowRight, HelpCircle } from 'lucide-react';
import { buildMetadata } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Legal Center | Vanto Player',
  description: 'Review our terms of service, privacy practices, refund terms, and copyright compliance policies for Vanto Player.',
  path: '/legal',
});

const legalDocs = [
  {
    title: 'Terms of Service',
    description: 'Understand the terms, user responsibilities, and guidelines governing your use of Vanto Player.',
    icon: FileText,
    href: '/terms',
    tag: 'Binding Agreement'
  },
  {
    title: 'Privacy Policy',
    description: 'Learn how we collect minimal data, protect your privacy, and adhere to global data protection laws.',
    icon: Shield,
    href: '/privacy',
    tag: 'Data Protection'
  },
  {
    title: 'Refund Policy',
    description: 'Clear rules regarding software license evaluation periods, trial activations, and eligible refund scenarios.',
    icon: RefreshCcw,
    href: '/refund',
    tag: 'Consumer Policy'
  },
  {
    title: 'DMCA & Copyright Policy',
    description: 'Our procedures for reporting copyright infringement and our commitment to intellectual property protection.',
    icon: Scale,
    href: '/dmca',
    tag: 'IP Compliance'
  }
];

export default function LegalPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-8 xl:px-12 overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#a855f7]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Compliance & Transparency
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Center</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Review the terms, privacy guidelines, and policies that govern the use of the Vanto Player application and services.
          </p>
        </div>
      </section>

      {/* Legal Documents Grid */}
      <section className="w-full py-20 px-6 md:px-8 xl:px-12 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalDocs.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Link 
                  key={index} 
                  href={doc.href}
                  className="group relative bg-[#111111] border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-105 group-hover:border-blue-500/30 transition-all">
                      <Icon className="w-7 h-7 text-blue-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {doc.tag}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                    {doc.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center text-blue-400 font-semibold text-sm mt-auto group-hover:text-blue-300 transition-colors">
                    Read Document <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-16 bg-[#111111] border border-white/10 rounded-3xl p-8 text-center max-w-2xl mx-auto shadow-xl">
            <HelpCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">Have a legal or compliance question?</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              If you require further clarification regarding our software licensing, DMCA process, or data processing, please reach out to our team.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20 text-sm"
            >
              Contact Legal & Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
