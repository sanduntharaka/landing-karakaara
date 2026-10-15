import type { Metadata } from "next";

export const SITE_URL = "https://karakaara.lk";
export const SITE_NAME = "Karakaara";

export const OG_IMAGE = {
  url: "/assets/images/hero_image.png",
  width: 1200,
  height: 675,
  alt: "Karakaara - Sri Lankan matrimonial advertisements",
};

// Next.js merges metadata shallowly, so a page that sets `openGraph` or
// `twitter` replaces the root layout's values entirely. Build both here so
// every page keeps the share image and gets its own title/description.
export function pageMetadata({
  path,
  title,
  description,
  shareDescription = description,
}: {
  path: string;
  title: string;
  description: string;
  shareDescription?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE_NAME,
      title,
      description: shareDescription,
      images: [OG_IMAGE],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: shareDescription,
      images: [OG_IMAGE.url],
    },
  };
}
