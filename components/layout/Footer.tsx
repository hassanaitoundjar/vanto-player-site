import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-20 pb-8">
      <div className="container mx-auto px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6 lg:col-span-2 pr-0 lg:pr-12">
            <Link href="https://vantoplayer.com/" className="flex items-center gap-3 w-max">
              <div className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="Vanto Player Logo" width={48} height={48} className="object-cover w-full h-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Vanto Player</span>
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              The ultimate media player for your digital life. Stream smarter and binge better with a beautifully designed, intuitive interface optimized for all your devices.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3b82f6] hover:border-[#3b82f6] hover:text-white text-gray-400 transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3b82f6] hover:border-[#3b82f6] hover:text-white text-gray-400 transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3b82f6] hover:border-[#3b82f6] hover:text-white text-gray-400 transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3b82f6] hover:border-[#3b82f6] hover:text-white text-gray-400 transition-all duration-300">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-lg tracking-tight mb-1">Product</h4>
            <Link href="https://vantoplayer.com/#features" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Features</Link>
            <Link href="https://vantoplayer.com/download" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Download</Link>
            <Link href="https://vantoplayer.com/#devices" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Compatible Devices</Link>
            <Link href="https://vantoplayer.com/#parental" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Parental Control</Link>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-lg tracking-tight mb-1">Support</h4>
            <Link href="https://vantoplayer.com/#faq" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">FAQ</Link>
            <Link href="https://vantoplayer.com/contact" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Contact Us</Link>
            <Link href="https://vantoplayer.com/#fraud" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Report Fraud</Link>
            <Link href="https://vantoplayer.com/contact" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Help Center</Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white font-semibold text-lg tracking-tight mb-1">Legal</h4>
            <Link href="https://vantoplayer.com/terms" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Terms of Service</Link>
            <Link href="https://vantoplayer.com/privacy" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Privacy Policy</Link>
            <Link href="https://vantoplayer.com/refund" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Refund Policy</Link>
            <Link href="https://vantoplayer.com/dmca" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">DMCA Policy</Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm text-center md:text-left font-medium">
            &copy; {currentYear} Vanto Player. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#3b82f6] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20">
              Premium UI Experience
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
