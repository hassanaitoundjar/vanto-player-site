import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Vanto Player',
  url: 'https://vantoplayer.com',
  ogImage: '/logo.png',
  description:
    'Vanto Player is a high-performance cross-platform media player for Android, Smart TVs, Windows, Linux, and Web browsers. Play and organize your own legally accessible media streams and playlists with smooth hardware acceleration.',
};

/**
 * Build consistent metadata for any route, including OG + Twitter Card tags.
 * Pass overrides for title, description, path, and optional extras.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  /** Additional Metadata fields to merge (e.g. robots) */
  extra?: Partial<Metadata>;
}): Metadata {
  const url = `${siteConfig.url}${opts.path}`;

  return {
    title: opts.title,
    description: opts.description,
    authors: [{ name: 'Vanto Player' }],
    publisher: 'Vanto Player',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: siteConfig.ogImage,
          width: 512,
          height: 512,
          alt: `${siteConfig.name} Logo`,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: opts.title,
      description: opts.description,
      images: [siteConfig.ogImage],
    },
    ...opts.extra,
  };
}
