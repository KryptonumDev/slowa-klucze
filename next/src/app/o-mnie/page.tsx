import Hero from '@/components/_aboutMe/hero/hero';
import ContactFormSection from '@/components/_global/contactFormSection';
import Faq from '@/components/_global/faq';
import NewsletterSection from '@/components/_global/newsletterSection';
import NumberedCardsSection from '@/components/_global/numberedCardsSection/numberedCardsSection';
import TestimonialComponent from '@/components/_global/testimonialComponent/testimonialComponent';
import SEO from '@/global/Seo';
import { type ContactForm } from '@/types/_global/ContactForm';
import { type FAQ } from '@/types/_global/FAQ';
import { type Newsletter } from '@/types/_global/Newsletter';
import { type NumberedCards } from '@/types/_global/NumberedCards';
import { type Testimonial } from '@/types/_global/Testimonial';
import { type ContentItem, type AboutMePage } from '@/types/_pages/AboutMePage';
import { sanityFetch } from '@/utils/sanity-client';

export async function generateMetadata() {
  const { seo } = await getMetadata();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: '/o-mnie',
  });
}

export default async function aboutMePage() {
  const {
    hero_Heading,
    hero_Subheading,
    hero_ImageTitleDescription,
    hero_ImageDescription,
    hero_centralizedIconTitleDescription,
    hero_Image,
    content,
  } = await getData();

  const mappedComponents = (component: ContentItem, i: number) => ({
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
    numberedCards: (
      <NumberedCardsSection
        data={component as NumberedCards}
        key={i}
      />
    ),
    testimonial: (
      <TestimonialComponent
        data={component as Testimonial}
        key={i}
      />
    ),
  });

  return (
    <>
      <Hero
        data={{
          hero_Heading,
          hero_Subheading,
          hero_ImageTitleDescription,
          hero_ImageDescription,
          hero_centralizedIconTitleDescription,
          hero_Image,
        }}
      />
      {content.map((component, i) => {
        return mappedComponents(component, i)[component._type] as JSX.Element;
      })}
    </>
  );
}

async function getMetadata() {
  const { page } = await sanityFetch<AboutMePage>({
    query: /* groq */ `{
      "page": *[_id=="AboutMePage"][0] {
      seo {
       ...,
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

async function getData() {
  const { page } = await sanityFetch<AboutMePage>({
    query: /* groq */ `{
      "page": *[_id == "AboutMePage"][0] {
        hero_Heading,
        hero_Subheading,
        hero_ImageTitleDescription {
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
          description,
          title
        },
        hero_ImageDescription {
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
          description
        },
        hero_centralizedIconTitleDescription {
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
        content[] {
          _type,
          centralizedHeading {
            description,
            title,
            heading,
            cta {
              theme,
              text,
              href
            }
          },
          cards[],
          description,
          socials[],
          title,
          subheading,
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
          formCta {
            theme,
            text
          },
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
            description,
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
            }
          }
        }
      }
    }`,
  });
  return page;
}
