'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, Tag, BookOpen, Layers } from 'lucide-react';
import type { BlogPost } from '@/lib/blog';

interface BlogIndexClientProps {
  initialPosts: BlogPost[];
  categories: string[];
}

export default function BlogIndexClient({ initialPosts, categories }: BlogIndexClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        post.category?.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    if (selectedCategory !== 'All' || searchQuery) {
      return null;
    }
    return initialPosts.find((p) => p.featured) || initialPosts[0] || null;
  }, [initialPosts, selectedCategory, searchQuery]);

  const regularPosts = useMemo(() => {
    if (!featuredPost) return filteredPosts;
    return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
  }, [filteredPosts, featuredPost]);

  const allCategoryList = ['All', ...categories];

  return (
    <div className="w-full">
      {/* Search and Category Filter Controls */}
      <div className="mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides, codecs, M3U, protocols..."
            className="w-full pl-11 pr-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-all"
            aria-label="Search technical guides and tutorials"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white px-1.5 py-0.5 rounded bg-white/10"
              aria-label="Clear search"
            >
              Clear
            </button>
          )}
        </div>

        {/* Article Counter */}
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 self-center md:self-auto">
          Showing <span className="text-[#3b82f6] font-bold">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'Article' : 'Articles'}
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {allCategoryList.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20'
                  : 'bg-[#141414] text-gray-400 hover:text-white border border-white/5 hover:border-white/15'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Featured Post Card (Hero Highlight) */}
      {featuredPost && (
        <div className="mb-14">
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121620] to-[#0c0d12] border border-[#3b82f6]/30 hover:border-[#3b82f6] p-8 md:p-12 transition-all duration-300 shadow-2xl hover:shadow-blue-500/10"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-widest bg-[#3b82f6] text-white">
                Featured Engineering Guide
              </span>
              <span className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/10 text-gray-300">
                {featuredPost.category}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1.5 ml-auto">
                <Clock className="w-3.5 h-3.5 text-[#3b82f6]" aria-hidden="true" />
                {featuredPost.readingTime} min read
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 group-hover:text-[#3b82f6] transition-colors leading-[1.2]">
              {featuredPost.title}
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
              {featuredPost.excerpt}
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="font-semibold text-gray-200">{featuredPost.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  {new Date(featuredPost.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center text-sm font-bold text-[#3b82f6] group-hover:text-blue-400 tracking-wider uppercase">
                Read Complete Guide
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Grid of Articles */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 bg-[#111111] rounded-3xl border border-white/10 p-8 max-w-xl mx-auto">
          <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" aria-hidden="true" />
          <h3 className="text-lg font-bold text-white mb-2">No Guides Found</h3>
          <p className="text-gray-400 text-sm mb-6">
            We couldn&apos;t find any technical guides matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or clearing the category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#3b82f6] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between bg-[#111111] border border-white/10 hover:border-[#3b82f6]/50 rounded-2xl p-6 lg:p-7 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-black/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                    <Layers className="w-3 h-3" aria-hidden="true" />
                    {post.category}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {post.readingTime} min
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#3b82f6] transition-colors leading-snug mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {post.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-[10px] font-medium text-gray-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/5"
                      >
                        <Tag className="w-2.5 h-2.5 text-gray-400" aria-hidden="true" />
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center text-[#3b82f6] font-bold uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                    Read Guide
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

