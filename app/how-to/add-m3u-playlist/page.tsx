import { buildMetadata } from '@/lib/siteConfig';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { HowToRelatedLinks } from '@/components/ui/HowToRelatedLinks';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';
import Image from 'next/image';

export const metadata = buildMetadata({
  title: 'How to Add an M3U Playlist to Vanto Player',
  description: 'A comprehensive guide on how to upload, manage, and sync your IPTV M3U playlists across all your devices using Vanto Player.',
  path: '/how-to/add-m3u-playlist',
});

export default function AddPlaylist() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://vantoplayer.com/' },
    { name: 'Support', item: 'https://vantoplayer.com/support' },
    { name: 'Add M3U Playlist', item: 'https://vantoplayer.com/how-to/add-m3u-playlist' },
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <BreadcrumbListLd items={breadcrumbs} />
      <BreadcrumbNav title="Add M3U Playlist" />
      <h1 className="text-4xl font-bold mb-8">How to Add an M3U Playlist to Vanto Player</h1>
      
      <div className="prose prose-lg prose-invert max-w-none text-gray-300">
        <p>
          Vanto Player does not provide any media content itself. You must provide your own M3U playlist from your service provider. This guide shows you how to link that playlist to your app.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step-by-Step Instructions</h2>
        <ol className="list-decimal pl-6 space-y-8">
          <li>
            <strong>Get Your Device Details:</strong> Open Vanto Player on your TV or mobile device. On the main screen, you will see a <strong>MAC Address</strong> (e.g., b0:c4:5c:xx:xx) and a <strong>Device Key</strong>.
            <div className="mt-4 mb-4 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
               <Image src="/screenshots/welcome-screen.png" alt="Vanto Player Welcome Screen with MAC Address and Device Key" width={1200} height={675} className="w-full object-cover" />
            </div>
          </li>
          <li>
            <strong>Visit the Activation Portal:</strong> On your computer or smartphone, go to our <a href="/activation" className="text-blue-400 hover:underline">Manage Playlists</a> page.
          </li>
          <li>
            <strong>Login:</strong> Enter the MAC Address and Device Key exactly as they appear on your TV screen. Complete the security captcha and click Login.
          </li>
          <li>
            <strong>Add Playlist:</strong> Once logged in, click "Add Playlist".
          </li>
          <li>
            <strong>Enter Playlist Details:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1 mb-4">
              <li><strong>Playlist Name:</strong> Give it a recognizable name (e.g., "My Live TV").</li>
              <li><strong>Playlist URL:</strong> Paste the M3U link provided by your IPTV service.</li>
            </ul>
            <div className="mt-4 mb-4 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
               <Image src="/screenshots/logi-m3u-screen.png" alt="Adding an M3U playlist via Vanto Player login screen" width={1200} height={675} className="w-full object-cover" />
            </div>
          </li>
          <li>
            <strong>Save and Sync:</strong> Click Save. Then, go back to your TV, restart the Vanto Player app, and your channels will begin loading automatically!
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
               <Image src="/screenshots/home-screen.png" alt="Vanto Player Home Screen after syncing playlist" width={1200} height={675} className="w-full object-cover" />
            </div>
          </li>
        </ol>
      </div>
      <HowToRelatedLinks />
    </div>
  );
}
