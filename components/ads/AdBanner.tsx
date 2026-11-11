'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'horizontal' | 'rectangle';
  className?: string;
}

// Disallow ads on policy, legal, utility, and error pages per Google AdSense Publisher Policies
const DISALLOWED_ROUTES = [
  '/privacy',
  '/terms',
  '/refund',
  '/dmca',
  '/legal',
  '/contact',
  '/about',
];

export default function AdBanner({
  slot = '8715827832',
  format = 'auto',
  className = '',
}: AdBannerProps) {
  const pathname = usePathname();
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef(false);

  // Check if current route is disallowed for ad serving
  const isDisallowed = DISALLOWED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  // Optional global kill-switch via environment variable
  const adsDisabled = process.env.NEXT_PUBLIC_ENABLE_ADS === 'false';

  useEffect(() => {
    if (isDisallowed || adsDisabled) {
      return;
    }

    // Only push once per mounted ad element
    if (!pushedRef.current) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      } catch (err) {
        // Log softly in development only
        if (process.env.NODE_ENV !== 'production') {
          console.warn('AdSense push notice:', err);
        }
      }
    }
  }, [pathname, isDisallowed, adsDisabled]);

  if (isDisallowed || adsDisabled) {
    return null;
  }

  return (
    <div
      className={`w-full mx-auto my-6 px-4 flex flex-col items-center justify-center text-center ${className}`}
      aria-label="Advertisement"
    >
      <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 mb-1.5 select-none">
        Advertisement
      </span>
      <div className="w-full max-w-4xl min-h-[90px] flex items-center justify-center bg-white/[0.015] border border-white/5 rounded-xl overflow-hidden">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', minWidth: '280px', width: '100%', minHeight: '90px' }}
          data-ad-client="ca-pub-7407561322459315"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
