import type { Metadata } from 'next';
import DownloadSection from '@/components/sections/Download';
import CompatibleDevices from '@/components/sections/CompatibleDevices';
import FAQSection from '@/components/sections/FAQ';
import { Tv, Monitor, Search, Download, PlayCircle, Globe, CheckCircle2, Hash } from 'lucide-react';
import { buildMetadata } from '@/lib/siteConfig';
import { SoftwareApplicationLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'Download Vanto Player App | APK, Smart TV, Web & Windows',
  description:
    'Download the latest version of Vanto Player for Android, Smart TV, Windows, Mac, or Linux. Install via Downloader code or direct APK download for a seamless IPTV media experience.',
  path: '/download',
});

export default function DownloadPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#f8f9fa]">
      <SoftwareApplicationLd />
      {/* SEO Optimized Hero Section */}
      <section className="w-full bg-white pt-32 pb-12 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-8 xl:px-12 text-center max-w-4xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Download Vanto Player App
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Experience the most powerful and beautifully designed media player available. Available for Android, Smart TVs, and directly in your browser. Choose your platform below to get started.
          </p>
        </div>
      </section>

      {/* Main Download Component */}
      <DownloadSection />

      {/* Modern Installation Guide */}
      <section className="w-full bg-white py-24 border-t border-gray-100 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#3b82f6]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-8 xl:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              How to Install Vanto Player
            </h2>
            <div className="w-16 h-[4px] bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
              Follow these simple steps to get Vanto Player running on your favorite device in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* Android TV / Firestick Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <Tv className="w-7 h-7" / aria-hidden="true">
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Android TV & Firestick</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <Search className="w-4 h-4 text-gray-300" / aria-hidden="true"> Get Downloader
                    </h4>
                    <p className="text-gray-600 font-medium">Install the <strong>Downloader</strong> app from your device's native App Store.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <Hash className="w-4 h-4 text-gray-300" / aria-hidden="true"> Enter Quick Code
                    </h4>
                    <p className="text-gray-600 font-medium">Open Downloader and type our quick code: <span className="inline-block bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-md border border-blue-100 ml-1">7392829</span></p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <Download className="w-4 h-4 text-gray-300" / aria-hidden="true"> Download & Install
                    </h4>
                    <p className="text-gray-600 font-medium">Click <strong>Go</strong> to download the APK. Follow the on-screen prompts to install.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">4</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <PlayCircle className="w-4 h-4 text-gray-300" / aria-hidden="true"> Open & Stream
                    </h4>
                    <p className="text-gray-600 font-medium">Launch Vanto Player, add your credentials, and start streaming instantly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Player Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-purple-200 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shadow-sm">
                  <Monitor className="w-7 h-7" / aria-hidden="true">
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Windows, Mac & iOS</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">1</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-300" / aria-hidden="true"> No Installation Required
                    </h4>
                    <p className="text-gray-600 font-medium">Vanto Player works directly in your web browser. No need to download any apps.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-gray-300" / aria-hidden="true"> Access Web Player
                    </h4>
                    <p className="text-gray-600 font-medium">Simply navigate to the <a href="https://web.vantoplayer.com" target="_blank" className="text-purple-600 font-bold hover:underline">Vanto Web Player</a> using Chrome, Safari, or Edge.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gray-300" / aria-hidden="true"> Login & Play
                    </h4>
                    <p className="text-gray-600 font-medium">Enter your playlist details and instantly access your content on any screen size.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <CompatibleDevices />

      {/* FAQ specific to downloads could be used, or just the standard FAQ */}
      <FAQSection />
    </div>
  );
}
