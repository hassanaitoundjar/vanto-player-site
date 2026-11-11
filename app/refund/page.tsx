import { buildMetadata } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'Refund Policy | Vanto Player',
  description: 'Read the Refund Policy for Vanto Player software licenses. Understand the 7-day evaluation period and refund eligibility criteria.',
  path: '/refund',
});

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      {/* Hero */}
      <section className="w-full pt-32 pb-16 px-6 md:px-8 xl:px-12 border-b border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            License &amp; Billing Policy
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Refund Policy
          </h1>
          <p className="text-gray-400 font-medium text-sm">Last updated: November 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 px-6 md:px-8 xl:px-12">
        <div className="container mx-auto max-w-4xl text-gray-300 leading-relaxed space-y-8 bg-[#111111] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-blue-400 mb-2">Try Before You Buy: 7-Day Free Evaluation</h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              We provide a full, unrestricted 7-day trial period on all supported devices upon first installation. We strongly encourage every user to thoroughly test audio/video playback, codec compatibility, remote control responsiveness, and playlist loading with their personal media sources before purchasing a device software license.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Scope of the Software License</h2>
            <p className="mb-3">
              Vanto Player is an empty multimedia playback application. When you purchase an activation license, you are paying strictly for the software player itself.
            </p>
            <p className="text-gray-400 text-sm">
              The software license <strong className="text-white">DOES NOT</strong> include, grant, or imply access to any TV channels, broadcasts, playlists, or video-on-demand files.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Non-Refundable Scenarios</h2>
            <p className="mb-4">Because the full 7-day evaluation period allows thorough pre-purchase verification, refunds are strictly not granted under the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2.5 text-gray-300 ml-2">
              <li><strong>Misunderstanding Content Availability:</strong> Requests claiming &quot;I thought channels were included&quot; or &quot;There are no channels in the app&quot;. We explicitly state across our website, documentation, and in-app onboarding that no channels are supplied.</li>
              <li><strong>External Playlist / Server Outages:</strong> Inability to play streams caused by third-party playlist provider server downtime, expired subscriptions, or stream geo-restrictions.</li>
              <li><strong>Change of Mind:</strong> General dissatisfaction after the trial period has elapsed and the digital license key has been bound to the device MAC address.</li>
              <li><strong>Typographical Error in Hardware Address:</strong> Entering an incorrect MAC address without contacting support within 24 hours of purchase.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. Eligible Scenarios for Refunds</h2>
            <p className="mb-4">Refunds will be processed in full under the following verified technical conditions:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li><strong>Duplicate Transaction:</strong> You were billed more than once for the same device MAC address due to a payment gateway processing error.</li>
              <li><strong>Failed Activation:</strong> You were successfully charged but our licensing server failed to activate your device hardware key, and our support team is unable to resolve the activation within 48 hours.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. How to Submit a Refund Request</h2>
            <p className="mb-4">
              To request a refund under the eligible conditions, please email our billing department within 14 calendar days of your transaction:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-sm space-y-1.5 font-mono">
              <p>Email: <a href="mailto:support@vantoplayer.com" className="text-blue-400 font-sans">support@vantoplayer.com</a></p>
              <p>Subject: Refund Request - [Your Order / Transaction ID]</p>
              <p>Required Details: Device MAC Address, Payment Receipt, Description of Issue</p>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Eligible refunds are credited back to the original payment method within 5–10 business days depending on your card issuer.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
