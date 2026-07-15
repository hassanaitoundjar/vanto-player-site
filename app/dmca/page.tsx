import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy | Vanto Player',
  description: 'Digital Millennium Copyright Act (DMCA) policy for Vanto Player.',
  alternates: {
    canonical: 'https://vantoplayer.com/dmca',
  },
};

export default function DMCAPolicyPage() {
  return (
    <div className="flex flex-col items-center justify-start flex-1 w-full bg-[#f8f9fa]">
      {/* Legal Hero */}
      <section className="w-full pt-32 pb-16 px-6 md:px-8 xl:px-12 border-b border-gray-100 bg-white">
        <div className="container mx-auto max-w-4xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            DMCA Policy
          </h1>
          <p className="text-gray-500 font-medium">Last updated: July 2026</p>
        </div>
      </section>

      {/* Legal Content */}
      <section className="w-full py-16 px-6 md:px-8 xl:px-12 bg-[#f8f9fa]">
        <div className="container mx-auto max-w-4xl text-gray-600 leading-relaxed space-y-8 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Status as a Media Player</h2>
            <p>
              Vanto Player is an empty media player software. We do not provide, host, sell, or distribute any media content, channels, VODs, or playlists. Our application is simply a tool that allows users to play their own digital content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Copyright Infringement</h2>
            <p>
              We respect the intellectual property rights of others and expect our users to do the same. Since Vanto Player does not host any content on our servers, we are unable to take down or remove any specific streams, channels, or media files. 
            </p>
            <p className="mt-4">
              If you believe that your copyrighted work is being streamed or distributed illegally, you must contact the hosting provider or the entity distributing the playlist. Vanto Player has no control over the content users choose to load into the app.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Prohibition of Illicit Content</h2>
            <p>
              Our Terms of Service explicitly prohibit users from utilizing Vanto Player to access unauthorized copyrighted material. While we cannot monitor user-added playlists due to privacy and technical limitations, we do not condone piracy or copyright infringement in any form.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Submitting a Notice</h2>
            <p>
              If you are a copyright owner or an agent thereof and believe that the Vanto Player platform itself is infringing upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing our Copyright Agent with the following information in writing:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>A description of where the material that you claim is infringing is located on the app or website.</li>
              <li>Your address, telephone number, and email address.</li>
              <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
            </ul>
            <p className="mt-4">
              Please send all DMCA notices to: <a href="mailto:dmca@vantoplayer.com" className="text-[#3b82f6] hover:underline font-medium">dmca@vantoplayer.com</a>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
