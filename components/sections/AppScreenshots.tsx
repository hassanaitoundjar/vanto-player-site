import { MonitorPlay, Smartphone, Tablet } from 'lucide-react';
import Image from 'next/image';

export default function AppScreenshots() {
  return (
    <section className="w-full bg-[#f8f9fa] py-24">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Vanto Player App Screenshots
          </h2>
          <div className="w-16 h-[3px] bg-[#3b82f6] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Take a look at our beautifully designed, intuitive interface. Built from the ground up 
            to provide the ultimate streaming experience on any screen size.
          </p>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* Main Cinematic TV Screen - Takes up 2x2 */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group border border-gray-100">
            <Image 
              src="/images/home-page.png" 
              alt="Vanto Player Smart TV Interface Screenshot" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            {/* Dark gradient fade for text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-white/20 backdrop-blur-xl w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-white/20 shadow-lg">
                <MonitorPlay className="text-white w-7 h-7" aria-hidden="true" />
              </div>
              <h3 className="text-white text-3xl font-bold mb-3 tracking-tight">Cinematic TV UI</h3>
              <p className="text-gray-200 text-base font-medium max-w-sm">
                A massive, immersive layout optimized entirely for your living room big screen.
              </p>
            </div>
          </div>

          {/* Top Right - Tablet / Web */}
          <div className="col-span-1 md:col-span-2 md:row-span-1 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group border border-gray-100">
            <Image 
              src="/screenshots/live-screen.png" 
              alt="Vanto Player Web Interface Screenshot" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-2">
                 <div className="bg-[#3b82f6] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                   <Tablet className="text-white w-5 h-5" aria-hidden="true" />
                 </div>
                 <h3 className="text-white text-2xl font-bold tracking-tight">Tablet & Web</h3>
              </div>
              <p className="text-gray-200 text-sm font-medium mt-2">Perfect adaptive scaling for browsers and tablets.</p>
            </div>
          </div>

          {/* Bottom Middle - Mobile Portrait */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group border border-gray-100">
            <Image 
              src="/screenshots/movies-screen.png" 
              alt="Vanto Player Mobile Interface Screenshot" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-1">
                 <Smartphone className="text-white w-5 h-5" aria-hidden="true" />
                 <h3 className="text-white text-xl font-bold">Mobile iOS & Android</h3>
              </div>
            </div>
          </div>

          {/* Bottom Right - Brand Accent Box */}
          <div className="col-span-1 md:col-span-1 md:row-span-1 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative group bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex flex-col justify-center items-center p-8 text-center border border-gray-800">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#60a5fa] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">Premium UI</h3>
            <p className="text-gray-300 text-sm font-medium leading-relaxed">
              Designed with absolute precision. Every pixel crafted to perfection for your media.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
