import { buildMetadata } from '@/lib/siteConfig';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { HowToRelatedLinks } from '@/components/ui/HowToRelatedLinks';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'How to Fix Playlist Not Loading or Buffering',
  description: 'Troubleshooting guide for when your personal playlist freezes, buffers, or fails to load in Vanto Player.',
  path: '/how-to/fix-playlist-not-loading',
});

export default function FixPlaylist() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://vantoplayer.com/' },
    { name: 'Support', item: 'https://vantoplayer.com/support' },
    { name: 'Fix Playlist Not Loading', item: 'https://vantoplayer.com/how-to/fix-playlist-not-loading' },
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <BreadcrumbListLd items={breadcrumbs} />
      <BreadcrumbNav title="Fix Playlist Not Loading" />
      <h1 className="text-4xl font-bold mb-8">How to Fix Playlist Not Loading or Buffering</h1>
      
      <div className="prose prose-lg prose-invert max-w-none text-gray-300">
        <p>
          If your playlist won&apos;t open, freezes constantly, or displays a &quot;Playback Error&quot;, the issue is almost always related to the playlist URL, network throughput, or remote server availability. 
          <em>Vanto Player is purely a client-side media player; we do not host, supply, or control the streams.</em>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Verify Your Playlist Link</h2>
        <p>
          Ensure your playlist URL or server credentials are valid and active. You can verify your M3U link on your computer in an alternative media tool like VLC Media Player. If the stream fails across all tools, the provider&apos;s server is offline or your access has expired.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Check Network Stability and Bandwidth</h2>
        <p>
          HD and 4K media streams require consistent download bandwidth and low latency:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Ensure you have at least 25 Mbps stable download speed for 1080p and 50+ Mbps for 4K.</li>
          <li>If using Wi-Fi, ensure your TV is connected to the 5 GHz band rather than 2.4 GHz.</li>
          <li>For optimal results, connect your Smart TV or streaming box directly using a Cat6 Ethernet cable.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Clear Application Cache</h2>
        <p>
          Over time, cached program guides or playlist indices can become outdated. Open your TV&apos;s operating system settings, locate Vanto Player under Applications, and select <strong>&quot;Clear Cache&quot;</strong>. Restart the application to reload fresh stream tokens.
        </p>
      </div>
      <HowToRelatedLinks />
    </div>
  );
}
