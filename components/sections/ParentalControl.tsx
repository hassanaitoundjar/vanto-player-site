import { Lock, Shield, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function ParentalControl() {
  return (
    <section id="parental" className="w-full bg-[#0a0a0a] py-24 border-t border-white/5 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Lock className="w-3.5 h-3.5" aria-hidden="true" /> Security & Privacy
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              PIN-Protected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]">Parental Controls</span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Protect your family by restricting access to selected categories or sensitive playlist channels. Configure a 4-digit Master PIN to hide password-protected groups directly within the player interface.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <Shield className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Category Locking</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Lock entire categories from view with instant password prompts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                  <EyeOff className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base">Discrete Group Hiding</h3>
                  <p className="text-gray-400 text-sm mt-0.5">Hidden groups do not appear in channel search results until unlocked.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Container */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-[560px] aspect-[16/10] bg-[#111111]">
              <Image 
                src="/screenshots/profile-screen.png" 
                alt="Vanto Player Parental Controls and Profile Settings Screen" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                <span>Profile Management</span>
                <span className="text-green-400 font-medium">PIN Protection Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
