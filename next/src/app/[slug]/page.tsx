import { notFound } from 'next/navigation';
import Hero from '@/components/_homepage/hero/hero';
import type { ContentItem, LandingPage } from '@/types/_pages/LandingPage';
import { sanityFetch } from '@/utils/sanity-client';
import { type CardsList } from '@/types/_global/CardsList';
import CardsListComponent from '@/components/_global/cardsListComponent';

export default async function LandingPage({ params: { slug } }: { params: { slug: string } }) {
  const { hero_Cta, hero_Heading, hero_Image, hero_Paragraph, hero_Subheading, content } = await getData(slug);

  const mappedComponents = (component: ContentItem, i: number) => ({
    cardsList: (
      <CardsListComponent
        data={component as CardsList}
        key={i}
      />
    ),
  });

  return (
    <>
      <Hero data={{ hero_Cta, hero_Image, hero_Paragraph, hero_Subheading, hero_Heading }} />
      {content.map((component, i) => {
        return mappedComponents(component, i)[component._type] as JSX.Element;
      })}
    </>
  );
}

async function getData(slug: string) {
  const { page } = await sanityFetch<LandingPage>({
    query: /* groq */ `{
      "page": *[_type=="LandingPage" && slug.current==$slug][0] {
        hero_Cta {
          text,
          theme,
          href
        },
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
       hero_Paragraph,
       hero_Heading,
       hero_Subheading,
       content[] {
        _type == 'cardsList' => @ {
          _type,
            title,
            description,
            heading,
            centralizedHeading {
            cta {
              text,
              theme,
              href,
            },
            title,
            heading,
            description,
            },
            cards[] {
            heading,
            description
          }
        },
       }
      }
    }`,
    params: { slug },
  });
  !page && notFound();
  return page;
}
