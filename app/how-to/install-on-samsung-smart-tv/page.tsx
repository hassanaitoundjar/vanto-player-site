import { buildMetadata } from '@/lib/siteConfig';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { HowToRelatedLinks } from '@/components/ui/HowToRelatedLinks';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'How to Install Vanto Player on Samsung Smart TV',
  description: 'Step-by-step guide to installing Vanto Player on your Samsung Tizen Smart TV to play M3U playlists and video files.',
  path: '/how-to/install-on-samsung-smart-tv',
});

export default function InstallSamsungTV() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://vantoplayer.com/' },
    { name: 'Support', item: 'https://vantoplayer.com/support' },
    { name: 'Install on Samsung Smart TV', item: 'https://vantoplayer.com/how-to/install-on-samsung-smart-tv' },
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <BreadcrumbListLd items={breadcrumbs} />
      <BreadcrumbNav title="Install on Samsung Smart TV" />
      <h1 className="text-4xl font-bold mb-8">How to Install Vanto Player on Samsung Smart TV</h1>
      
      <div className="prose prose-lg prose-invert max-w-none text-gray-300">
        <p>
          Installing Vanto Player on your Samsung Smart TV (Tizen OS 2018 and newer) is simple and quick. Follow these steps to install the player directly from the Samsung Apps ecosystem.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step-by-Step Installation Guide</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Turn on your TV:</strong> Ensure your Samsung Smart TV is connected to your local network via Wi-Fi or Ethernet.</li>
          <li><strong>Open the Smart Hub:</strong> Press the Home or Smart Hub button on your Samsung remote.</li>
          <li><strong>Navigate to Apps:</strong> Select the <strong>&quot;Apps&quot;</strong> icon on the home ribbon.</li>
          <li><strong>Search for Vanto Player:</strong> Click the search magnifying glass icon in the top-right corner and enter &quot;Vanto Player&quot;.</li>
          <li><strong>Download and Install:</strong> Select the official Vanto Player app tile from the search results and click <strong>&quot;Install&quot;</strong>.</li>
          <li><strong>Launch the App:</strong> Once installed, launch the application to initiate setup.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Adding Your Playlist</h2>
        <p>
          When you launch the application for the first time, choose between Xtream Codes API or direct M3U URL entry. Input your provider details or personal file link to begin streaming with hardware decoding.
        </p>
      </div>
      <HowToRelatedLinks />
    </div>
  );
}
