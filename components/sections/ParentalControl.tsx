import Image from 'next/image';

export default function ParentalControl() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          {/* Text Content */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] mb-6">
              <span className="text-[#3b82f6]">Vanto Player</span><br />
              <span className="text-gray-900">Parental Controls</span>
            </h2>
            <p className="text-gray-700 text-[15px] leading-relaxed max-w-lg font-medium">
              Enhance peace of mind with Vanto Player&apos;s Parental Controls. Customize family
              content access by setting ratings and categories, ensuring a safe and enjoyable
              viewing experience. Vanto Player&apos;s Parental Controls serve as your ally, providing
              confidence and control in the digital landscape.
            </p>
          </div>
          
          {/* Image */}
          <div className="flex-1 w-full flex justify-center md:justify-end">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 w-full max-w-[600px] aspect-[4/3] lg:aspect-[16/10]">
              <Image 
                src="/screenshots/profile-screen.png" 
                alt="Vanto Player Parental Controls Interface" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
