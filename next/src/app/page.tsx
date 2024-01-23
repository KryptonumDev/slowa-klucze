import type { ContentItem, homepage } from '@/types/_pages/homepage';
import { sanityFetch } from '@/utils/sanity-client';
import Hero from '@/components/_homepage/hero/hero';
import { type Tiles } from '@/types/_global/Tiles';
import TilesComponent from '@/components/_global/tilesComponent/tilesComponent';
import SliderComponent from '@/components/_global/sliderComponent/sliderComponent';
import { type Slider } from '@/types/_global/Slider';
import Faq from '@/components/_global/faq/faq';
import { type FAQ } from '@/types/_global/FAQ';
import { type Newsletter } from '@/types/_global/Newsletter';
import NewsletterSection from '@/components/_global/newsletterSection/newsletterSection';
import { type ContactForm } from '@/types/_global/ContactForm';
import ContactFormSection from '@/components/_global/contactFormSection/contactFormSection';

export default async function IndexPage() {
  const { hero_Cta, hero_Image, hero_Paragraph, hero_Subheading, hero_Heading, content } = await getData();

  const mappedComponents = (component: ContentItem, i: number) => ({
    tiles: (
      <TilesComponent
        data={component as Tiles}
        key={i}
      />
    ),
    slider: (
      <SliderComponent
        data={component as Slider}
        key={i}
      />
    ),
    faq: (
      <Faq
        data={component as FAQ}
        key={i}
      />
    ),
    newsletter: (
      <NewsletterSection
        data={component as Newsletter}
        key={i}
      />
    ),
    contactForm: (
      <ContactFormSection
        data={component as ContactForm}
        key={i}
      />
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
        faq[] {
            title,
            description,
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
        card {
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
        },
      }
    }`,
  });
  return page;
}
