import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/impressum', '/datenschutz'],
    },
    sitemap: 'https://www.waschtls-schmankerl.de/sitemap.xml',
    host: 'https://www.waschtls-schmankerl.de',
  };
}
