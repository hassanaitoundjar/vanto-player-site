import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Vanto Player',
  description: 'Read the Privacy Policy for Vanto Player to understand how we handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#f8f9fa]">
      {/* Legal Hero */}
      <section className="w-full pt-32 pb-16 px-6 md:px-8 xl:px-12 border-b border-gray-100 bg-white">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-medium">Last updated: July 2026</p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="w-full py-16 px-6 md:px-8 xl:px-12 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-4xl text-gray-600 leading-relaxed space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              Vanto Player respects your privacy. As a standard media player, we collect minimal data required to provide our services:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Device Information:</strong> We collect your device's MAC address and IP address solely for the purpose of device activation and to prevent abuse of our licensing system.</li>
              <li><strong>Usage Data:</strong> We may collect anonymous crash reports and analytical data to improve the Application's stability and performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What We Do NOT Collect</h2>
            <p>
              We <strong className="text-gray-900">do not</strong> collect, monitor, or store any information regarding the playlists you add, the media you play, or your viewing habits. Your media content is processed entirely locally on your device or routed directly from your third-party provider.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>
              The minimal information we collect (like MAC addresses) is used exclusively for:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Managing your app activation status.</li>
              <li>Providing customer support when you reach out to us with your device ID.</li>
              <li>Ensuring the security and integrity of our licensing system.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Services</h2>
            <p>
              Vanto Player allows you to connect to third-party media servers via playlists. We are not responsible for the privacy practices or the content of these third-party providers. We encourage you to read the privacy policies of any third-party services you use in conjunction with our app.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:support@vantoplayer.com" className="text-[#3b82f6] hover:underline font-medium">support@vantoplayer.com</a>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
