'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "https://vantoplayer.com/download", text: "DOWNLOADS" },
    { href: "https://vantoplayer.com/activation", text: "ACTIVATE DEVICE" },
    { href: "https://vantoplayer.com/#playlists", text: "MANAGE PLAYLISTS" },
    { href: "https://vantoplayer.com/#tutorials", text: "HOW TO TUTORIALS" },
    { href: "https://vantoplayer.com/support", text: "SUPPORT" },
    { href: "https://vantoplayer.com/legal", text: "LEGAL TERMS" },
    { href: "https://vantoplayer.com/contact", text: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#111111] border-b border-white/5 shadow-xl transition-all duration-300">
      {/* Accent Bar on the very left edge of the screen */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3b82f6]"></div>

      <div className="container mx-auto px-6 md:px-8 xl:px-12 relative z-50">
        <div className="flex h-24 items-center justify-between w-full">
          {/* Logo Section */}
          <Link href="https://vantoplayer.com/" className="flex items-center gap-3 transition-transform hover:scale-105" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative h-[60px] w-[60px] rounded-xl overflow-hidden shadow-lg shadow-black/50">
              <Image 
                src="/logo.png" 
                alt="Vanto Player Logo" 
                fill
                className="object-cover"
              />
            </div>
            <span className="text-3xl font-extrabold tracking-wider text-white hidden sm:block">
              VANTO <span className="text-[#3b82f6]">PLAYER</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <nav className="flex items-center gap-6 xl:gap-8">
              {navLinks.filter(link => link.text !== "DOWNLOADS").map((link) => (
                <NavLink key={link.text} href={link.href} text={link.text} />
              ))}
            </nav>
            <Link 
              href="https://vantoplayer.com/download"
              className="bg-[#3b82f6] text-white font-bold py-2.5 px-6 rounded-lg shadow-lg shadow-blue-500/20 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all active:scale-95 text-sm tracking-wider uppercase"
            >
              Get App
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger/Close) */}
          <button 
            className="lg:hidden text-white/80 hover:text-white p-2 focus:outline-none z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 translate-x-3' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className={`flex flex-col items-center justify-center min-h-screen px-6 py-24 transition-all duration-500 ease-out transform ${
            isMobileMenuOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-10 scale-95 opacity-0'
          }`}
        >
          <div className="w-full max-w-sm flex flex-col gap-6 text-center">
            {navLinks.map((link, index) => (
              <Link 
                key={link.text} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-xl font-bold tracking-widest uppercase hover:text-[#3b82f6] transition-colors"
                style={{ 
                  transitionDelay: `${isMobileMenuOpen ? index * 75 : 0}ms`,
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transitionProperty: 'opacity, transform, color',
                  transitionDuration: '500ms'
                }}
              >
                {link.text}
              </Link>
            ))}
            
            <div 
              className="w-full h-px bg-white/10 my-4"
              style={{ 
                transitionDelay: `${isMobileMenuOpen ? navLinks.length * 75 : 0}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
                transitionDuration: '500ms'
              }}
            ></div>
            
            <Link 
              href="https://vantoplayer.com/download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#3b82f6] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-600 transition-all active:scale-95 tracking-wider"
              style={{ 
                transitionDelay: `${isMobileMenuOpen ? (navLinks.length + 1) * 75 : 0}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDuration: '500ms'
              }}
            >
              GET VANTO PLAYER
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link 
      href={href} 
      className="text-[13px] font-bold tracking-widest text-white/80 hover:text-[#3b82f6] transition-colors duration-200 uppercase"
    >
      {text}
    </Link>
  );
}
