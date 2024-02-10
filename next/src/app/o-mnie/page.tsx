import { draftMode } from 'next/headers';
import Hero from '@/components/_aboutMe/hero/hero';
import BlogReferenceComponent from '@/components/_global/blogReferenceComponent';
import ContactFormSection from '@/components/_global/contactFormSection';
import Faq from '@/components/_global/faq';
import NewsletterSection from '@/components/_global/newsletterSection';
import NumberedCardsSection from '@/components/_global/numberedCardsSection/numberedCardsSection';
import TestimonialComponent from '@/components/_global/testimonialComponent/testimonialComponent';
import SEO from '@/global/Seo';
import { type BlogReference } from '@/types/_global/BlogReference';
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
    hero_ImageTitleSubtitleDescription,
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
    blogReference: (
      <BlogReferenceComponent
        data={component as BlogReference}
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
          hero_ImageTitleSubtitleDescription,
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
       title,
       description
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
        hero_ImageTitleSubtitleDescription {
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
          title,
          subtitle
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
          _type == "numberedCards" => {
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
            cards[]
          },
          _type == "testimonial" => {
            title,
            subheading,
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
            },
            socials[] {
            href,
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
            },
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
          },
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
        }
      }
    }`,
    isDraftMode: draftMode().isEnabled,
  });
  return page;
}
