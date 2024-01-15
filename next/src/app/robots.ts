import { type MetadataRoute } from 'next';
import { domain } from '../global/Seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${domain}/sitemap.xml`,
  }
}