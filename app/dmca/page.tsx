import { buildMetadata } from '@/lib/siteConfig';

export const metadata = buildMetadata({
  title: 'DMCA & Copyright Policy | Vanto Player',
  description: 'Digital Millennium Copyright Act (DMCA) and copyright compliance policy for Vanto Player software.',
  path: '/dmca',
});

export default function DMCAPolicyPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#0a0a0a]">
      {/* Hero */}
      <section className="w-full pt-32 pb-16 px-6 md:px-8 xl:px-12 border-b border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Intellectual Property Policy
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            DMCA &amp; Copyright Policy
          </h1>
          <p className="text-gray-400 font-medium text-sm">Last updated: November 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="w-full py-16 px-6 md:px-8 xl:px-12">
        <div className="container mx-auto max-w-4xl text-gray-300 leading-relaxed space-y-8 bg-[#111111] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Technical Status as Independent Playback Software</h2>
            <p className="mb-3">
              Vanto Player is an empty multimedia playback application. We do not provide, host, store, stream, or distribute any media content, television broadcasts, video files, or playlists. The application is strictly a client-side tool enabling users to render their own authorized digital content.
            </p>
            <p className="text-gray-400 text-sm">
              Because Vanto Player does not operate media servers or host streaming content, we possess no technical ability to take down, remove, or modify external media streams hosted by third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Prohibition of Unauthorized Content</h2>
            <p>
              Our Terms of Service explicitly forbid users from utilizing Vanto Player to access, stream, or distribute unauthorized copyrighted material. We respect copyright laws and intellectual property rights globally and do not condone copyright infringement or piracy in any form.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. External Streams vs. Application Website</h2>
            <p className="mb-3">
              If you believe a third-party IPTV service, website, or hosting server is broadcasting copyrighted works without permission, you must address your DMCA takedown notice directly to the host or internet service provider (ISP) where those files or streams originate.
            </p>
            <p>
              If your claim relates specifically to text, images, or software distributed directly on <strong className="text-white">vantoplayer.com</strong>, our designated agent will review and address valid notices in accordance with 17 U.S.C. § 512(c).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Submitting a Valid DMCA Notice</h2>
            <p className="mb-4">
              To submit a valid notice of claimed infringement regarding content on our website or software distribution channels, please provide our Copyright Agent with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-2">
              <li>A physical or electronic signature of an authorized representative of the copyright owner.</li>
              <li>Clear identification of the copyrighted work claimed to have been infringed.</li>
              <li>Accurate location (specific URL) of the alleged infringing material on our site.</li>
              <li>Your contact information, including name, address, telephone number, and email.</li>
              <li>A statement that you have a good-faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement, under penalty of perjury, that the information in your notice is accurate.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Designated DMCA Agent Contact</h2>
            <p className="mb-2">Send all copyright-related notices to:</p>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-sm space-y-1">
              <p className="text-white font-semibold font-sans">Vanto Player Compliance Department</p>
              <p>Email: <a href="mailto:dmca@vantoplayer.com" className="text-blue-400 font-sans">dmca@vantoplayer.com</a></p>
              <p>Backup: <a href="mailto:support@vantoplayer.com" className="text-blue-400 font-sans">support@vantoplayer.com</a></p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
