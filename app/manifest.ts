import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karakaara – Sri Lankan Matrimonial Advertisements',
    short_name: 'Karakaara',
    description: 'Post, browse and respond to Sri Lankan matrimonial advertisements',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F1EB',
    theme_color: '#7B1D27',
    icons: [
      {
        src: '/assets/images/only_logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/images/only_logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
