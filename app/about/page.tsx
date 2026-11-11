import { buildMetadata } from '@/lib/siteConfig';
import { Cpu, ShieldCheck, Tv, Users, HeartHandshake, Mail, ArrowRight, Code } from 'lucide-react';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'About Vanto Player | Engineering & Mission',
  description: 'Learn about the team behind Vanto Player, our multimedia playback technology, engineering principles, and commitment to user privacy.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      {/* Hero */}
      <section className="relative w-full pt-32 pb-20 px-6 md:px-8 xl:px-12 overflow-hidden bg-[#0a0a0a] border-b border-white/5">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#60a5fa]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Code className="w-3.5 h-3.5" aria-hidden="true" /> Engineering &amp; Innovation
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Vanto Player</span>
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Building high-performance, user-centric playback software for modern screens and living room experiences.
          </p>
        </div>
      </section>

      {/* Main Story & Architecture */}
      <section className="w-full py-20 px-6 md:px-8 xl:px-12">
        <div className="container mx-auto max-w-4xl space-y-16">
          
          {/* Who We Are */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
              <Users className="w-7 h-7 text-blue-400" aria-hidden="true" /> Who We Are
            </h2>
            <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
              <p>
                Vanto Player is developed by an independent team of software engineers passionate about video decoding architectures, streaming protocols, and intuitive 10-foot television user interfaces.
              </p>
              <p>
                We recognized that while high-speed internet and 4K displays have become ubiquitous, many digital media players remain sluggish, cluttered with intrusive advertisements, or technically unreliable on television hardware. Vanto Player was engineered to solve this problem by delivering a lean, hardware-accelerated playback shell that puts users entirely in control of their media.
              </p>
            </div>
          </div>

          {/* Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20">
                <Cpu className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hardware Performance</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We leverage native GPU decoders (including MediaCodec on Android and WebGL/MSE on browsers) to achieve fluid 60 FPS playback with minimal battery and CPU overhead.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center mb-6 border border-green-500/20">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Zero Content, Zero Piracy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Vanto Player is purely client-side software. We do not provide, host, or broker streams. We strictly adhere to copyright laws and empower users to play their own legitimate playlists.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20">
                <Tv className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cross-Platform Uniformity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                From Android TV and Amazon Firestick to Samsung Tizen, LG webOS, Linux, and Web, our interface maintains consistent navigation conventions and muscle memory.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 border border-amber-500/20">
                <HeartHandshake className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Privacy by Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We do not track, profile, or sell user playback histories. Credentials and playlist URLs are stored strictly on your local device hardware.
              </p>
            </div>
          </div>

          {/* Supported Platforms Overview */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Supported Platforms
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Vanto Player is currently distributed across the following ecosystems:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-white font-bold block text-sm">Android TV</span>
                <span className="text-blue-400 text-xs font-mono">v5.0 APK</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-white font-bold block text-sm">Fire TV</span>
                <span className="text-blue-400 text-xs font-mono">Code 7392829</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-white font-bold block text-sm">Smart TVs</span>
                <span className="text-blue-400 text-xs font-mono">Samsung / LG</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-white font-bold block text-sm">Web &amp; Linux</span>
                <span className="text-blue-400 text-xs font-mono">HTML5 / AppImage</span>
              </div>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-3xl p-8 md:p-10 text-center">
            <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Connect with Our Team</h3>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-6">
              For technical inquiries, media questions, or partnerships, please reach out directly:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:support@vantoplayer.com" 
                className="px-6 py-3 bg-[#3b82f6] text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors text-sm shadow-lg shadow-blue-500/20"
              >
                support@vantoplayer.com
              </a>
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-white/10 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm flex items-center gap-2"
              >
                Support Center <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

