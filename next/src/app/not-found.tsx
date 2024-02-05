import { sanityFetch } from '@/utils/sanity-client';
import { type NotFound } from '@/types/_pages/NotFound';
import Hero from '@/components/_notFound/hero/hero';

export default async function NotFound() {
  const { hero_Cta, hero_Description, hero_Heading, hero_Image, hero_Title } = await getData();

  return (
    <Hero
      data={{
        hero_Cta,
        hero_Description,
        hero_Heading,
        hero_Image,
        hero_Title,
      }}
    />
  );
}

async function getData() {
  const { page } = await sanityFetch<NotFound>({
    query: /* groq */ `{
    "page": *[_type=="notFoundPage"][0] {
      hero_Heading,
      hero_Description,
      hero_Image {
        asset -> {
          altText,
          url,
          metadata {
            lqip,
            dimensions {
              height,
              width
            }
          }
        }
      },
      hero_Title,
      hero_Cta {
        theme,
        href,
        text
      }
    }
  }`,
  });
  return page;
}
