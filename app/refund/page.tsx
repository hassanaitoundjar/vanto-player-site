import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Vanto Player',
  description: 'Read the Refund Policy for Vanto Player. Understand the terms under which refunds are provided.',
  alternates: {
    canonical: 'https://vantoplayer.com/refund',
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#f8f9fa]">
      {/* Legal Hero */}
      <section className="w-full pt-32 pb-16 px-6 md:px-8 xl:px-12 border-b border-gray-100 bg-white">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Refund Policy
          </h1>
          <p className="text-gray-500 font-medium">Last updated: July 2026</p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="w-full py-16 px-6 md:px-8 xl:px-12 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-4xl text-gray-600 leading-relaxed space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Important Disclaimer Before Buying</h2>
            <p className="text-gray-700">
              Vanto Player is a Media Player. It does <strong className="text-gray-900">NOT</strong> include any content, channels, playlists, or VODs. By activating the application, you agree that you are paying solely for the media player software, and that you have your own media to play.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Non-Refundable Scenarios</h2>
            <p className="mb-4">We strictly do not issue refunds for the following reasons:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>"I thought channels were included."</strong> - We clearly state across the website and within the app that no content is provided.</li>
              <li><strong>"My playlist isn't working."</strong> - We are not responsible for third-party playlists or server issues from your content provider.</li>
              <li><strong>"I changed my mind / I don't need it anymore."</strong> - As this is a digital software license, all sales are final.</li>
              <li><strong>"I bought it for the wrong MAC address."</strong> - Please ensure you type your MAC address correctly during activation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligible Scenarios for Refunds</h2>
            <p>
              Refunds will only be considered under the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>You made a duplicate payment by mistake.</li>
              <li>A technical error on our payment gateway caused you to be charged without receiving activation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Requesting a Refund</h2>
            <p>
              If you meet the eligibility criteria, you must contact our support team within 7 days of the transaction. Please provide your MAC address, transaction ID, and the reason for the request.
            </p>
            <p className="mt-4">
              Contact Email: <a href="mailto:support@vantoplayer.com" className="text-[#3b82f6] hover:underline font-medium">support@vantoplayer.com</a>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
