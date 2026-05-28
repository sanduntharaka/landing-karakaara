import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Karakaara - Sri Lankan Matrimony Platform',
  description:
    'Karakaara is a modern Sri Lankan matrimony platform for structured, private, and family-ready marriage proposals.',
  keywords: [
    'Sri Lankan matrimony',
    'marriage proposals',
    'Sinhala wedding',
    'Lanka marriage app',
    'traditional matchmaking',
    'karakaara',
    'poruwa ceremony',
    'sinhala marriage',
    'diaspora',
  ],
  authors: [{ name: 'Karakaara - Lankovate' }],
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://karakaara.lk/' },
  openGraph: {
    type: 'website',
    url: 'https://karakaara.lk/',
    siteName: 'Karakaara',
    title: 'Karakaara - Sri Lankan Matrimony Platform',
    description:
      'Structured, private, and family-ready marriage proposals for Sri Lankans.',
    images: [
      {
        url: 'https://karakaara.lk/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karakaara - Sri Lankan Matrimony Platform',
    description:
      'Structured, private, and family-ready marriage proposals for Sri Lankans.',
    images: ['https://karakaara.lk/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://karakaara.lk/#organization',
      name: 'Karakaara',
      url: 'https://karakaara.lk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://karakaara.lk/assets/images/only_logo.png',
      },
      description:
        'Sri Lankan matrimony platform for structured, private marriage proposals',
      foundingLocation: { '@type': 'Country', name: 'Sri Lanka' },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://karakaara.lk/#website',
      url: 'https://karakaara.lk',
      name: 'Karakaara',
      inLanguage: ['en', 'si'],
      publisher: { '@id': 'https://karakaara.lk/#organization' },
    },
    {
      '@type': 'MobileApplication',
      name: 'Karakaara',
      operatingSystem: 'Android',
      applicationCategory: 'LifestyleApplication',
      url: 'https://play.google.com/store/apps/details?id=com.lankovate.karakaara',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'LKR' },
      publisher: { '@id': 'https://karakaara.lk/#organization' },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="LK" />
        <meta name="geo.country" content="Sri Lanka" />
        <meta name="language" content="English" />
        <link rel="icon" type="image/png" href="/assets/images/only_logo.png" />
        <link rel="apple-touch-icon" href="/assets/images/only_logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
