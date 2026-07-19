import Link from 'next/link';

export function HowToRelatedLinks() {
  return (
    <div className="mt-16 pt-8 border-t border-white/10">
      <h3 className="text-xl font-semibold mb-4 text-white">Related Guides & Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/how-to/install-on-samsung-smart-tv" className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
          <span className="text-[#3b82f6] font-medium block mb-1">Samsung Smart TV</span>
          <span className="text-gray-300 text-sm">How to install Vanto Player on Tizen</span>
        </Link>
        <Link href="/how-to/install-on-lg-webos" className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
          <span className="text-[#3b82f6] font-medium block mb-1">LG webOS</span>
          <span className="text-gray-300 text-sm">How to install Vanto Player on LG TVs</span>
        </Link>
        <Link href="/how-to/install-on-firestick-android-tv" className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
          <span className="text-[#3b82f6] font-medium block mb-1">Firestick & Android TV</span>
          <span className="text-gray-300 text-sm">How to sideload the app via Downloader</span>
        </Link>
        <Link href="/how-to/add-m3u-playlist" className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
          <span className="text-[#3b82f6] font-medium block mb-1">Add M3U Playlist</span>
          <span className="text-gray-300 text-sm">Step-by-step guide to adding channels</span>
        </Link>
        <Link href="/how-to/fix-playlist-not-loading" className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
          <span className="text-[#3b82f6] font-medium block mb-1">Fix Playlist Issues</span>
          <span className="text-gray-300 text-sm">Troubleshooting buffering and loading errors</span>
        </Link>
        <Link href="/download" className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
          <span className="text-[#3b82f6] font-medium block mb-1">Download Vanto Player</span>
          <span className="text-gray-300 text-sm">Get the app for all your devices</span>
        </Link>
      </div>
    </div>
  );
}
