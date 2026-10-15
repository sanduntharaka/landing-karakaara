import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL, pageMetadata } from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({ path: "/", title: TITLE, description: DESCRIPTION }),
  applicationName: SITE_NAME,
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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
      email: "contact@karakaara.lk",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: "+94-76-770-0657",
        email: "contact@karakaara.lk",
        areaServed: "LK",
        availableLanguage: ["English", "Sinhala"],
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61590546328729",
        "https://play.google.com/store/apps/details?id=com.lankovate.karakaara",
      ],
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
