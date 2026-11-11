import DownloadSection from '@/components/sections/Download';
import CompatibleDevices from '@/components/sections/CompatibleDevices';
import FAQSection from '@/components/sections/FAQ';
import { Tv, Monitor, Search, Download, PlayCircle, Globe, CheckCircle2, Hash } from 'lucide-react';
import { buildMetadata } from '@/lib/siteConfig';
import { SoftwareApplicationLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'Download Vanto Player App | APK, Smart TV, Web & Linux',
  description:
    'Download the official Vanto Player app for Android TV, Amazon Firestick, Smart TVs, Linux, and Web browsers. Fast installation with Downloader code 7392829.',
  path: '/download',
});

export default function DownloadPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      <SoftwareApplicationLd />
      
      {/* Hero Section */}
      <section className="w-full bg-[#0a0a0a] pt-32 pb-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#60a5fa]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-8 xl:px-12 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Official Software Distribution
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Download Vanto Player
          </h1>
          <p className="text-base md:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Install the latest version of Vanto Player across Android TV, Amazon Fire TV, Smart TVs, Linux, or launch immediately in your web browser.
          </p>
        </div>
      </section>

      {/* Main Download Component */}
      <DownloadSection />

      {/* Modern Installation Walkthrough */}
      <section className="w-full bg-[#050505] py-24 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 xl:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Quick Installation Instructions
            </h2>
            <div className="w-16 h-[3px] bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Get up and running in less than two minutes using our verified quick codes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            
            {/* Android TV / Firestick Card */}
            <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-2xl flex items-center justify-center shadow-sm">
                  <Tv className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Android TV &amp; Firestick</h3>
                  <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Via Downloader App</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">1</div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                      <Search className="w-4 h-4 text-blue-400" aria-hidden="true" /> Install Downloader
                    </h4>
                    <p className="text-gray-300 text-sm">Search for and install the free <strong>Downloader by AFTVnews</strong> app from your TV&apos;s native app store.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">2</div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                      <Hash className="w-4 h-4 text-blue-400" aria-hidden="true" /> Enter Quick Code
                    </h4>
                    <p className="text-gray-300 text-sm">Open Downloader, enter numeric code <strong className="text-white font-mono bg-white/10 px-2 py-0.5 rounded border border-white/10">7392829</strong> in the URL bar, and click <strong>Go</strong>.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">3</div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                      <Download className="w-4 h-4 text-blue-400" aria-hidden="true" /> Install the APK
                    </h4>
                    <p className="text-gray-300 text-sm">Once the download completes, select <strong>Install</strong> and grant standard storage permissions.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">4</div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                      <PlayCircle className="w-4 h-4 text-blue-400" aria-hidden="true" /> Launch &amp; Add Playlist
                    </h4>
                    <p className="text-gray-300 text-sm">Open Vanto Player, choose Xtream Codes API or M3U, and connect your authorized media source.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Player Card */}
            <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-2xl flex items-center justify-center shadow-sm">
                  <Monitor className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Desktop &amp; Web Browser</h3>
                  <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Zero Download Required</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">1</div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-purple-400" aria-hidden="true" /> Open Supported Browser
                    </h4>
                    <p className="text-gray-300 text-sm">Launch any modern HTML5 browser (Google Chrome, Apple Safari, Firefox, or Microsoft Edge).</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">2</div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                      <Monitor className="w-4 h-4 text-purple-400" aria-hidden="true" /> Navigate to Web App
                    </h4>
                    <p className="text-gray-300 text-sm">Navigate directly to <a href="https://web.vantoplayer.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 font-bold hover:underline">web.vantoplayer.com</a> to load the web interface.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">3</div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" aria-hidden="true" /> Stream Directly
                    </h4>
                    <p className="text-gray-300 text-sm">Your playlist configuration is saved securely in your browser&apos;s local storage with hardware video acceleration.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <CompatibleDevices />

      {/* FAQ */}
      <FAQSection />
    </div>
  );
}
