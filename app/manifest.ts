import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karakaara – Where Hearts Meet Tradition',
    short_name: 'Karakaara',
    description: "Sri Lanka's premier matrimony platform",
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
