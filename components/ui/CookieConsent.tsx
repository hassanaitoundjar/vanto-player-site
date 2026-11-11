'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('vanto_cookie_consent');
      if (!consent) {
        // Small delay so it appears smoothly without interfering with initial paint
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access may fail in certain incognito environments
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'essential') => {
    try {
      localStorage.setItem('vanto_cookie_consent', choice);
      localStorage.setItem('vanto_cookie_consent_date', new Date().toISOString());
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-[#141414] border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/80 backdrop-blur-md">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#3b82f6]">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-white mb-1">Privacy & Cookie Choices</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              We use essential cookies to operate this website and Google AdSense to support our technical guides. You can accept all or limit to essential cookies anytime. Review our{' '}
              <Link href="/privacy" className="text-[#3b82f6] hover:underline font-semibold">
                Privacy Policy
              </Link>{' '}
              for details.
            </p>
          </div>
          <button
            onClick={() => handleConsent('essential')}
            className="text-gray-400 hover:text-white p-1 transition-colors"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-end gap-2.5">
          <button
            onClick={() => handleConsent('essential')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={() => handleConsent('accepted')}
            className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-[#3b82f6] hover:bg-blue-600 transition-colors shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </aside>
  );
}

