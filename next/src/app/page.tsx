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
import { type BlogReference } from '@/types/_global/BlogReference';
import BlogReferenceComponent from '@/components/_global/blogReferenceComponent';
import SEO from '@/global/Seo';

export async function generateMetadata() {
  const { seo } = await getMetadata();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: '/',
  });
}

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
    blogReference: (
      <BlogReferenceComponent
        data={component as BlogReference}
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

async function getMetadata() {
  const { page } = await sanityFetch<homepage>({
    query: /* groq */ `{
      "page": *[_id=="IndexPage"][0] {
      seo {
       title,
       description
     }
   }
    }`,
  });
  return page;
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
        _type,
        _type == "blogReference" => {
        cta {
          href,
          theme,
          text
        },
          heading,
          description,
          title,
          blogReference[]-> {
            content[],
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
            categories[] -> {
              name
            },
            slug {
              current
            },
            hero_Description,
            hero_Title,
          }
        },
        _type == "tiles" => {
          centralizedHeading {
            description,
            title,
            heading,
            cta {
              theme,
              href,
              text
            }
          },
          list[] {
            description,
            title,
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
          }
        },
        _type == "slider" => {
          centralizedHeading {
            heading,
            description,
            title,
            cta {
              theme,
              href,
              text
            },
          },
          centralizedHeading2 {
            heading,
            description,
            title,
            cta {
              theme,
              href,
              text
            },
          },
          slides[] {
            description,
            url,
            heading,
            rating,
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
        _type == "contactForm" => {
          subheading,
          heading,
          formCta {
            theme,
            text
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
          }
        },
        _type == "faq" => {
          description,
          title,
          heading,
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
          centralizedHeading {
            cta {
              theme,
              text,
              href
            },
            title,
            description,
            heading
          },
          faq[] {
            description,
            title,
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
          }
        },
        _type == "newsletter" => {
          description,
          subheading,
          heading,
          formCta {
            theme,
            text,
            href
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
          card {
            heading,
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
          }
        }
        },
      }
    }`,
  });
  return page;
}
