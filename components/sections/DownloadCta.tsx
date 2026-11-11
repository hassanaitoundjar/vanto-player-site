import { Download, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function DownloadCta() {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-indigo-900/20 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 xl:px-12 relative z-10 max-w-5xl">
        <div className="bg-gradient-to-b from-[#151c2e] to-[#0f1422] border border-blue-500/30 rounded-3xl p-8 md:p-14 text-center shadow-2xl relative overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
            Start Streaming Today
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Upgrade Your Playback Experience?
          </h2>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Download Vanto Player on your Android TV, Smart TV, or launch in your browser. Fast setup, responsive navigation, and smooth 4K decoding.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/download" 
              className="w-full sm:w-auto px-8 py-4 bg-[#3b82f6] text-white font-bold rounded-xl hover:bg-blue-600 transition-all duration-300 text-sm md:text-base shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Download Free Player
            </Link>
            <Link 
              href="https://web.vantoplayer.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2"
            >
              <Globe className="w-5 h-5 text-blue-400" aria-hidden="true" />
              Launch Web App
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-400">
            <span>✓ 7-Day Evaluation Trial</span>
            <span>✓ No Adware or Spyware</span>
            <span>✓ Zero Content Bundled</span>
          </div>

        </div>
      </div>
    </section>
  );
}

