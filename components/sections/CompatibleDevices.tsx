import React from 'react';

export default function CompatibleDevices() {
  const devices = [
    { name: 'Android TV', type: 'Native App' },
    { name: 'Google TV', type: 'Native App' },
    { name: 'Amazon Firestick', type: 'Native App' },
    { name: 'Samsung Tizen', type: 'Smart TV' },
    { name: 'LG webOS', type: 'Smart TV' },
    { name: 'Sony Android TV', type: 'Smart TV' },
    { name: 'Linux Desktop', type: 'AppImage' },
    { name: 'Web Browsers', type: 'Chrome / Safari / Firefox' },
  ];

  return (
    <section id="devices" className="w-full bg-[#050505] py-20 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 xl:px-12 flex flex-col items-center">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Cross-Platform Flexibility</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Supported Streaming Devices & Platforms
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="w-full overflow-hidden relative flex">
          {/* Gradient fades on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

          {/* Sliding Content */}
          <div className="flex w-max opacity-80 hover:opacity-100 transition-opacity duration-500 group">
            {[1, 2].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-12 md:gap-16 px-6 animate-marquee group-hover:[animation-play-state:paused] shrink-0">
                {devices.map((device, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 shrink-0">
                    <span className="text-white font-bold text-lg tracking-tight">{device.name}</span>
                    <span className="text-xs text-blue-400 font-medium">{device.type}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-xs text-center mt-8">
          * Apple TV and iOS versions are currently in active development. Roku is not currently supported.
        </p>
      </div>
    </section>
  );
}
