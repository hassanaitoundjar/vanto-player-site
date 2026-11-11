import { getPostBySlug, getPostSlugs, getAllPosts, extractToc } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, ArrowRight, UserCheck, ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, siteConfig } from '@/lib/siteConfig';
import { BreadcrumbListLd, ArticleLd } from '@/components/seo/JsonLd';
import TableOfContents from '@/components/blog/TableOfContents';
import ArticleActions from '@/components/blog/ArticleActions';
import AdBanner from '@/components/ads/AdBanner';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const post = getPostBySlug(slug);
    return buildMetadata({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${slug}`,
    });
  } catch {
    return {
      title: 'Guide Not Found',
    };
  }
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const toc = extractToc(post.content);
  const articleUrl = `${siteConfig.url}/blog/${slug}`;

  const allPosts = getAllPosts();
  let relatedPosts = allPosts.filter((p) => p.slug !== slug && p.category === post.category);
  if (relatedPosts.length < 3) {
    const otherPosts = allPosts.filter((p) => p.slug !== slug && p.category !== post.category);
    relatedPosts = [...relatedPosts, ...otherPosts];
  }
  relatedPosts = relatedPosts.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a] text-white">
      {/* Structured Data */}
      <BreadcrumbListLd
        items={[
          { name: 'Home', item: siteConfig.url },
          { name: 'Knowledge Base', item: `${siteConfig.url}/blog` },
          { name: post.category, item: `${siteConfig.url}/blog` },
          { name: post.title, item: articleUrl },
        ]}
      />
      <ArticleLd
        title={post.title}
        description={post.excerpt}
        slug={slug}
        datePublished={post.date}
        dateModified={post.updatedDate || post.date}
        authorName={post.author}
      />

      <article className="w-full">
        {/* Article Header Hero */}
        <section className="relative w-full pt-16 pb-14 px-6 md:px-8 xl:px-12 bg-gradient-to-b from-[#121620] via-[#0d0f17] to-[#0a0a0a] border-b border-white/5">
          <div className="container mx-auto max-w-4xl relative z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center flex-wrap gap-2 text-xs text-gray-400 mb-6 font-medium"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-600" aria-hidden="true" />
              <Link href="/blog" className="hover:text-white transition-colors">
                Knowledge Base
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-600" aria-hidden="true" />
              <span className="text-gray-400">{post.category}</span>
              <ChevronRight className="w-3 h-3 text-gray-600" aria-hidden="true" />
              <span className="text-gray-200 truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
            </nav>

            {/* Category and Reading Time Tag */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-block bg-[#3b82f6] text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md shadow-sm">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                <Clock className="w-3.5 h-3.5 text-[#3b82f6]" aria-hidden="true" />
                {post.readingTime} min read
              </span>
              {post.updatedDate && post.updatedDate !== post.date && (
                <span className="text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  Updated: {new Date(post.updatedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </span>
              )}
            </div>

            {/* Article Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.12]">
              {post.title}
            </h1>

            {/* Summary / Excerpt */}
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed font-normal">
              {post.excerpt}
            </p>

            {/* Author and Date Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/40 flex items-center justify-center text-[#3b82f6]">
                  <UserCheck className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span className="font-semibold text-gray-200">{post.author}</span>
                <span className="text-gray-400">({post.authorRole || 'Streaming Media Architect'})</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
                <span>
                  Published{' '}
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Post Content Section */}
        <section className="w-full py-12 px-6 md:px-8 xl:px-12 bg-[#0a0a0a] relative z-10">
          <div className="container mx-auto max-w-4xl">
            {/* Interactive Table of Contents */}
            {toc.length > 0 && <TableOfContents items={toc} />}

            {/* Main Markdown Body */}
            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/10 prose-h2:pb-3
              prose-h3:text-xl md:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:my-4
              prose-a:text-[#3b82f6] prose-a:font-semibold hover:prose-a:text-blue-400 prose-a:underline prose-a:underline-offset-4
              prose-strong:text-white prose-strong:font-bold
              prose-code:text-blue-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#111111] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-4 prose-pre:text-gray-200
              prose-ol:text-gray-300 prose-ul:text-gray-300 prose-li:my-1.5
              prose-blockquote:border-l-4 prose-blockquote:border-[#3b82f6] prose-blockquote:bg-white/[0.02] prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-blockquote:text-gray-300 prose-blockquote:font-normal prose-blockquote:not-italic
              prose-table:border-collapse prose-table:w-full prose-table:my-6
              prose-th:border prose-th:border-white/15 prose-th:p-3 prose-th:bg-white/5 prose-th:text-white prose-th:font-bold prose-th:text-left
              prose-td:border prose-td:border-white/10 prose-td:p-3 prose-td:text-gray-300
              prose-hr:border-white/10 prose-hr:my-8">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children, ...props }) => {
                    const text = String(children);
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, '')
                      .replace(/\s+/g, '-');
                    return (
                      <h2 id={id} className="scroll-mt-28" {...props}>
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children, ...props }) => {
                    const text = String(children);
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, '')
                      .replace(/\s+/g, '-');
                    return (
                      <h3 id={id} className="scroll-mt-28" {...props}>
                        {children}
                      </h3>
                    );
                  },
                  table: ({ children, ...props }) => (
                    <div className="overflow-x-auto my-6 rounded-xl border border-white/10">
                      <table className="w-full text-left border-collapse" {...props}>
                        {children}
                      </table>
                    </div>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Social Sharing & Action Bar */}
            <ArticleActions title={post.title} url={articleUrl} />

            {/* High-Intent In-Article AdSense Banner */}
            <div className="my-10">
              <AdBanner slot="8715827832" format="horizontal" />
            </div>

            {/* Product Value CTA Card */}
            <div className="my-12 bg-gradient-to-br from-[#121622] to-[#0c0d12] border border-[#3b82f6]/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="max-w-xl text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6]/30 mb-3">
                  Production Software
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Experience Vanto Player on Your Devices
                </h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  Enjoy hardware-accelerated HLS, DASH, and 4K HEVC streaming with your own legally owned playlists. Clean interface, zero bloat, maximum privacy.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Get Vanto Player
                </Link>
              </div>
            </div>

            {/* Author Expertise Box */}
            <div className="my-10 bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3b82f6] to-blue-700 flex items-center justify-center shrink-0 shadow-lg text-white font-black text-xl">
                VP
              </div>
              <div className="text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <h4 className="text-base font-bold text-white">{post.author}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                    {post.authorRole || 'Streaming Media Architect'}
                  </span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mt-2">
                  Our engineering team specializes in digital video containers, hardware-accelerated decoding pipelines, and adaptive bitrate streaming (HLS/DASH). We publish rigorous, vendor-neutral technical guides to help developers and users master digital media playback.
                </p>
              </div>
            </div>

            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-12 border-t border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Related Technical Guides</h3>
                  <Link
                    href="/blog"
                    className="text-xs font-bold text-[#3b82f6] hover:underline uppercase tracking-wider"
                  >
                    View All Guides &rarr;
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      key={relatedPost.slug}
                      className="group flex flex-col justify-between bg-[#111111] border border-white/10 hover:border-[#3b82f6]/40 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1"
                    >
                      <div>
                        <span className="inline-block text-[#3b82f6] text-[10px] font-bold uppercase tracking-wider mb-2">
                          {relatedPost.category}
                        </span>
                        <h4 className="font-bold text-sm text-white group-hover:text-[#3b82f6] transition-colors line-clamp-2 mb-2 leading-snug">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-400 text-xs line-clamp-2 mb-4">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-gray-500 pt-3 border-t border-white/5">
                        <span>{relatedPost.readingTime} min read</span>
                        <span className="text-[#3b82f6] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                          Read <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </article>
    </div>
  );
}
