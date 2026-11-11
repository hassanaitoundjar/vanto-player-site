import { buildMetadata } from '@/lib/siteConfig';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Terms of Service | Vanto Player',
  description: 'Read the Terms of Service for using Vanto Player. Vanto Player is a media player and does not provide any media content or playlists.',
  path: '/terms',
});

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      {/* Legal Hero */}
      <section className="w-full pt-32 pb-16 px-6 md:px-8 xl:px-12 border-b border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Legal Terms
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-gray-400 font-medium text-sm">Last updated: November 2026</p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="w-full py-16 px-6 md:px-8 xl:px-12">
        <div className="container mx-auto max-w-4xl text-gray-300 leading-relaxed space-y-8 bg-[#111111] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, accessing, or using Vanto Player (&quot;the Application&quot; or &quot;the Software&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the Application.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-500/10 border border-blue-500/30">
            <h2 className="text-xl font-bold text-blue-400 mb-2">2. Nature of the Application (Zero-Content Notice)</h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              <strong className="text-white font-semibold">CRITICAL NOTICE:</strong> Vanto Player is strictly an independent multimedia player application. We do not provide, host, sell, bundle, or distribute any media content, television channels, broadcasts, video-on-demand files, or playlists. The Application is completely empty upon initial installation.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-200 mt-3">
              Users are exclusively responsible for obtaining their own legitimate streams, personal video files, or playlists from authorized service providers. The developers, distributors, and administrators of Vanto Player have no affiliation with any playlist providers and exercise no control over the content users choose to play.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Permitted Use & User Obligations</h2>
            <p className="mb-4">By utilizing Vanto Player, you agree to the following commitments:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>You possess all necessary legal rights, licenses, or authorizations to access and stream the media files or playlists loaded into the Application.</li>
              <li>You will not use the Application to distribute, stream, or facilitate access to copyrighted materials without the permission of the copyright holder.</li>
              <li>You will not reverse engineer, decompile, disassemble, or circumvent any security features of the Application.</li>
              <li>You will not attempt to utilize the Application to breach local, state, national, or international communications laws.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Device Evaluation & Software Licensing</h2>
            <p className="mb-3">
              Vanto Player provides a complimentary 7-day trial period on eligible devices to allow users to verify hardware performance, user interface suitability, and codec compatibility with their personal media sources.
            </p>
            <p>
              Following the trial period, full software functionality may require a one-time device software license. This license is strictly for the software player itself and <strong className="text-white">DOES NOT</strong> grant access to any media, streams, or content. Device licenses are bound to the device&apos;s unique hardware MAC address.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer of Warranties</h2>
            <p>
              The Application is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis, without warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted streaming performance. We do not guarantee that third-party playlists or server links will operate without interruption or buffering.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Vanto Player and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of your use or inability to use the Software, or resulting from unauthorized content accessed through user-provided links.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms of Service, please contact us at{' '}
              <a href="mailto:support@vantoplayer.com" className="text-blue-400 hover:text-blue-300 font-medium">
                support@vantoplayer.com
              </a>{' '}
              or visit our <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-medium">Contact Page</Link>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
