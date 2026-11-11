import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-5 lg:col-span-1 pr-0 lg:pr-4">
            <Link href="/" className="flex items-center gap-3 w-max" aria-label="Vanto Player Home">
              <div className="w-10 h-10 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="Vanto Player Logo" width={40} height={40} className="object-cover w-full h-full" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Vanto Player</span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed">
              High-performance, hardware-accelerated media player software engineered for Android TV, Fire TV, and Smart TVs. Play your own legally owned playlists and local media streams with total privacy.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Software Engine v2.4 Active
              </span>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase text-gray-200 mb-1">Product</h4>
            <Link href="/#features" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Core Features</Link>
            <Link href="/download" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Downloads & APK</Link>
            <Link href="/#devices" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Supported Devices</Link>
            <Link href="/#how-it-works" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">How It Works</Link>
            <Link href="/#parental" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Parental Controls</Link>
          </div>

          {/* Resources & Guides */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase text-gray-200 mb-1">Knowledge Base</h4>
            <Link href="/blog" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">All Guides & Tutorials</Link>
            <Link href="/how-to/use-vanto-player" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">User Quick Start Guide</Link>
            <Link href="/how-to/install-on-firestick-android-tv" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Fire TV & Android Setup</Link>
            <Link href="/how-to/add-m3u-playlist" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Playlist Configuration</Link>
            <Link href="/how-to/fix-playlist-not-loading" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Playback Diagnostics</Link>
          </div>

          {/* Support & Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase text-gray-200 mb-1">Company</h4>
            <Link href="/about" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">About Vanto Player</Link>
            <Link href="/support" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Support Center</Link>
            <Link href="/contact" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Contact Team</Link>
            <Link href="/support#faq" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Frequently Asked Questions</Link>
            <Link href="/#fraud" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Security & Fraud Notice</Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase text-gray-200 mb-1">Legal Policies</h4>
            <Link href="/legal" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Legal Disclaimer</Link>
            <Link href="/terms" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Terms of Service</Link>
            <Link href="/privacy" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Privacy Policy</Link>
            <Link href="/refund" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">Refund Policy</Link>
            <Link href="/dmca" className="text-gray-400 text-xs hover:text-[#3b82f6] transition-colors w-max">DMCA & Copyright</Link>
          </div>

        </div>

        {/* Mandatory Policy & Content Notice Banner */}
        <div className="mb-10 rounded-xl bg-white/[0.02] border border-white/10 p-5 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="text-[#3b82f6] text-lg font-bold shrink-0">ℹ️</span>
              <p className="text-[12px] text-gray-400 leading-relaxed">
                <strong className="text-gray-200">Legal & Policy Notice:</strong> Vanto Player is strictly an independent media playback software application. It does not host, provide, broadcast, distribute, or resell any media streams, television channels, movies, or playlists. Users are solely responsible for importing their own legally acquired and authorized media sources.
              </p>
            </div>
            <Link
              href="/legal"
              className="shrink-0 text-[11px] font-semibold text-[#3b82f6] hover:text-blue-400 uppercase tracking-wider underline underline-offset-4"
            >
              Read Full Terms
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left font-normal">
            &copy; {currentYear} Vanto Player. All rights reserved. Built with modern web standards and hardware-accelerated playback.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[#3b82f6] text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/20">
              Hardware Accelerated
            </span>
            <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded bg-white/5 border border-white/10">
              Zero Content Provider
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
