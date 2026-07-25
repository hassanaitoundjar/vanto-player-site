import Link from 'next/link';
import { Shield, FileText, Scale, RefreshCcw, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Terms | Vanto Player',
  description: 'Legal terms, privacy policy, and other legal documents for Vanto Player.',
  alternates: {
    canonical: 'https://vantoplayer.com/legal'
  }
};

const legalDocs = [
  {
    title: 'Terms of Service',
    description: 'Read the rules and guidelines for using Vanto Player and our services.',
    icon: FileText,
    href: '/terms',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Privacy Policy',
    description: 'Learn how we collect, use, and protect your personal information.',
    icon: Shield,
    href: '/privacy',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Refund Policy',
    description: 'Understand our policies regarding purchases and refunds for the application.',
    icon: RefreshCcw,
    href: '/refund',
    color: 'from-green-500 to-emerald-400'
  },
  {
    title: 'DMCA Policy',
    description: 'Review our copyright infringement policy and reporting process.',
    icon: Scale,
    href: '/dmca',
    color: 'from-orange-500 to-red-500'
  }
];

export default function LegalPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-8 xl:px-12 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#a855f7]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">Center</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Review our terms of service, privacy practices, and other legal policies that govern your use of Vanto Player.
          </p>
        </div>
      </section>

      {/* Legal Documents Grid */}
      <section className="w-full py-24 px-6 md:px-8 xl:px-12 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalDocs.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Link 
                  key={index} 
                  href={doc.href}
                  className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${doc.color} opacity-5 blur-[50px] rounded-full group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-gray-700 group-hover:text-[#3b82f6] transition-colors" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{doc.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-grow relative z-10">
                    {doc.description}
                  </p>
                  
                  <div className="flex items-center text-[#3b82f6] font-bold mt-auto relative z-10 group-hover:text-blue-700 transition-colors">
                    Read Document <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" / aria-hidden="true">
                  </div>
                </Link>
              )
            })}
          </div>
          
          <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Need clarification?</h3>
            <p className="text-blue-800/80 mb-6 font-medium">If you have any questions regarding our legal terms or policies, please don&apos;t hesitate to contact us.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
