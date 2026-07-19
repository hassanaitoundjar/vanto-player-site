import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Manage Your Playlist',
  description:
    'Login to activate your device and manage your IPTV playlists with Vanto Player. One activation unlocks unlimited devices across Android, Smart TV, and Web.',
  path: '/activation',
});

export default function ActivationPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center w-full bg-[#030303] overflow-hidden pt-24 pb-12">
      
      {/* Abstract Modern Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#3b82f6]/20 rounded-full blur-[150px] opacity-70 animate-pulse-slow" />
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] bg-indigo-600/20 rounded-full blur-[150px] opacity-60" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 w-full max-w-6xl mx-auto">
          
          {/* Left Content - Typography & Branding */}
          <div className="text-center lg:text-left w-full max-w-lg lg:mt-0 mt-8">
           
            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight leading-tight">
              Manage Your <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Digital Playlist</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
              Unlock the full potential of your media. Activate your device once and seamlessly sync your content across multiple platforms with Vanto Player.
            </p>

            {/* Overlapping App Avatars (Modern replacement for the 3 app boxes) */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#030303] bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg z-30">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#030303] bg-gray-800 flex items-center justify-center shadow-lg z-20">
                  <span className="text-white font-semibold text-[10px]">TV</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#030303] bg-gray-700 flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-semibold text-[10px]">PRO</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 font-medium">
                1 Activation • <span className="text-gray-300">Unlimited Devices</span>
              </p>
            </div>
          </div>

          {/* Right Content - Modern Glassmorphic Form */}
          <div className="w-full max-w-md relative group perspective">
            {/* Soft glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
              
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-sm text-gray-400">Enter your device details to continue</p>
              </div>

              <form className="space-y-5">
                
                {/* Mac Address */}
                <div className="space-y-2">
                  <label htmlFor="macAddress" className="text-gray-300 text-xs font-semibold ml-1 uppercase tracking-wider">
                    Mac Address <span className="text-blue-500">*</span>
                  </label>
                  <div className="relative">
                    <input 
                      id="macAddress"
                      type="text" 
                      placeholder="b0:c4:5c:68:a0:57"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder:text-gray-600 font-mono text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Device Key */}
                <div className="space-y-2">
                  <label htmlFor="deviceKey" className="text-gray-300 text-xs font-semibold ml-1 uppercase tracking-wider flex justify-between">
                    <span>Device Key <span className="text-blue-500">*</span></span>
                  </label>
                  <div className="relative">
                    <input 
                      id="deviceKey"
                      type="password" 
                      placeholder="••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all placeholder:text-gray-600 text-lg tracking-[0.3em]"
                      required
                    />
                  </div>
                </div>

                {/* Modern Captcha */}
                <div className="pt-2">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black/40 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:border-blue-500/50 border border-transparent transition-colors">
                        <span className="text-lg font-bold text-gray-300 italic tracking-widest drop-shadow-md">ZV</span>
                        <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
                      </div>
                      <input 
                        aria-label="Captcha Code"
                        type="text" 
                        placeholder="Enter code"
                        className="bg-transparent border-none text-white outline-none w-24 text-sm font-mono placeholder:text-gray-600"
                        required
                      />
                    </div>
                    <button type="button" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all" title="Refresh Captcha">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all duration-300 mt-4 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] tracking-wide active:scale-[0.98]"
                >
                  LOGIN SECURELY
                </button>

              </form>

              <p className="text-center text-xs text-gray-500 mt-6">
                By logging in, you agree to our <Link href="/terms" className="text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-2">Terms of Service</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
