import { buildMetadata } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Privacy Policy | Vanto Player',
  description: 'Read the Privacy Policy for Vanto Player to understand how we handle your data, protect user privacy, and process local playback settings.',
  path: '/privacy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      {/* Hero */}
      <section className="w-full pt-32 pb-16 px-6 md:px-8 xl:px-12 border-b border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            User Privacy First
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-400 font-medium text-sm">Last updated: November 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 px-6 md:px-8 xl:px-12">
        <div className="container mx-auto max-w-4xl text-gray-300 leading-relaxed space-y-8 bg-[#111111] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Overview & Core Privacy Principles</h2>
            <p>
              Vanto Player (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) prioritizes user privacy. Vanto Player is designed from the foundation up as client-side playback software. We do not maintain user accounts that track your viewing habits, and we do not log, upload, or analyze the playlists or video files you play through the Application.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information Handled Strictly Locally</h2>
            <p className="mb-4">
              To operate effectively as a multimedia player, the Application stores certain settings strictly on your local device:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li><strong>Playlist &amp; API Configuration:</strong> The M3U URLs, Xtream Codes credentials, or local file paths you enter are saved directly in your device&apos;s encrypted local storage or private application sandbox. This information is never transmitted to our servers.</li>
              <li><strong>Playback Preferences:</strong> Audio track selections, subtitle font preferences, aspect ratio overrides, and volume levels are kept locally on your device.</li>
              <li><strong>Parental Control PINs:</strong> Your 4-digit security PIN is stored strictly in your local device settings and is never synchronized to cloud databases.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Information Collected on the Website</h2>
            <p className="mb-4">
              When accessing our website (<strong className="text-white">vantoplayer.com</strong>), limited standard web server information may be collected:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li><strong>Web Log Information:</strong> Anonymized IP addresses, browser types, referral URLs, and access timestamps are collected by standard web servers for security diagnostics and DDoS prevention.</li>
              <li><strong>Support Inquiries:</strong> If you contact us via email at <code>support@vantoplayer.com</code>, we retain your email address and message contents solely to respond to your technical support inquiry.</li>
              <li><strong>Cookies &amp; Consent:</strong> We use essential cookies to maintain theme preferences and consent preferences. Where third-party analytics or advertising networks (such as Google AdSense) operate, they may use cookies in compliance with regional privacy frameworks (including GDPR, UK GDPR, and CCPA).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Device Hardware Identifiers (MAC Address)</h2>
            <p>
              For device license verification and activation on Smart TVs, the Application reads the device&apos;s network hardware identifier (MAC address). This identifier is used exclusively to validate whether an active evaluation period or device software license exists for that specific hardware unit. It is not connected to personal identities or viewing histories.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Services &amp; Network Streams</h2>
            <p>
              When playing a network stream, your device establishes a direct network connection between your media hardware and the external media server hosting the stream. Vanto Player acts solely as the playback client rendering that stream and does not proxy, intercept, or inspect the media packets.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights Under GDPR &amp; CCPA</h2>
            <p className="mb-4">Depending on your geographic location, you may have statutory privacy rights:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>The right to know what personal data is held about you.</li>
              <li>The right to request deletion of support communications.</li>
              <li>The right to opt out of third-party advertising cookies via our consent management controls.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact the Privacy Team</h2>
            <p>
              If you have any questions or data requests regarding this Privacy Policy, please email our privacy officer at{' '}
              <a href="mailto:support@vantoplayer.com" className="text-blue-400 hover:text-blue-300 font-medium">
                support@vantoplayer.com
              </a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
