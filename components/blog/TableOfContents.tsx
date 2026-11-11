'use client';

import { useEffect, useState } from 'react';
import { List, ChevronDown, ChevronRight } from 'lucide-react';
import type { TocItem } from '@/lib/blog';

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="my-8 bg-[#111111] border border-white/10 rounded-2xl p-5 md:p-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-white font-bold text-sm tracking-wide uppercase group"
      >
        <span className="flex items-center gap-2.5">
          <List className="w-4 h-4 text-[#3b82f6]" aria-hidden="true" />
          Table of Contents ({items.length} sections)
        </span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white" aria-hidden="true" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-white" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <ul className="mt-4 pt-4 border-t border-white/5 space-y-2 text-sm">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`${item.level === 3 ? 'pl-4 border-l border-white/10 ml-2' : ''}`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      setActiveId(item.id);
                    }
                  }}
                  className={`block py-1 transition-colors leading-snug ${
                    isActive
                      ? 'text-[#3b82f6] font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

