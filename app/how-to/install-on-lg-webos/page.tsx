import { buildMetadata } from '@/lib/siteConfig';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { HowToRelatedLinks } from '@/components/ui/HowToRelatedLinks';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'How to Install Vanto Player on LG webOS Smart TV',
  description: 'Step-by-step tutorial on how to install and set up Vanto Player on LG webOS Smart TVs.',
  path: '/how-to/install-on-lg-webos',
});

export default function InstallLGWebOS() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://vantoplayer.com/' },
    { name: 'Support', item: 'https://vantoplayer.com/support' },
    { name: 'Install on LG webOS', item: 'https://vantoplayer.com/how-to/install-on-lg-webos' },
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <BreadcrumbListLd items={breadcrumbs} />
      <BreadcrumbNav title="Install on LG webOS" />
      <h1 className="text-4xl font-bold mb-8">How to Install Vanto Player on LG webOS</h1>
      
      <div className="prose prose-lg prose-invert max-w-none text-gray-300">
        <p>
          Vanto Player provides an optimized 10-foot interface for LG Smart TVs running webOS (version 4.0 and higher). Follow this walkthrough to install the application.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Installation Steps</h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Access the Home Menu:</strong> Press the Home button on your LG Magic Remote.</li>
          <li><strong>Open LG Content Store:</strong> Scroll through the launcher bar and select the <strong>LG Content Store</strong> (or <strong>Apps</strong> on webOS 6+).</li>
          <li><strong>Search:</strong> Click the Search icon (magnifying glass) in the top-right corner and enter &quot;Vanto Player&quot;.</li>
          <li><strong>Install:</strong> Select the official Vanto Player application tile and click the <strong>Install</strong> button.</li>
          <li><strong>Launch:</strong> Once the download finishes, click <strong>Launch</strong> to start the player.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Initial Device Configuration</h2>
        <p>
          When you launch the app for the first time, your TV&apos;s unique hardware MAC address will be displayed on the screen. Select your preferred login method (Xtream Codes API or M3U URL) and input your credentials to load your channels and media library.
        </p>
      </div>
      <HowToRelatedLinks />
    </div>
  );
}
