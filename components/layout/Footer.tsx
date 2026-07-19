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
            <Link href="https://vantoplayer.com/" className="flex items-center gap-3 w-max" aria-label="Vanto Player Home">
              <div className="w-12 h-12 rounded-xl shadow-lg flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="Vanto Player Logo" width={48} height={48} className="object-cover w-full h-full" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">Vanto Player</span>
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              The ultimate media player for your digital life. Stream smarter and binge better with a beautifully designed, intuitive interface optimized for all your devices.
            </p>
            {/* Social Links - Add back when real profiles exist */}
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
            <Link href="https://vantoplayer.com/support" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Support Center</Link>
            <Link href="https://vantoplayer.com/contact" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Contact Us</Link>
            <Link href="https://vantoplayer.com/support#faq" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">FAQ</Link>
            <Link href="https://vantoplayer.com/#fraud" className="text-gray-400 text-sm hover:text-[#3b82f6] transition-colors w-max font-medium">Report Fraud</Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-5">
            <Link href="https://vantoplayer.com/legal" className="text-white font-semibold text-lg tracking-tight mb-1 hover:text-[#3b82f6] transition-colors">Legal</Link>
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
