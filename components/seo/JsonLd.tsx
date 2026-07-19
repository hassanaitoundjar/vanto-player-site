import React from 'react';

export function OrganizationLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vanto Player',
    url: 'https://vantoplayer.com',
    logo: 'https://vantoplayer.com/logo.png',
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
    operatingSystem: 'Android, Windows, macOS, Linux, Web',
    applicationCategory: 'MultimediaApplication',
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
    name: 'Vanto Player Features',
    description: 'A quick overview of the Vanto Player media player features.',
    thumbnailUrl: 'https://vantoplayer.com/logo.png',
    uploadDate: '2023-01-01T08:00:00+08:00',
    contentUrl: 'https://vantoplayer.com',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
