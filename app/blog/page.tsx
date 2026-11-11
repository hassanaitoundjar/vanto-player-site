import { getAllPosts, getAllCategories } from '@/lib/blog';
import { BookOpen, Terminal } from 'lucide-react';
import { buildMetadata } from '@/lib/siteConfig';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';
import AdBanner from '@/components/ads/AdBanner';

export const metadata = buildMetadata({
  title: 'Media Playback Engineering & Knowledge Center',
  description:
    'In-depth technical tutorials, streaming protocol deep-dives, video codec specifications, hardware acceleration guides, and playback troubleshooting from the Vanto Player engineering team.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      <BreadcrumbListLd
        items={[
          { name: 'Home', item: 'https://vantoplayer.com' },
          { name: 'Knowledge Base', item: 'https://vantoplayer.com/blog' },
        ]}
      />

      {/* Hero Header */}
      <section className="relative w-full pt-20 pb-16 px-6 md:px-8 xl:px-12 bg-gradient-to-b from-[#111111] via-[#0d0d0d] to-[#0a0a0a] border-b border-white/5 flex flex-col items-center text-center">
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 border border-[#3b82f6]/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3b82f6] bg-[#3b82f6]/10 backdrop-blur-md">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            Vanto Player Engineering Knowledge Base
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 leading-[1.15]">
            Media Technology, Codecs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#3b82f6]">Tutorials</span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Rigorous technical specifications, protocol architecture (HLS, DASH), video codec guides (H.264, HEVC, AV1), and hardware troubleshooting for Android TV, Fire TV, and Smart TVs.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#3b82f6]" aria-hidden="true" />
              100% Original Technical Guides
            </span>
            <span>•</span>
            <span>Peer-Reviewed Engineering Notes</span>
            <span>•</span>
            <span>Updated for 2026 Standards</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full px-6 md:px-8 xl:px-12 py-12">
        <div className="container mx-auto max-w-6xl">
          <BlogIndexClient initialPosts={posts} categories={categories} />
          <AdBanner slot="8715827832" format="horizontal" className="mt-12" />
        </div>
      </section>
    </div>
  );
}
