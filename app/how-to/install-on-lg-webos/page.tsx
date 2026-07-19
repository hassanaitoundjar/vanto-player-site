import { buildMetadata } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'How to Install Vanto Player on LG webOS',
  description: 'Learn how to easily install Vanto Player on your LG webOS Smart TV to enjoy high-quality IPTV streaming without buffering.',
  path: '/how-to/install-on-lg-webos',
});

export default function InstallLGWebOS() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">How to Install Vanto Player on LG webOS</h1>
      
      <div className="prose prose-lg prose-invert max-w-none text-gray-300">
        <p>
          Vanto Player is fully compatible with LG Smart TVs running webOS. Follow this quick guide to get started.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Installation Steps</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Access the Home Menu:</strong> Press the Home button on your Magic Remote.</li>
          <li><strong>Open LG Content Store:</strong> Scroll through the menu and select the "LG Content Store" or "Apps" icon.</li>
          <li><strong>Search:</strong> Click the Search icon (magnifying glass) and type "Vanto Player".</li>
          <li><strong>Install:</strong> Select the Vanto Player app and click the "Install" button.</li>
          <li><strong>Launch:</strong> Once the download is complete, click "Launch" to open the player.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">What's Next?</h2>
        <p>
          When you first launch the app, you'll see your device's MAC address and Device Key. Make a note of these details. You can now proceed to our <a href="/activation" className="text-blue-400 hover:underline">activation page</a> to link your M3U playlist to your TV.
        </p>
      </div>
    </div>
  );
}
