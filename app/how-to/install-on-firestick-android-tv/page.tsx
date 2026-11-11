import { buildMetadata } from '@/lib/siteConfig';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { HowToRelatedLinks } from '@/components/ui/HowToRelatedLinks';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'How to Install Vanto Player on Firestick & Android TV',
  description: 'Learn how to easily sideload and install Vanto Player on your Amazon Firestick, Fire TV, or Android TV using the Downloader app.',
  path: '/how-to/install-on-firestick-android-tv',
});

export default function InstallFirestick() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://vantoplayer.com/' },
    { name: 'Support', item: 'https://vantoplayer.com/support' },
    { name: 'Install on Firestick & Android TV', item: 'https://vantoplayer.com/how-to/install-on-firestick-android-tv' },
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <BreadcrumbListLd items={breadcrumbs} />
      <BreadcrumbNav title="Install on Firestick & Android TV" />
      <h1 className="text-4xl font-bold mb-8">How to Install Vanto Player on Firestick &amp; Android TV</h1>
      
      <div className="prose prose-lg prose-invert max-w-none text-gray-300">
        <p>
          Installing Vanto Player on an Amazon Firestick or Android TV streaming box is straightforward via the Downloader app.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 1: Enable Apps from Unknown Sources</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>From your Fire TV home screen, navigate to <strong>Settings</strong> (gear icon).</li>
          <li>Select <strong>My Fire TV</strong> (or Device &amp; Software).</li>
          <li>Select <strong>Developer Options</strong>. <em>(Note: If you do not see this, go to About, select your Fire TV Stick, and press the OK button 7 times to unlock it.)</em></li>
          <li>Turn ON <strong>Install Unknown Apps</strong> for the Downloader application.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 2: Get the Downloader App</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Go back to the Home screen and select the <strong>Search/Find</strong> icon.</li>
          <li>Type in <strong>&quot;Downloader&quot;</strong> and select it from the suggestions.</li>
          <li>Download and install the app (orange icon by AFTVnews).</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 3: Install Vanto Player</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open Downloader and grant standard storage permissions.</li>
          <li>Click into the URL bar and enter numeric code: <strong className="text-blue-400 font-mono">7392829</strong>.</li>
          <li>Click <strong>Go</strong>. The APK file will begin downloading automatically from our secure mirror.</li>
          <li>Once downloaded, select <strong>Install</strong> on the system prompt.</li>
          <li>Click <strong>Open</strong> to launch Vanto Player and input your personal playlist or API credentials.</li>
        </ol>
      </div>
      <HowToRelatedLinks />
    </div>
  );
}
