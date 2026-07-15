import Link from 'next/link';
import { LifeBuoy, BookOpen, MessageSquare, PlayCircle, ArrowRight } from 'lucide-react';
import FAQSection from '@/components/sections/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Center | Vanto Player',
  description: 'Get help with Vanto Player. Browse tutorials, read FAQs, or contact our support team.',
  alternates: {
    canonical: 'https://vantoplayer.com/support'
  }
};

const supportResources = [
  {
    title: 'How-to Tutorials',
    description: 'Step-by-step guides on how to install and set up Vanto Player on various devices.',
    icon: PlayCircle,
    href: '/#tutorials',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100'
  },
  {
    title: 'Manage Playlists',
    description: 'Learn how to add, edit, and organize your M3U playlists in the Vanto Player dashboard.',
    icon: BookOpen,
    href: '/#playlists',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100'
  },
  {
    title: 'Contact Support Team',
    description: 'Can\'t find what you\'re looking for? Reach out to our technical support team for assistance.',
    icon: MessageSquare,
    href: '/contact',
    color: 'text-green-500',
    bg: 'bg-green-50',
    border: 'border-green-100'
  }
];

export default function SupportPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-8 xl:px-12 overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#22c55e]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-100 shadow-sm">
            <LifeBuoy className="w-10 h-10 text-[#3b82f6]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#22c55e]">help you?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Find answers in our knowledge base or reach out to our dedicated support team.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="w-full py-24 px-6 md:px-8 xl:px-12 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {supportResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link 
                  key={index} 
                  href={resource.href}
                  className="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 ${resource.bg} ${resource.border} border rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${resource.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed flex-grow mb-8">
                    {resource.description}
                  </p>
                  <div className="flex items-center text-[#3b82f6] font-bold mt-auto group-hover:text-blue-700 transition-colors">
                    Get Started <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="w-full bg-white border-t border-gray-100">
        <FAQSection />
      </div>
    </div>
  );
}
