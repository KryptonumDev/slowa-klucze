import { domain } from '../global/Seo';
import { sanityFetch } from '@/utils/sanity-client';
import { type Sitemap } from '@/types/_sitemap/sitemap';

const currentDate = new Date();
const staticPages = ['/', '/blog', '/polityka-prywatnosci', '/o-mnie', '/wspolpraca', '/uslugi'];

export default async function sitemap() {
  const { landingPages, blogCategories, blogEntries } = await getSitemapData();

  const mappedStaticPages = staticPages.map((slug) => ({
    url: `${domain}${slug}`,
    lastModified: currentDate,
  }));
  const mappedLandingPages = landingPages.map(({ slug: { current: slug } }) => ({
    url: `${domain}/lp/${slug}`,
    lastModified: currentDate,
  }));
  const mappedBlogCategories = blogCategories.map(({ slug: { current: slug } }) => ({
    url: `${domain}/blog/kategoria/${slug}`,
    lastModified: currentDate,
  }));
  const mappedBlogEntries = blogEntries.map(({ slug: { current: slug } }) => ({
    url: `${domain}/blog/${slug}`,
    lastModified: currentDate,
  }));

  return [...mappedStaticPages, ...mappedLandingPages, ...mappedBlogCategories, ...mappedBlogEntries];
}

async function getSitemapData() {
  const { landingPages, blogCategories, blogEntries } = await sanityFetch<Sitemap>({
    query: /* groq */ `
      {
    "landingPages": *[_type=="LandingPage"][] {
      slug {
        current
      }
    },
    "blogCategories": *[_type=="blog_categories"] {
      slug {
        current
      }
    },
    "blogEntries": *[_type=="blog_entries"][] {
      slug {
        current
      }
    }
  }`,
  });
  return { landingPages, blogCategories, blogEntries };
}
