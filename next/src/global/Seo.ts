import { type global } from '@/types/_pages/global';
import { sanityFetch } from '@/utils/sanity-client';

export const domain = 'https://www.slowa-klucze.pl';
export const locale = 'pl_PL';

const SEO = async ({
  title,
  description,
  ogImage,
  url,
  ...props
}: {
  title: string;
  description: string;
  ogImage?: string;
  url: string;
}) => {
  const {
    seo: { og_Img },
  } = await getData();

  const seo = {
    title: title || 'Słowa Klucze', // Zapytaj się Anety po projekcie
    description: description || '',
    url: url || '',
    ogImage: ogImage || og_Img.asset.url,
  };

  const metadata = {
    metadataBase: new URL(domain),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.url,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: seo.title,
      url: seo.url,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    ...props,
  };
  return metadata;
};

async function getData() {
  const { page } = await sanityFetch<global>({
    query: /* groq */ `{
    "page": *[_id=="global"][0] {
      seo {
        og_Img {
          asset -> {
            url
          }
        }
      }
    }
  }`,
  });
  return page;
}

export default SEO;
