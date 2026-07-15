import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Vanto Player',
  description: 'Read the Terms of Service for using Vanto Player. Vanto Player is a media player and does not provide any media content or playlists.',
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#f8f9fa]">
      {/* Legal Hero */}
      <section className="w-full pt-32 pb-16 px-6 md:px-8 xl:px-12 border-b border-gray-100 bg-white">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-gray-500 font-medium">Last updated: July 2026</p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="w-full py-16 px-6 md:px-8 xl:px-12 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-4xl text-gray-600 leading-relaxed space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Vanto Player ("the Application"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Application's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Nature of the Application</h2>
            <p className="mb-4">
              <strong className="text-gray-900">CRITICAL NOTICE:</strong> Vanto Player is strictly a media player application. We do not provide, host, or supply any media content, playlists, or channels. The Application is empty upon download.
            </p>
            <p>
              The user is solely responsible for providing their own content (via local storage or personal playlists). The developers of Vanto Player are not responsible for the content that users choose to stream or play through the Application.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You must have the legal right to access and play the content you load into the Application.</li>
              <li>You agree not to use the Application for any unlawful purposes or to stream copyrighted material without proper authorization.</li>
              <li>You are responsible for any subscription fees or costs associated with the third-party playlists you use.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Device Activation</h2>
            <p>
              Certain features of Vanto Player may require a one-time device activation fee. This fee is for the software license only and <strong className="text-gray-900">DOES NOT</strong> include any media content, channels, or VODs. The activation binds to your device's unique MAC address and is non-transferable between different devices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer of Warranties</h2>
            <p>
              The Application is provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Application will always be safe, secure, or error-free.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the Application following any such modification constitutes your agreement to follow and be bound by the terms as modified.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
