import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Vanto Player',
  description: 'Read the latest news, tutorials, and articles about IPTV and Vanto Player.',
  alternates: {
    canonical: 'https://vantoplayer.com/blog'
  }
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-white">
      {/* Dark Hero Section */}
      <section className="relative w-full pt-32 pb-48 px-6 md:px-8 xl:px-12 bg-[#111111] border-b border-white/5 flex flex-col items-center text-center">
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-center">
          {/* Pill Tag */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#3b82f6] bg-white/5">
              <BookOpen className="w-3.5 h-3.5" / aria-hidden="true"> Vanto Player Blog
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6">
            Guides, Tips & <span className="text-[#3b82f6]">News</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Expert articles on IPTV setup, troubleshooting, app features, and everything you need to get the most out of your streaming experience.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full px-6 md:px-8 xl:px-12 relative z-20 -mt-28 pb-24">
        <div className="container mx-auto max-w-6xl">
          
          {/* Featured Post Card (Overlapping Hero) */}
          {posts.length > 0 && (
            <Link href={`/blog/${posts[0].slug}`} className="block w-full bg-[#1a1f2e] border border-[#2a3142] rounded-3xl p-8 md:p-12 mb-20 hover:border-[#3b82f6]/50 transition-colors shadow-2xl group">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#3b82f6]/20 text-[#3b82f6] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                  FEATURED
                </span>
                <span className="bg-white/5 text-gray-300 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                  GUIDES
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-[#3b82f6] transition-colors leading-tight">
                {posts[0].title}
              </h2>
              
              <p className="text-lg text-gray-400 mb-10 max-w-3xl leading-relaxed">
                {posts[0].excerpt}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
                <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" / aria-hidden="true">
                    {new Date(posts[0].date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center text-[#3b82f6] font-bold text-sm tracking-widest uppercase group-hover:text-blue-400 transition-colors">
                  READ ARTICLE <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" / aria-hidden="true">
                </div>
              </div>
            </Link>
          )}

          {/* Latest Articles */}
          <h3 className="text-3xl font-extrabold text-gray-900 mb-10">Latest Articles</h3>
          
          {posts.length <= 1 ? (
            <div className="text-gray-500 py-10">More posts coming soon!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.slice(1).map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-gray-200/50 hover:border-blue-100 transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-6 text-[11px] font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 text-[#3b82f6]">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                      GUIDES
                    </span>
                    <span className="text-gray-400">{post.readingTime} MIN READ</span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#3b82f6] transition-colors leading-snug line-clamp-3">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <span className="text-sm font-medium text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <div className="flex items-center text-[#3b82f6] font-bold text-[11px] tracking-widest uppercase group-hover:text-blue-700 transition-colors">
                      READ <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" / aria-hidden="true">
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <button className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-400 font-bold text-xs tracking-widest uppercase hover:bg-gray-50 transition-colors cursor-not-allowed opacity-50">
              Previous
            </button>
            <span className="text-gray-500 font-bold text-xs tracking-widest uppercase">
              Page 1 of 1
            </span>
            <button className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-900 font-bold text-xs tracking-widest uppercase hover:border-gray-300 hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
