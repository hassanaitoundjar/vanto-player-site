import { buildMetadata } from '@/lib/siteConfig';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { HowToRelatedLinks } from '@/components/ui/HowToRelatedLinks';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'How to Install Vanto Player on Samsung Smart TV',
  description: 'Step-by-step guide to installing Vanto Player on your Samsung Tizen Smart TV to stream IPTV and M3U playlists easily.',
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
          Installing Vanto Player on your Samsung Smart TV (Tizen OS) is incredibly straightforward. Since our app is optimized for the Samsung ecosystem, you don't need any complex workarounds.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step-by-Step Installation Guide</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Turn on your TV:</strong> Ensure your Samsung Smart TV is connected to the internet.</li>
          <li><strong>Open the Smart Hub:</strong> Press the Home button on your remote to access the Smart Hub.</li>
          <li><strong>Navigate to Apps:</strong> Scroll to the "Apps" icon and select it.</li>
          <li><strong>Search for Vanto Player:</strong> Use the search icon (magnifying glass) in the top right corner and type "Vanto Player".</li>
          <li><strong>Download and Install:</strong> Select the Vanto Player app from the search results and click "Install".</li>
          <li><strong>Launch the App:</strong> Once installed, you can open the app directly or find it on your home screen.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Next Steps: Activating and Adding Your Playlist</h2>
        <p>
          After installation, the app will display a unique MAC address and Device Key on the screen. You will need these to activate your device and upload your M3U playlist via our <a href="/activation" className="text-blue-400 hover:underline">Manage Playlists</a> portal.
        </p>
      </div>
      <HowToRelatedLinks />
    </div>
  );
}
