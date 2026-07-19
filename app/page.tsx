import Hero from '@/components/sections/Hero';
import FeatureVideo from '@/components/sections/FeatureVideo';
import FeaturesOverview from '@/components/sections/FeaturesOverview';
import AppScreenshots from '@/components/sections/AppScreenshots';
import DownloadSection from '@/components/sections/Download';
import ParentalControl from '@/components/sections/ParentalControl';
import CompatibleDevices from '@/components/sections/CompatibleDevices';
import FAQSection from '@/components/sections/FAQ';
import FraudAwareness from '@/components/sections/FraudAwareness';

import { buildMetadata } from '@/lib/siteConfig';
import { SoftwareApplicationLd, VideoObjectLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'Vanto Player - Premium IPTV & M3U Media Player for All Devices',
  description:
    'Vanto Player is the ultimate cross-platform IPTV and M3U media player. Stream live TV, VOD, and series in stunning 4K on Android, Smart TV, Windows, Mac, and Web — zero buffering, beautiful interface.',
  path: '/',
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full">
      <SoftwareApplicationLd />
      <VideoObjectLd />
      <Hero />
      <FeatureVideo />
      <CompatibleDevices />
      <FeaturesOverview />
      <AppScreenshots />
      <DownloadSection />
      <ParentalControl />
      <FraudAwareness />
      <FAQSection />
    </div>
  );
}
