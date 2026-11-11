import { buildMetadata } from '@/lib/siteConfig';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { HowToRelatedLinks } from '@/components/ui/HowToRelatedLinks';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';
import Image from 'next/image';

export const metadata = buildMetadata({
  title: 'How to Use Vanto Player: Complete Feature Guide',
  description: 'Explore the full capabilities of Vanto Player. Learn how to navigate channels, video libraries, series, multiscreen, and playback settings.',
  path: '/how-to/use-vanto-player',
});

export default function UseVantoPlayer() {
  const breadcrumbs = [
    { name: 'Home', item: 'https://vantoplayer.com/' },
    { name: 'Support', item: 'https://vantoplayer.com/support' },
    { name: 'How to Use Vanto Player', item: 'https://vantoplayer.com/how-to/use-vanto-player' },
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <BreadcrumbListLd items={breadcrumbs} />
      <BreadcrumbNav title="How to Use Vanto Player" />
      <h1 className="text-4xl font-bold mb-8">How to Use Vanto Player: Complete Feature Guide</h1>
      
      <div className="prose prose-lg prose-invert max-w-none text-gray-300">
        <p>
          Welcome to Vanto Player! Our interface is engineered for responsive, intuitive media streaming. 
          This step-by-step walkthrough covers all the major software capabilities of the player.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. The Home Dashboard</h2>
        <p>
          Once you have connected your authorized playlist or media source, you will be greeted by the Home dashboard. From here, you can access your personal media categories, recently played items, and favorite channels.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/home-screen.png" alt="Vanto Player Home Dashboard" width={1200} height={675} className="w-full object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Live Stream Navigation &amp; EPG Guide</h2>
        <p>
          The <strong>Live Streams</strong> section organizes your channels by category. When your playlist includes XMLTV links, the Electronic Program Guide (EPG) populates program timelines, upcoming episode descriptions, and current show air times.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/live-screen.png" alt="Vanto Player Live Channels and Categories" width={1200} height={675} className="w-full object-cover" />
        </div>
        <p>
          Selecting a channel launches the <strong>Full Player</strong> overlay, providing hardware-accelerated playback controls, quick channel switching, and subtitle selectors.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/live-player.png" alt="Vanto Player Live TV Player Interface" width={1200} height={675} className="w-full object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Video on Demand (VOD) Organization</h2>
        <p>
          The <strong>Movies</strong> section categorizes video files based on your playlist metadata, grouping entries by genre and year.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/movies-screen.png" alt="Vanto Player Movies Library" width={1200} height={675} className="w-full object-cover" />
        </div>
        <p>
          Clicking any movie card opens the <strong>Details Screen</strong>, where you can view synopsis information, audio codecs, and resolution before starting playback.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/movies-details.png" alt="Vanto Player Movie Details and Synopsis" width={1200} height={675} className="w-full object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. TV Series Tracking</h2>
        <p>
          The <strong>Series</strong> viewer groups multi-episode content by seasons, tracking watched episodes so you can resume playback seamlessly.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/series-screen.png" alt="Vanto Player TV Series Library" width={1200} height={675} className="w-full object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Multi-Screen Player</h2>
        <p>
          On high-performance devices, the <strong>Multiscreen</strong> tool allows rendering up to 4 simultaneous video streams in a grid view&mdash;ideal for monitoring multiple concurrent events.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/multiscreen.png" alt="Vanto Player Multiscreen Feature" width={1200} height={675} className="w-full object-cover" />
        </div>
      </div>
      <HowToRelatedLinks />
    </div>
  );
}
