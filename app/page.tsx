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
import { SoftwareApplicationLd, VideoObjectLd, FAQPageLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'Vanto Player: Best IPTV Player App & Online Web Player',
  description: 'Vanto Player is the ultimate IPTV player app and online media player. Stream your M3U/JSON playlists on Smart TV, Android, iOS, and Web. Try it today.',
  path: '/',
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full">
      <VideoObjectLd />
      <FAQPageLd />
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
