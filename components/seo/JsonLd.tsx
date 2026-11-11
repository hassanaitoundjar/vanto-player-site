import React from 'react';
import { faqs } from '@/lib/faqData';

export function OrganizationLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vanto Player',
    url: 'https://vantoplayer.com',
    logo: 'https://vantoplayer.com/logo.png',
    description: 'Developer of high-performance, cross-platform multimedia playback software.',
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function SoftwareApplicationLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Vanto Player',
    operatingSystem: 'Android, Android TV, Fire TV, Samsung Tizen, LG webOS, Linux, Web',
    applicationCategory: 'MultimediaApplication',
    description: 'Hardware-accelerated media player supporting user-provided M3U playlists, JSON sources, and XMLTV EPG schedules.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function VideoObjectLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Vanto Player Interface Walkthrough',
    description: 'Technical walkthrough of the Vanto Player user interface and playback controls.',
    thumbnailUrl: 'https://vantoplayer.com/logo.png',
    uploadDate: '2026-07-25T08:00:00+00:00',
    contentUrl: 'https://vantoplayer.com',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbListLd({ items }: { items: { name: string; item: string }[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ArticleLd({
  title,
  description,
  datePublished,
  dateModified,
  slug,
  authorName = 'Vanto Player Engineering Team',
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  slug: string;
  authorName?: string;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    inLanguage: 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://vantoplayer.com/blog/${slug}`,
    },
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://vantoplayer.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vanto Player',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vantoplayer.com/logo.png',
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: 'https://vantoplayer.com/logo.png',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQPageLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
