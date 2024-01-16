import { type homepage } from '@/types/_pages/homepage';
import { sanityFetch } from '@/utils/sanity-client';
import Hero from '@/components/_homepage/hero/hero';

export default async function IndexPage() {
  const { hero_Cta, hero_Image, hero_Paragraph, hero_Subheading, hero_Heading } = await getData();
  return (
    <>
      <Hero data={{ hero_Cta, hero_Image, hero_Paragraph, hero_Subheading, hero_Heading }}></Hero>
    </>
  );
}

async function getData() {
  const { page } = await sanityFetch<homepage>({
    query: /* groq */ `{
      "page": *[_id=="IndexPage"][0]{
        hero_Cta {
          theme,
          href,
          text,
        },
        hero_Image {
          asset -> {
            url,
            altText,
            metadata {
              lqip,
              dimensions {
                width,
                height
              }
            }
          }
        },
        hero_Paragraph,
        hero_Subheading,
        hero_Heading
      }
    }`,
  });
  return page;
}
