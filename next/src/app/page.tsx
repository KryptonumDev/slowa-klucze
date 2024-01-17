import type { ContentItem, homepage } from '@/types/_pages/homepage';
import { sanityFetch } from '@/utils/sanity-client';
import Hero from '@/components/_homepage/hero/hero';
import { type Tiles } from '@/types/_global/Tiles';
import TilesComponent from '@/components/_global/tilesComponent/tilesComponent';

export default async function IndexPage() {
  const { hero_Cta, hero_Image, hero_Paragraph, hero_Subheading, hero_Heading, content } = await getData();

  const mappedComponents = (component: ContentItem, i: number) => ({
    tiles: (
      <TilesComponent
        data={component as Tiles}
        key={i}
      ></TilesComponent>
    ),
  });

  return (
    <>
      <Hero data={{ hero_Cta, hero_Image, hero_Paragraph, hero_Subheading, hero_Heading }}></Hero>
      {content.map((component, i) => {
        return mappedComponents(component, i)[component._type] as JSX.Element;
      })}
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
        hero_Heading,
        content[] {
    ...,
    image {
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
    list[] {
      ...,
      image {
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
      }
      },
      slides[] {
         ...,
         icon {
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
           }
         }
    }
      }
    }`,
  });
  return page;
}
