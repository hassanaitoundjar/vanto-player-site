import { ShieldAlert, Link as LinkIcon, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function FraudAwareness() {
  return (
    <section className="w-full bg-white py-24">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide">
            Fraud Awareness
          </h2>
          <div className="w-16 h-[3px] bg-[#3b82f6] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content - Modern Card */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 md:p-10 space-y-8">
              
              {/* Point 1 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                    <AlertTriangle className="w-5 h-5 text-red-500" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  This is a disclaimer to inform our users that a few <strong className="text-red-500 font-semibold">websites</strong> are illegally duplicating our official website, using our name and site content, and selling subscriptions and packages. Please note that we do not endorse or have any affiliation with these websites, and any transactions made with them will not be honored by us.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                    <ShieldCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  To ensure that you are using a legitimate website, please ensure that the URL begins with <strong className="text-green-600 font-semibold break-all">&quot;https://vantoplayer.com/&quot;</strong> and we don&apos;t sell any IPTV subscriptions or Channel Packages. Also, you have verified the website&apos;s authenticity through other means, such as checking for a secure SSL certificate and contacting our customer support for confirmation.
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                    <ShieldAlert className="w-5 h-5 text-[#3b82f6]" aria-hidden="true" />
                  </div>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  We take the protection of our customers and brand very seriously and are taking steps to shut down these fraudulent websites. If you find any other website, you suspect is fake. Please <a href="/contact" className="text-[#3b82f6] font-semibold hover:underline">report it</a> to us immediately.
                </p>
              </div>

            </div>
          </div>

          {/* Right Visual Content */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] bg-gradient-to-br from-[#f8f9fa] to-blue-50/50 border border-gray-100 flex items-center justify-center overflow-hidden shadow-sm">
              
              {/* Subtle Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
              </div>
              
              {/* Main Custom Icon Composition */}
              <div className="relative z-10 flex flex-col items-center">
                
                {/* Floating Shield */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-[#3b82f6] blur-xl opacity-20 rounded-full"></div>
                  <div className="bg-white w-28 h-28 rounded-3xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] flex items-center justify-center border border-gray-50 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 ease-out cursor-default relative z-10">
                    <ShieldAlert className="w-14 h-14 text-[#3b82f6]" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  
                  {/* Small floating alert badge */}
                  <div className="absolute -top-3 -right-3 bg-red-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-center animate-bounce z-20">
                     <AlertTriangle className="w-4 h-4 text-white" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                </div>

                {/* Secure URL Badge */}
                <div className="bg-white/80 backdrop-blur-md pl-4 pr-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex items-center gap-3 transform translate-y-2 hover:-translate-y-0 transition-transform duration-300">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center">
                    <LinkIcon className="w-4 h-4 text-green-600" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-bold text-gray-800 tracking-tight">vantoplayer.com</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
