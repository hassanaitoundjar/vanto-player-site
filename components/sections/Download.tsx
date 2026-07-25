'use client';

import { Copy, Apple, Monitor, Smartphone, Play, Globe, Tv, LayoutGrid, Terminal } from 'lucide-react';
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
    <section id="downloads" className="w-full bg-[#f8f9fa] py-24 border-t border-gray-100 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide uppercase mb-4">
            Download Vanto Player
          </h2>
          <div className="w-16 h-[3px] bg-[#3b82f6] mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* Card 1: Android */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            {/* Image Composition */}
            <div className="w-full h-44 relative mb-8 flex items-center justify-center">
              {/* Back Image */}
              <div className="absolute right-2 top-0 w-[75%] h-28 rounded-lg overflow-hidden shadow-md">
                <Image src="/screenshots/live-screen.png" alt="Vanto Player Android Mobile Interface - Live TV Screen" fill priority className="object-cover" />
                <div className="absolute bottom-1 right-2 flex gap-1">
                   <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                </div>
              </div>
              {/* Front Image */}
              <div className="absolute left-2 bottom-2 w-[70%] h-28 rounded-lg overflow-hidden shadow-xl border-4 border-white bg-black">
                <Image src="/screenshots/movies-screen.png" alt="Vanto Player Android Mobile Interface - VOD Library" fill className="object-cover opacity-90" />
                <div className="absolute bottom-1 right-2 flex gap-1">
                   <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                   <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                </div>
              </div>
              {/* Android Badge */}
              <div className="absolute top-8 left-10 bg-green-500 rounded p-1.5 shadow-lg z-10 border-2 border-white">
                <Smartphone className="w-4 h-4 text-white" / aria-hidden="true">
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-0.5">Android App</h3>
              <p className="text-[12px] text-gray-800 font-bold mb-6">Download Latest Version (v5.0)</p>

              <div className="flex flex-col gap-2 mb-6">
                {/* URL Copy Box */}
                <div className="flex items-center justify-between bg-[#f4ebff] p-2.5 rounded-sm">
                  <span className="text-[10px] text-gray-700 font-medium truncate mr-2">https://pub-28ff1ca3d572491fb3d14dfac8b17d19.r2.dev/android/vantoplayer.apk</span>
                  <button onClick={() => handleCopy('https://pub-28ff1ca3d572491fb3d14dfac8b17d19.r2.dev/android/vantoplayer.apk', true)} className="p-0.5 hover:bg-purple-200 rounded transition-colors" title="Copy URL">
                    <Copy className={`w-3.5 h-3.5 ${copiedUrl ? 'text-green-600' : 'text-[#a855f7]'}`} / aria-hidden="true">
                  </button>
                </div>

                {/* Code Copy Box */}
                <div className="flex items-center justify-between bg-[#f4ebff] p-2.5 rounded-sm">
                  <span className="text-[10px] text-gray-700 font-medium">Code for Downloader App <strong className="ml-1 text-black font-bold">7392829</strong></span>
                  <button onClick={() => handleCopy('7392829', false)} className="p-0.5 hover:bg-purple-200 rounded transition-colors" title="Copy Code">
                    <Copy className={`w-3.5 h-3.5 ${copiedCode ? 'text-green-600' : 'text-[#a855f7]'}`} / aria-hidden="true">
                  </button>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-3">
                <Link href="https://pub-28ff1ca3d572491fb3d14dfac8b17d19.r2.dev/android/vantoplayer.apk" target="_blank" className="flex-1 bg-[#4b8df8] text-white font-bold text-[12px] py-2.5 rounded-sm hover:bg-blue-600 transition-colors shadow-sm text-center flex items-center justify-center">
                  Download APK
                </Link>
                <div className="flex-1 bg-gray-100 text-gray-400 font-bold text-[12px] py-2.5 rounded-sm flex items-center justify-center gap-1.5 cursor-not-allowed border border-gray-200">
                  <Play className="w-3.5 h-3.5 fill-gray-400 text-gray-400" / aria-hidden="true"> 
                  <div className="flex flex-col items-start leading-none text-left">
                     <span className="text-[6px] font-normal uppercase text-gray-400">Coming Soon</span>
                     <span className="text-[11px] mt-0.5">Google Play</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: iOS */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            {/* Image Composition */}
            <div className="w-full h-44 relative mb-8 flex items-center justify-center">
              {/* Back Phone */}
              <div className="absolute top-2 w-[85%] h-28 rounded-2xl overflow-hidden shadow-lg border-[4px] border-black bg-black">
                <Image src="/screenshots/live-screen.png" alt="Vanto Player iOS Interface - Channel Guide" fill className="object-cover opacity-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-3 h-3 text-black fill-black ml-0.5" / aria-hidden="true">
                </div>
              </div>
              {/* Front Phone */}
              <div className="absolute bottom-2 right-4 w-[50%] h-20 rounded-xl overflow-hidden shadow-xl border-[3px] border-black bg-black">
                <Image src="/screenshots/movies-details.png" alt="Vanto Player iOS Interface - Movie Details" fill className="object-cover opacity-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-2 h-2 text-black fill-black ml-0.5" / aria-hidden="true">
                </div>
              </div>
              {/* Badges */}
              <div className="absolute bottom-0 left-16 bg-[#007aff] rounded-lg p-1.5 shadow-lg z-10 border-2 border-white">
                <Apple className="w-4 h-4 text-white fill-white" / aria-hidden="true">
              </div>
              <div className="absolute top-8 right-8 bg-gray-800 rounded-lg p-1.5 shadow-lg z-10 border-2 border-white">
                <Apple className="w-4 h-4 text-white fill-white" / aria-hidden="true">
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-0.5">IOS App</h3>
              <p className="text-[12px] text-gray-500 font-medium mb-6">(Vanto Player Pro)</p>

              <div className="mt-auto flex justify-center pt-8">
                <div className="bg-gray-100 text-gray-400 font-semibold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2.5 w-[180px] cursor-not-allowed border border-gray-200">
                  <Apple className="w-7 h-7 fill-gray-400" / aria-hidden="true"> 
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[8px] leading-none text-gray-400">Coming Soon</span>
                    <span className="text-[15px] leading-none font-semibold mt-0.5">App Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: MacOS */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            {/* Image Composition */}
            <div className="w-full h-44 relative mb-8 flex items-center justify-center">
              <div className="absolute top-4 w-[85%] h-32 rounded-lg overflow-hidden shadow-lg border-[3px] border-gray-200 bg-black">
                <Image src="/screenshots/home-screen.png" alt="Vanto Player MacOS Desktop Application Interface" fill className="object-cover opacity-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-3 h-3 text-black fill-black ml-0.5" / aria-hidden="true">
                </div>
              </div>
              <div className="absolute bottom-6 w-16 h-1 bg-gray-200 rounded-full"></div>
              
              {/* Badges */}
              <div className="absolute bottom-4 left-6 bg-white rounded-lg p-1 shadow-lg z-10 border border-gray-100 flex items-center justify-center">
                <div className="w-6 h-6 bg-[#007aff] rounded flex items-center justify-center">
                   <span className="text-white font-bold text-[8px] leading-none">Mac</span>
                </div>
              </div>
              <div className="absolute top-0 right-4 bg-white rounded-lg p-1.5 shadow-lg z-10 border border-gray-200 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-gray-500" / aria-hidden="true">
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-0.5">MacOS App</h3>
              <p className="text-[12px] text-gray-500 font-medium mb-6">Coming Soon</p>

              <div className="mt-auto flex justify-center pt-10">
                <div className="bg-gray-100 text-gray-400 font-semibold px-4 py-2.5 rounded-lg flex items-center justify-center gap-2.5 w-[180px] cursor-not-allowed border border-gray-200">
                  <div className="w-6 h-6 bg-gray-300 rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-[8px]">Mac</span>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[8px] leading-none text-gray-400">Coming Soon</span>
                    <span className="text-[15px] leading-none font-semibold mt-0.5">MAC OS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Windows App */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            {/* Image Composition */}
            <div className="w-full h-44 relative mb-8 flex items-center justify-center">
              <div className="absolute top-4 w-[85%] h-32 rounded-lg overflow-hidden shadow-lg border-[3px] border-gray-200 bg-black">
                <Image src="/screenshots/home-screen.png" alt="Vanto Player Windows Desktop Interface - Home Screen" fill className="object-cover opacity-90" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-3 h-3 text-black fill-black ml-0.5" / aria-hidden="true">
                </div>
              </div>
              <div className="absolute bottom-6 w-16 h-1 bg-gray-200 rounded-full"></div>
              
              <div className="absolute left-0 top-16 w-[45%] h-20 rounded-md overflow-hidden shadow-xl border-2 border-white bg-black">
                <Image src="/screenshots/userlist-screen.png" alt="Vanto Player Windows Desktop Interface - Settings" fill className="object-cover opacity-90" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-2 h-2 text-black fill-black ml-0.5" / aria-hidden="true">
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-2 right-2 bg-[#0286a5] rounded-xl p-2.5 shadow-lg z-10 border-2 border-white">
                <div className="grid grid-cols-2 gap-[2px] w-6 h-6">
                   <div className="bg-white"></div>
                   <div className="bg-white"></div>
                   <div className="bg-white"></div>
                   <div className="bg-white"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-0.5">Windows App</h3>
              <p className="text-[12px] text-gray-800 font-bold mb-6">Download Latest Version (v1.1.2)</p>

              <div className="mt-auto flex justify-center pt-10">
                <Link href="https://vantoplayer.com/download/windows" target="_blank" className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">
                  <div className="grid grid-cols-2 gap-[1px] w-6 h-6">
                     <div className="bg-[#00adef]"></div>
                     <div className="bg-[#00adef]"></div>
                     <div className="bg-[#00adef]"></div>
                     <div className="bg-[#00adef]"></div>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[8px] leading-none text-gray-300">Available for</span>
                    <span className="text-[15px] leading-none font-semibold mt-0.5">Window os</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Card 5: Linux App */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            {/* Image Composition */}
            <div className="w-full h-44 relative mb-8 flex items-center justify-center">
              <div className="absolute top-4 w-[85%] h-32 rounded-lg overflow-hidden shadow-lg border-[3px] border-gray-200 bg-black">
                <Image src="/screenshots/live-player.png" alt="Vanto Player Linux Desktop Application Interface" fill className="object-cover opacity-80" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-3 h-3 text-black fill-black ml-0.5" / aria-hidden="true">
                </div>
              </div>
              <div className="absolute bottom-6 w-16 h-1 bg-gray-200 rounded-full"></div>
              
              {/* Badge */}
              <div className="absolute bottom-4 left-6 bg-[#dd4814] rounded-xl p-2 shadow-lg z-10 border-2 border-white">
                <Terminal className="w-6 h-6 text-white" / aria-hidden="true">
              </div>
              <div className="absolute top-0 right-4 bg-white rounded-lg p-1.5 shadow-lg z-10 border border-gray-200 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-gray-500" / aria-hidden="true">
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-0.5">Linux App</h3>
              <p className="text-[12px] text-gray-800 font-bold mb-6">Download Latest Version</p>

              <div className="mt-auto flex justify-center pt-10">
                <Link href="https://pub-28ff1ca3d572491fb3d14dfac8b17d19.r2.dev/linux/vanto_player" target="_blank" className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">
                  <Terminal className="w-6 h-6 text-white" / aria-hidden="true">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[8px] leading-none text-gray-300">Available for</span>
                    <span className="text-[15px] leading-none font-semibold mt-0.5">Linux</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6: Web Browser Player */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            {/* Image Composition */}
            <div className="w-full h-44 relative mb-8 flex items-center justify-center">
              <div className="absolute top-4 w-[85%] h-32 rounded-lg overflow-hidden shadow-lg border-[3px] border-gray-200 bg-white">
                <div className="w-full h-3 bg-gray-100 flex items-center px-2 gap-1 border-b border-gray-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                </div>
                <Image src="/screenshots/series-screen.png" alt="Vanto Web Player Interface - Series Library" fill className="object-cover" />
              </div>
              <div className="absolute bottom-6 w-20 h-1.5 bg-gray-200 rounded-t-lg"></div>
              
              <div className="absolute left-0 top-16 w-[40%] h-20 rounded-md overflow-hidden shadow-xl border-2 border-white bg-black">
                <Image src="/screenshots/live-player.png" alt="Vanto Web Player Interface - Live Player" fill className="object-cover opacity-90" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-2 h-2 text-black fill-black ml-0.5" / aria-hidden="true">
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute bottom-4 right-2 bg-[#02376b] rounded-xl p-2 shadow-lg z-10 border-2 border-white">
                <Globe className="w-7 h-7 text-yellow-400" / aria-hidden="true">
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-0.5">Web Browser Player</h3>
              <p className="text-[12px] text-gray-800 font-bold mb-6">Download Latest Version (v2.0)</p>

              <div className="mt-auto flex justify-center pt-10">
                <Link href="https://web.vantoplayer.com" target="_blank" className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">
                  <Globe className="w-6 h-6 text-white" / aria-hidden="true">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[8px] leading-none text-gray-300">Available for</span>
                    <span className="text-[15px] leading-none font-semibold mt-0.5">Web Browsers</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6: Smart TV App */}
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
            {/* Image Composition */}
            <div className="w-full h-44 relative mb-8 flex items-center justify-center">
              <div className="absolute top-4 w-[85%] h-32 rounded-sm overflow-hidden shadow-lg border-[3px] border-black bg-black">
                <Image src="/screenshots/home-screen.png" alt="Vanto Player Android TV Interface - Home Dashboard" fill className="object-cover opacity-90" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-3 h-3 text-black fill-black ml-0.5" / aria-hidden="true">
                </div>
              </div>
              <div className="absolute bottom-6 w-12 h-1 bg-black rounded-sm"></div>
              
              <div className="absolute left-0 top-16 w-[45%] h-20 rounded-sm overflow-hidden shadow-xl border-[2px] border-black bg-black">
                <Image src="/screenshots/live-screen.png" alt="Vanto Player Android TV Interface - EPG Guide" fill className="object-cover opacity-90" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-2 h-2 text-black fill-black ml-0.5" / aria-hidden="true">
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute bottom-2 right-2 bg-[#b1aaff] rounded-xl p-2 shadow-lg z-10 border-2 border-white flex items-center gap-1">
                <div className="w-6 h-3 bg-gray-900 rounded-sm flex items-center justify-center relative">
                  <div className="w-1 h-1 bg-green-500 rounded-full absolute left-1"></div>
                </div>
                <div className="w-2 h-6 bg-gray-800 rounded-sm"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-800 mb-0.5">Smart TV App</h3>
              <p className="text-[12px] text-gray-800 font-bold mb-6">Download Latest Version (v1.0.4)</p>

              <div className="mt-auto flex justify-center pt-10">
                <Link href="https://pub-28ff1ca3d572491fb3d14dfac8b17d19.r2.dev/android/vantoplayer.apk" target="_blank" className="bg-black text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors shadow-md flex items-center justify-center gap-3 w-[200px]">
                  <Monitor className="w-6 h-6 text-white" / aria-hidden="true">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[8px] leading-none text-gray-300">Available for</span>
                    <span className="text-[15px] leading-none font-semibold mt-0.5">Smart TV</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


