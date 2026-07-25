import { getPostBySlug, getPostSlugs, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/siteConfig';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  try {
    const post = getPostBySlug(slug);
    return buildMetadata({
      title: `${post.title} | Vanto Player Blog`,
      description: post.excerpt,
      path: `/blog/${slug}`
    });
  } catch (error) {
    return {
      title: 'Post Not Found | Vanto Player'
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
  } catch (e) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-white">
      <article className="w-full">
        {/* Dark Hero Section */}
        <section className="relative w-full pt-32 pb-24 px-6 md:px-8 xl:px-12 bg-[#111111] border-b border-white/5">
          <div className="container mx-auto max-w-4xl relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>›</span>
              <span className="text-gray-300 truncate">{post.title}</span>
            </nav>
            
            {/* Category Tag */}
            <div className="mb-6">
              <span className="inline-block bg-[#3b82f6] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                GUIDE
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
              {post.title}
            </h1>
            
            {/* Excerpt */}
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Author & Date */}
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" / aria-hidden="true">
                By {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" / aria-hidden="true">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="w-full py-16 px-6 md:px-8 xl:px-12 bg-white relative z-10">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none text-gray-600 prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#3b82f6] prose-a:no-underline hover:prose-a:underline prose-li:text-gray-600 prose-strong:text-gray-900 prose-img:rounded-xl">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* CTA Box */}
            <div className="mt-16 bg-[#111111] rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Try Vanto Player?</h3>
                <p className="text-gray-400 text-sm md:text-base">Experience the ultimate media player for your IPTV playlists. Download now and enjoy seamless 4K streaming.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link href="/download" className="px-8 py-3 bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-blue-600 transition-colors">
                  Download Now
                </Link>
                <Link href="/activation" className="px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/5">
                  Activate Device
                </Link>
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                <User className="w-8 h-8 text-gray-500" / aria-hidden="true">
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-bold text-gray-900">{post.author}</h4>
                <p className="text-[#3b82f6] text-sm font-bold uppercase tracking-wider mb-2">Vanto Player Team</p>
                <p className="text-gray-600 text-sm leading-relaxed">Dedicated to bringing you the best media player experience. We share tips, tutorials, and updates to help you get the most out of your IPTV playlists.</p>
              </div>
            </div>
            
            {/* Related Articles */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group flex flex-col gap-3">
                    <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-wider">Guide</span>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#3b82f6] transition-colors line-clamp-2">{relatedPost.title}</h4>
                    <span className="text-gray-500 text-sm">
                      {new Date(relatedPost.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>
      </article>
    </div>
  );
}
