import { buildMetadata } from '@/lib/siteConfig';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { HowToRelatedLinks } from '@/components/ui/HowToRelatedLinks';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'How to Fix Playlist Not Loading or Buffering',
  description: 'Troubleshooting tips for when your IPTV playlist freezes, buffers, or fails to load in Vanto Player.',
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
          If your playlist won't open, freezes constantly, or gives a "Playback Error", the issue is almost always related to the playlist itself, your internet connection, or an ISP block. 
          <em>Vanto Player is purely a media player; we do not host or control the streams.</em>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Verify Your Playlist Link</h2>
        <p>
          Make sure your playlist is active. You can test your M3U link in a program like VLC Media Player on your computer. If it doesn't work in VLC, it means the provider's server is down or your subscription has expired.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Check for ISP Blocks (Use a VPN)</h2>
        <p>
          Many Internet Service Providers (ISPs) actively block or throttle IPTV traffic, especially during live sporting events. If your playlist works on your mobile data but not your home Wi-Fi, your ISP is blocking it. 
          <strong>Solution:</strong> Use a reputable VPN on your router or device to bypass these restrictions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Network Speed and Stability</h2>
        <p>
          HD and 4K streams require a stable internet connection.
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Ensure you have at least 25 Mbps download speed.</li>
            <li>If using Wi-Fi, move your router closer to the TV or use a 5GHz band.</li>
            <li>For the best experience, connect your TV directly to the router using an Ethernet cable.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Clear App Cache</h2>
        <p>
          Sometimes the app cache becomes full or corrupted. Go to your TV's settings, find the Vanto Player app, and select <strong>"Clear Cache"</strong> (do not clear data, or you will need to re-login). Restart the app afterward.
        </p>
      </div>
      <HowToRelatedLinks />
    </div>
  );
}
