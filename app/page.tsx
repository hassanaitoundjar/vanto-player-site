import Hero from '@/components/sections/Hero';
import FeatureVideo from '@/components/sections/FeatureVideo';
import FeaturesOverview from '@/components/sections/FeaturesOverview';
import AppScreenshots from '@/components/sections/AppScreenshots';
import CompatibleDevices from '@/components/sections/CompatibleDevices';
import HowItWorks from '@/components/sections/HowItWorks';
import DownloadSection from '@/components/sections/Download';
import LatestArticles from '@/components/sections/LatestArticles';
import ParentalControl from '@/components/sections/ParentalControl';
import FraudAwareness from '@/components/sections/FraudAwareness';
import FAQSection from '@/components/sections/FAQ';
import DownloadCta from '@/components/sections/DownloadCta';

import { buildMetadata } from '@/lib/siteConfig';
import { SoftwareApplicationLd, VideoObjectLd, FAQPageLd } from '@/components/seo/JsonLd';

export const metadata = buildMetadata({
  title: 'Vanto Player | Modern Media Player for Smart TV, Android & Web',
  description: 'Vanto Player is a high-performance cross-platform media player. Play your M3U playlists, JSON sources, and media files across Android TV, Smart TVs, and browsers.',
  path: '/',
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      <SoftwareApplicationLd />
      <VideoObjectLd />
      <FAQPageLd />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Product Overview Video & Walkthrough */}
      <FeatureVideo />

      {/* 3. Real Product Features */}
      <FeaturesOverview />

      {/* 4. Application Screenshots */}
      <AppScreenshots />

      {/* 5. Supported Platforms */}
      <CompatibleDevices />

      {/* 6. How It Works */}
      <HowItWorks />

      {/* 7. Installation Guide & Download Matrix */}
      <DownloadSection />

      {/* 8. Latest Technical Tutorials */}
      <LatestArticles />

      {/* 9. Feature Spotlight: Security & Parental Controls */}
      <ParentalControl />

      {/* 10. Fraud Awareness & Brand Protection */}
      <FraudAwareness />

      {/* 11. FAQ */}
      <FAQSection />

      {/* 12. Final Download CTA */}
      <DownloadCta />
    </div>
  );
}
