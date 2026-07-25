export default function CompatibleDevices() {
  return (
    <section className="w-full bg-[#050505] py-24 md:py-32 border-y border-white/5 overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-8 xl:px-12 flex flex-col items-center">
        <p className="text-white/60 text-sm md:text-base font-medium mb-16 text-center">
          Watch Vanto Player with these compatible streaming devices
        </p>

        {/* Marquee Wrapper with Container width */}
        <div className="w-full overflow-hidden relative flex">
          
          {/* Gradient fades on the edges for a smoother effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

          {/* Sliding Content - Two identical sets for flawless infinite loop */}
          <div className="flex w-max opacity-70 hover:opacity-100 transition-opacity duration-500 group">
            
            {[1, 2].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-16 md:gap-24 px-8 md:px-12 animate-marquee group-hover:[animation-play-state:paused] shrink-0">
                
                {/* Roku mock logo */}
                <div className="text-[#662D91] font-extrabold text-3xl tracking-tighter cursor-default shrink-0">
                  Roku
                </div>

                {/* Apple TV mock logo */}
                <div className="flex items-center gap-1 text-white font-semibold text-3xl tracking-tight cursor-default shrink-0">
                  <svg viewBox="0 0 384 512" className="w-7 h-7 fill-current mb-1"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                  tv
                </div>

                {/* SAMSUNG mock logo */}
                <div className="text-white font-black text-2xl tracking-[0.2em] cursor-default shrink-0">
                  SAMSUNG
                </div>

                {/* LG webOS mock logo */}
                <div className="flex items-center gap-2 cursor-default shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#A50034] flex items-center justify-center text-white font-bold text-xs shadow-inner">LG</div>
                  <span className="text-white/80 font-light text-2xl tracking-tight">web<span className="font-semibold text-white">OS</span></span>
                </div>

                {/* SONY mock logo */}
                <div className="text-white text-3xl font-serif tracking-widest font-bold cursor-default shrink-0">
                  SONY
                </div>

                {/* Android TV mock logo */}
                <div className="flex items-center gap-1 cursor-default shrink-0">
                  <span className="text-[#3DDC84] font-bold text-3xl tracking-tighter">android</span>
                  <span className="text-white/80 font-light text-3xl tracking-tighter">tv</span>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
