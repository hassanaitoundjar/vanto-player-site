import Link from 'next/link';
import { Home, Search, BookOpen, MessageSquare, Download } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-24 text-center">
      <div className="space-y-6 max-w-2xl w-full">
        <h1 className="text-7xl font-bold tracking-tighter text-blue-500">404</h1>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-300">
          Oops! We couldn&apos;t find the page you&apos;re looking for. It might have been removed, renamed, or didn&apos;t exist in the first place.
        </p>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-blue-600/90 h-10 px-8 py-2 w-full sm:w-auto"
          >
            <Home className="mr-2 h-4 w-4" aria-hidden="true" />
            Return Home
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-xl font-medium text-white mb-6">Helpful Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <Link href="/download" className="group flex items-center p-4 rounded-xl border border-gray-800 bg-[#111] hover:border-blue-500/50 hover:bg-[#1a1a1a] transition-all">
              <Download className="h-5 w-5 text-blue-500 mr-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div>
                <div className="font-medium text-white">Download</div>
                <div className="text-sm text-gray-300">Get Vanto Player for your device</div>
              </div>
            </Link>
            <Link href="/blog" className="group flex items-center p-4 rounded-xl border border-gray-800 bg-[#111] hover:border-blue-500/50 hover:bg-[#1a1a1a] transition-all">
              <BookOpen className="h-5 w-5 text-blue-500 mr-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div>
                <div className="font-medium text-white">Blog</div>
                <div className="text-sm text-gray-300">Read our latest tutorials & news</div>
              </div>
            </Link>
            <Link href="/support" className="group flex items-center p-4 rounded-xl border border-gray-800 bg-[#111] hover:border-blue-500/50 hover:bg-[#1a1a1a] transition-all">
              <Search className="h-5 w-5 text-blue-500 mr-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div>
                <div className="font-medium text-white">Support</div>
                <div className="text-sm text-gray-300">Find answers to common questions</div>
              </div>
            </Link>
            <Link href="/contact" className="group flex items-center p-4 rounded-xl border border-gray-800 bg-[#111] hover:border-blue-500/50 hover:bg-[#1a1a1a] transition-all">
              <MessageSquare className="h-5 w-5 text-blue-500 mr-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div>
                <div className="font-medium text-white">Contact Us</div>
                <div className="text-sm text-gray-300">Get in touch with our team</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
