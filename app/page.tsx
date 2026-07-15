import Hero from '@/components/sections/Hero';
import FeatureVideo from '@/components/sections/FeatureVideo';
import FeaturesOverview from '@/components/sections/FeaturesOverview';
import AppScreenshots from '@/components/sections/AppScreenshots';
import DownloadSection from '@/components/sections/Download';
import ParentalControl from '@/components/sections/ParentalControl';
import CompatibleDevices from '@/components/sections/CompatibleDevices';
import FAQSection from '@/components/sections/FAQ';
import FraudAwareness from '@/components/sections/FraudAwareness';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full">
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
