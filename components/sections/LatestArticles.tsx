import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function LatestArticles() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="articles" className="w-full bg-[#050505] py-24 border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" /> Engineering &amp; Tutorials
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Latest Technical Guides
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
              Deep-dives into video codecs, streaming protocols, network optimization, and media player configuration.
            </p>
          </div>
          
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Explore All Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-blue-500/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20">
                    {post.category || 'Guide'}
                  </span>
                  <div className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  <span>{post.date}</span>
                </div>
                <span className="text-blue-400 font-semibold flex items-center gap-1 group-hover:text-blue-300">
                  Read Guide <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

