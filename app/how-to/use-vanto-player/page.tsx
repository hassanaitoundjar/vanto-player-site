import { buildMetadata } from '@/lib/siteConfig';
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav';
import { HowToRelatedLinks } from '@/components/ui/HowToRelatedLinks';
import { BreadcrumbListLd } from '@/components/seo/JsonLd';
import Image from 'next/image';

export const metadata = buildMetadata({
  title: 'How to Use Vanto Player: Complete Feature Guide',
  description: 'Explore the full capabilities of Vanto Player. Learn how to navigate Live TV, VOD, Series, Catch-up, Multiscreen, and more.',
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
          Welcome to Vanto Player! Our premium interface is designed for seamless media streaming. 
          This step-by-step guide will walk you through all the major features of the app.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. The Home Dashboard</h2>
        <p>
          Once you've added your playlist, you'll be greeted by the intuitive Home screen. From here, you can access Live TV, Movies, Series, Catch Up, and more. The dashboard is designed to provide quick access to your recently watched and favorite content.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/home-screen.png" alt="Vanto Player Home Dashboard" width={1200} height={675} className="w-full object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Live TV & EPG Guide</h2>
        <p>
          The <strong>Live TV</strong> section organizes your channels by category. You can browse through your provider's channel list, view the Electronic Program Guide (EPG) to see what's currently playing, and switch channels instantly with zero buffering.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/live-screen.png" alt="Vanto Player Live TV Channels and Categories" width={1200} height={675} className="w-full object-cover" />
        </div>
        <p>
          Once you select a channel, the powerful <strong>Live Player</strong> gives you playback controls, quick channel zapping, and access to the EPG directly from the player overlay.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/live-player.png" alt="Vanto Player Live TV Player Interface" width={1200} height={675} className="w-full object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Movies (VOD)</h2>
        <p>
          Dive into your Video On Demand (VOD) library. The <strong>Movies</strong> section displays beautiful cover art, categorized by genre or newly added content. 
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/movies-screen.png" alt="Vanto Player Movies Library" width={1200} height={675} className="w-full object-cover" />
        </div>
        <p>
          Clicking on any movie brings up the <strong>Details Screen</strong>, where you can read the synopsis, check the IMDB rating, view the cast, and watch the trailer before hitting play.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/movies-details.png" alt="Vanto Player Movie Details and Synopsis" width={1200} height={675} className="w-full object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. TV Series</h2>
        <p>
          Binge-watching is easy with the <strong>Series</strong> section. Browse your TV shows with automatic categorization and high-quality posters.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/series-screen.png" alt="Vanto Player TV Series Library" width={1200} height={675} className="w-full object-cover" />
        </div>
        <p>
          Inside a series, episodes are neatly organized by Season. The app keeps track of your progress so you can pick up exactly where you left off.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/series-details.png" alt="Vanto Player TV Series Episode Selection" width={1200} height={675} className="w-full object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Multiscreen & Catch-up</h2>
        <p>
          Can't decide what to watch? Use the <strong>Multiscreen</strong> feature to watch up to 4 live channels simultaneously on the same screen! Perfect for sports days.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/multiscreen.png" alt="Vanto Player Multiscreen Feature" width={1200} height={675} className="w-full object-cover" />
        </div>
        <p>
          If your provider supports it, the <strong>Catch-up</strong> section allows you to rewatch programs that aired earlier in the week, so you never miss a moment.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/catch-up-screen.png" alt="Vanto Player Catch-up TV Interface" width={1200} height={675} className="w-full object-cover" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Profiles & Settings</h2>
        <p>
          Customize your experience by creating multiple user <strong>Profiles</strong>. This keeps favorites, watch history, and parental controls separate for different members of the household.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/userlist-screen.png" alt="Vanto Player User Profiles" width={1200} height={675} className="w-full object-cover" />
        </div>
        <p>
          Access the <strong>Settings</strong> to configure parental controls, adjust playback settings, change the app language, and manage your account details securely.
        </p>
        <div className="mt-4 mb-8 overflow-hidden rounded-xl border border-gray-700/50 shadow-2xl">
          <Image src="/screenshots/profile-screen.png" alt="Vanto Player Settings and Profile Options" width={1200} height={675} className="w-full object-cover" />
        </div>

      </div>
      <HowToRelatedLinks />
    </div>
  );
}
