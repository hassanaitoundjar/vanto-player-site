import { ShieldAlert, AlertTriangle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function FraudAwareness() {
  return (
    <section id="fraud" className="w-full bg-[#050505] py-24 border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" /> Security Advisory
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Fraud Awareness & Brand Protection
          </h2>
          <div className="w-16 h-[3px] bg-[#3b82f6] mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Protect yourself against unauthorized third-party services and clone websites pretending to be Vanto Player.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#111111] rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl space-y-8">
          
          {/* Point 1 */}
          <div className="flex gap-5 items-start">
            <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 shrink-0">
              <AlertTriangle className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1.5">Beware of Clone Websites Selling Channels</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Fraudulent websites frequently copy our brand name, graphics, and interface to sell illicit channel packages and subscription services. Vanto Player is strictly software engineering and has <strong className="text-white font-semibold">zero affiliation</strong> with any unauthorized stream seller.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex gap-5 items-start">
            <div className="p-3 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 shrink-0">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1.5">Verify Official Domain and SSL</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Ensure you are visiting our single official website: <strong className="text-green-400 font-mono">https://vantoplayer.com</strong>. We do not sell subscriptions, live channels, or video streams. Software releases and updates are only published through our official domains.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex gap-5 items-start">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <ShieldAlert className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1.5">Report Suspicious Websites</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                If you encounter a suspicious website using the Vanto Player brand or logo to sell unauthorized stream services, please{' '}
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4">
                  report it to our compliance team
                </Link>{' '}
                so our legal department can take appropriate enforcement action.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
