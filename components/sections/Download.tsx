'use client';

import { Copy, Apple, Monitor, Globe, Terminal, CheckCircle2, Tv, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DownloadSection() {
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopy = (text: string, isUrl: boolean) => {
    navigator.clipboard.writeText(text);
    if (isUrl) {
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } else {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <section id="downloads" className="w-full bg-[#0a0a0a] py-24 border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Official Distribution
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Download Vanto Player
          </h2>
          <div className="w-16 h-[3px] bg-[#3b82f6] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Select your platform below. Verified, virus-free releases distributed with cryptographic SHA-256 integrity checksums.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

          {/* Card 1: Android & Fire TV */}
          <div className="bg-[#111111] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col hover:border-blue-500/40 transition-all duration-300 shadow-xl group">
            {/* Visual Header */}
            <div className="w-full h-44 relative mb-6 rounded-2xl overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
              <Image 
                src="/screenshots/live-screen.png" 
                alt="Vanto Player Android Interface" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-md bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400"></span> Available Now
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">Android & Fire TV App</h3>
              <p className="text-xs text-gray-400 font-mono mb-4">Version 5.0 • APK • SHA-256: 8f2c...4b1a</p>

              <div className="flex flex-col gap-2 mb-6">
                {/* Downloader Code */}
                <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 p-3 rounded-xl">
                  <div className="text-xs text-gray-300 font-medium">
                    Downloader Code: <strong className="ml-1 text-white font-mono text-sm">7392829</strong>
                  </div>
                  <button 
                    onClick={() => handleCopy('7392829', false)} 
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors text-blue-400" 
                    title="Copy Downloader Code"
                    aria-label="Copy Downloader Code"
                  >
                    <Copy className={`w-4 h-4 ${copiedCode ? 'text-green-400' : 'text-blue-400'}`} aria-hidden="true" />
                  </button>
                </div>

                {/* Direct APK Link Box */}
                <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 p-3 rounded-xl">
                  <span className="text-xs text-gray-400 font-mono truncate mr-2">downloads.vantoplayer.com/android/vantoplayer.apk</span>
                  <button 
                    onClick={() => handleCopy('https://downloads.vantoplayer.com/android/vantoplayer.apk', true)} 
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors text-blue-400" 
                    title="Copy APK URL"
                    aria-label="Copy APK URL"
                  >
                    <Copy className={`w-4 h-4 ${copiedUrl ? 'text-green-400' : 'text-blue-400'}`} aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="mt-auto pt-2 flex flex-col sm:flex-row gap-3">
                <Link 
                  href="https://downloads.vantoplayer.com/android/vantoplayer.apk" 
                  className="flex-1 bg-[#3b82f6] text-white font-bold text-xs py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors text-center shadow-lg shadow-blue-500/20"
                >
                  Download APK
                </Link>
                <Link 
                  href="/how-to/install-on-firestick-android-tv" 
                  className="flex-1 bg-white/5 border border-white/10 text-gray-300 font-medium text-xs py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-center"
                >
                  Firestick Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Smart TVs (Samsung & LG) */}
          <div className="bg-[#111111] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col hover:border-blue-500/40 transition-all duration-300 shadow-xl group">
            <div className="w-full h-44 relative mb-6 rounded-2xl overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
              <Image 
                src="/images/home-page.png" 
                alt="Vanto Player Smart TV Interface" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Tv className="w-3.5 h-3.5" aria-hidden="true" /> Smart TV Guides
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">Samsung & LG Smart TV</h3>
              <p className="text-xs text-gray-400 mb-4">Dedicated tutorials for Tizen OS and webOS platforms.</p>

              <div className="text-xs text-gray-300 space-y-2.5 mb-6 bg-white/[0.03] border border-white/10 p-3.5 rounded-xl">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Samsung Smart TVs (Tizen OS 2018+)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>LG Smart TVs (webOS 4.0+)</span>
                </div>
              </div>

              <div className="mt-auto pt-2 flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/how-to/install-on-samsung-smart-tv" 
                  className="flex-1 bg-white/5 border border-white/10 text-white font-semibold text-xs py-3 px-3 rounded-xl hover:bg-white/10 transition-colors text-center"
                >
                  Samsung Guide
                </Link>
                <Link 
                  href="/how-to/install-on-lg-webos" 
                  className="flex-1 bg-white/5 border border-white/10 text-white font-semibold text-xs py-3 px-3 rounded-xl hover:bg-white/10 transition-colors text-center"
                >
                  LG webOS Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Web Browser Player */}
          <div className="bg-[#111111] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col hover:border-blue-500/40 transition-all duration-300 shadow-xl group">
            <div className="w-full h-44 relative mb-6 rounded-2xl overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
              <Image 
                src="/screenshots/series-screen.png" 
                alt="Vanto Player Web Browser Interface" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" aria-hidden="true" /> Zero Install
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">Web Browser Player</h3>
              <p className="text-xs text-gray-400 mb-4">Stream directly in any modern desktop or mobile browser.</p>

              <div className="text-xs text-gray-300 space-y-2 mb-6 bg-white/[0.03] border border-white/10 p-3.5 rounded-xl">
                <p>Supports Google Chrome, Apple Safari, Mozilla Firefox, and Microsoft Edge with MSE (Media Source Extensions).</p>
              </div>

              <div className="mt-auto pt-2">
                <Link 
                  href="https://web.vantoplayer.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-[#3b82f6] text-white font-bold text-xs py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors text-center shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  Launch Web Player <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Linux Desktop */}
          <div className="bg-[#111111] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col hover:border-blue-500/40 transition-all duration-300 shadow-xl group">
            <div className="w-full h-44 relative mb-6 rounded-2xl overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
              <Image 
                src="/screenshots/live-player.png" 
                alt="Vanto Player Linux Interface" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" aria-hidden="true" /> Linux AppImage
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">Linux Desktop</h3>
              <p className="text-xs text-gray-400 font-mono mb-4">x86_64 AppImage • SHA-256: c4b1...8f2a</p>

              <div className="text-xs text-gray-300 space-y-2 mb-6 bg-white/[0.03] border border-white/10 p-3.5 rounded-xl">
                <p>Standalone AppImage bundle compatible with Ubuntu, Debian, Fedora, Arch, and Linux Mint.</p>
              </div>

              <div className="mt-auto pt-2">
                <Link 
                  href="https://downloads.vantoplayer.com/linux/vanto_player-x86_64.AppImage" 
                  className="w-full bg-white/10 border border-white/10 text-white font-bold text-xs py-3 px-4 rounded-xl hover:bg-white/20 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  Download AppImage
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5: Windows Desktop */}
          <div className="bg-[#111111] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col hover:border-blue-500/40 transition-all duration-300 shadow-xl group">
            <div className="w-full h-44 relative mb-6 rounded-2xl overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
              <Image 
                src="/screenshots/home-screen.png" 
                alt="Vanto Player Windows Interface" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5" aria-hidden="true" /> Windows 10/11
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">Windows PC</h3>
              <p className="text-xs text-gray-400 mb-4">Supported via Web Player and Windows Subsystem for Android (WSA).</p>

              <div className="text-xs text-gray-300 space-y-2 mb-6 bg-white/[0.03] border border-white/10 p-3.5 rounded-xl">
                <p>Run instantly with hardware acceleration in Chrome or Edge, or sideload the APK in Windows 11 Android Subsystem.</p>
              </div>

              <div className="mt-auto pt-2 flex gap-3">
                <Link 
                  href="https://web.vantoplayer.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 bg-[#3b82f6] text-white font-bold text-xs py-3 px-3 rounded-xl hover:bg-blue-600 transition-colors text-center"
                >
                  Use Web App
                </Link>
                <Link 
                  href="/blog/iptv-on-windows-and-mac-guide" 
                  className="flex-1 bg-white/5 border border-white/10 text-gray-300 font-medium text-xs py-3 px-3 rounded-xl hover:bg-white/10 transition-colors text-center"
                >
                  Setup Guide
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6: iOS & Apple TV (Roadmap) */}
          <div className="bg-[#111111] rounded-3xl border border-white/10 p-6 md:p-8 flex flex-col opacity-80 shadow-xl group">
            <div className="w-full h-44 relative mb-6 rounded-2xl overflow-hidden bg-black/50 border border-white/5 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
              <Image 
                src="/screenshots/movies-details.png" 
                alt="Vanto Player iOS Concept Interface" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-50" 
              />
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-md bg-gray-500/20 border border-gray-500/30 text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Apple className="w-3.5 h-3.5" aria-hidden="true" /> In Development
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-1">Apple iOS & tvOS</h3>
              <p className="text-xs text-gray-400 mb-4">Native Swift implementation in private beta testing.</p>

              <div className="text-xs text-gray-400 space-y-2 mb-6 bg-white/[0.02] border border-white/5 p-3.5 rounded-xl">
                <p>Apple App Store submission is underway. In the meantime, iOS users can access playback via our Safari-optimized Web Player.</p>
              </div>

              <div className="mt-auto pt-2">
                <Link 
                  href="https://web.vantoplayer.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-white/5 border border-white/10 text-gray-300 font-semibold text-xs py-3 px-4 rounded-xl hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
                >
                  <Globe className="w-4 h-4 text-blue-400" aria-hidden="true" />
                  Open in Safari
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Uninstall Instructions */}
        <div className="mt-20 max-w-4xl mx-auto bg-[#111111] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">How to Uninstall Vanto Player</h3>
          <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto text-sm">
            Vanto Player leaves no persistent background services or hidden registry files. To remove it completely:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Android / Fire TV */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                <Tv className="w-4 h-4 text-blue-400" aria-hidden="true" /> Android / Fire TV
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Go to <strong>Settings &gt; Applications &gt; Manage Installed Applications</strong>, select <strong>Vanto Player</strong>, and click <strong>Uninstall</strong>.
              </p>
            </div>

            {/* Linux */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                <Terminal className="w-4 h-4 text-blue-400" aria-hidden="true" /> Linux Desktop
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Simply delete the downloaded <code>vanto_player-x86_64.AppImage</code> file and remove configuration cache in <code>~/.config/vantoplayer</code> if desired.
              </p>
            </div>

            {/* Web Player */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-white text-sm flex items-center gap-2 mb-1">
                <Globe className="w-4 h-4 text-blue-400" aria-hidden="true" /> Web Browser
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Clear browser site data and cache for <code>web.vantoplayer.com</code> in your browser&apos;s privacy settings to reset all local playlist tokens.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
