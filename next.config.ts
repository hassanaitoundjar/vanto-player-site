import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/blog/install-vanto-player-firestick',
        destination: '/how-to/install-on-firestick-android-tv',
        permanent: true,
      },
      {
        source: '/blog/install-vanto-player-smart-tv',
        destination: '/how-to/install-on-samsung-smart-tv',
        permanent: true,
      },
      {
        source: '/blog/top-10-iptv-players-usa-2026',
        destination: '/blog/best-iptv-players-smart-tv-android-firestick',
        permanent: true,
      },
      {
        source: '/blog/top-rated-m3u-players-usa-app-store',
        destination: '/blog/best-iptv-players-smart-tv-android-firestick',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
