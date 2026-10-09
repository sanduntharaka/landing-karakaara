import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const TITLE = "Karakaara - Sri Lankan Matrimonial Advertisements";
const DESCRIPTION =
  "Post, browse and respond to verified Sri Lankan matrimonial advertisements. Bride and groom wanted ads from Sri Lanka and overseas, with privacy-protected inquiries.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Sri Lankan matrimonial advertisements",
    "matrimonial ads Sri Lanka",
    "bride wanted Sri Lanka",
    "groom wanted Sri Lanka",
    "මංගල දැන්වීම්",
    "marriage proposals Sri Lanka",
    "Sri Lankan diaspora matrimonial",
    "karakaara",
  ],
  authors: [{ name: "Karakaara - Lankovate Technologies" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://karakaara.lk/" },
  openGraph: {
    type: "website",
    url: "https://karakaara.lk/",
    siteName: "Karakaara",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "https://karakaara.lk/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://karakaara.lk/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://karakaara.lk/#organization",
      name: "Karakaara",
      alternateName: "කරකාර",
      url: "https://karakaara.lk",
      logo: {
        "@type": "ImageObject",
        url: "https://karakaara.lk/assets/images/only_logo.png",
      },
      description:
        "A trusted digital platform where Sri Lankan individuals and families can publish, discover, and respond to matrimonial advertisements.",
      slogan: "Traditional values. Modern platform. Meaningful connections.",
      foundingLocation: { "@type": "Country", name: "Sri Lanka" },
    },
    {
      "@type": "WebSite",
      "@id": "https://karakaara.lk/#website",
      url: "https://karakaara.lk",
      name: "Karakaara",
      inLanguage: ["en", "si"],
      publisher: { "@id": "https://karakaara.lk/#organization" },
    },
    {
      "@type": "MobileApplication",
      name: "Karakaara",
      alternateName: "කරකාර",
      operatingSystem: "Android",
      applicationCategory: "LifestyleApplication",
      url: "https://play.google.com/store/apps/details?id=com.lankovate.karakaara",
      offers: { "@type": "Offer", price: "0", priceCurrency: "LKR" },
      publisher: { "@id": "https://karakaara.lk/#organization" },
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
