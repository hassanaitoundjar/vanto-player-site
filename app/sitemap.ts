import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  
  const blogRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const coreRoutes = [
    '',
    '/download',
    '/about',
    '/support',
    '/contact',
    '/legal',
    '/terms',
    '/privacy',
    '/refund',
    '/dmca',
    '/blog',
    '/how-to/install-on-samsung-smart-tv',
    '/how-to/install-on-lg-webos',
    '/how-to/install-on-firestick-android-tv',
    '/how-to/add-m3u-playlist',
    '/how-to/fix-playlist-not-loading',
    '/how-to/use-vanto-player',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : route.startsWith('/how-to') || route === '/download' ? 0.8 : 0.6,
  }));

  return [...coreRoutes, ...blogRoutes];
}
