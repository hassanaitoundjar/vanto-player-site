import { buildMetadata } from '@/lib/siteConfig';
import { Download, Search, Tv, Hash } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'How to Install Vanto Player on Firestick & Android TV',
  description: 'Learn how to easily sideload and install Vanto Player on your Amazon Firestick, Fire TV, or Android TV using the Downloader app.',
  path: '/how-to/install-on-firestick-android-tv',
});

export default function InstallFirestick() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">How to Install Vanto Player on Firestick & Android TV</h1>
      
      <div className="prose prose-lg prose-invert max-w-none text-gray-300">
        <p>
          Installing Vanto Player on an Amazon Firestick or generic Android TV box requires sideloading via the Downloader app. It takes just a few minutes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 1: Enable Apps from Unknown Sources</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>From your Fire TV home screen, navigate to <strong>Settings</strong> (gear icon).</li>
          <li>Select <strong>My Fire TV</strong> (or Device & Software).</li>
          <li>Select <strong>Developer Options</strong>. <em>(Note: If you don't see this, go to About, select your Fire TV Stick, and click the OK button 7 times to unlock it.)</em></li>
          <li>Turn ON <strong>Apps from Unknown Sources</strong>.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 2: Get the Downloader App</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Go back to the Home screen and select the <strong>Search/Find</strong> icon.</li>
          <li>Type in <strong>"Downloader"</strong> and select it.</li>
          <li>Download and install the app (orange icon with a download arrow).</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">Step 3: Install Vanto Player</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Open the Downloader app and allow any permissions it asks for.</li>
          <li>Click into the URL/Search bar and enter our quick code: <strong className="text-blue-400">7392829</strong></li>
          <li>Click <strong>Go</strong>. The APK file will begin downloading automatically.</li>
          <li>Once downloaded, click <strong>Install</strong> when prompted.</li>
          <li>Click <strong>Done</strong> or <strong>Open</strong> to launch Vanto Player!</li>
        </ol>
      </div>
    </div>
  );
}
