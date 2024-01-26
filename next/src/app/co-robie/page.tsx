import { sanityFetch } from '@/utils/sanity-client';
import { type ContentItem, type MyWorkPage } from '@/types/_pages/MyWorkPage';
import Faq from '@/components/_global/faq/faq';
import { type FAQ } from '@/types/_global/FAQ';
import { type Tiles } from '@/types/_global/Tiles';
import TilesComponent from '@/components/_global/tilesComponent/tilesComponent';
import NewsletterSection from '@/components/_global/newsletterSection/newsletterSection';
import { type Newsletter } from '@/types/_global/Newsletter';
import ContactFormSection from '@/components/_global/contactFormSection/contactFormSection';
import { type ContactForm } from '@/types/_global/ContactForm';
import { type Cards } from '@/types/_global/Cards';
import CardsComponent from '@/components/_global/cardsComponent/cardsComponent';
import ProcessComponent from '@/components/_global/processComponent/processComponent';
import { type Process } from '@/types/_global/Process';
import SmallTilesComponent from '@/components/_global/smallTilesComponent/smallTilesComponent';
import SEO from '@/global/Seo';

export async function generateMetadata() {
  const { seo } = await getMetadata();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: '/co-robie',
  });
}

export default async function MyWorkPage() {
  const { content } = await getData();

  const mappedComponents = (component: ContentItem, i: number) => ({
    tiles: (
      <TilesComponent
        data={component as Tiles}
        key={i}
      />
    ),
    cards: (
      <CardsComponent
        data={component as Cards}
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
    process: (
      <ProcessComponent
        data={component as Process}
        key={i}
      />
    ),
    tilesSmall: (
      <SmallTilesComponent
        data={component as Tiles}
        key={i}
      />
    ),
  });

  return (
    <>
      {content.map((component, i) => {
        return mappedComponents(component, i)[component._type] as JSX.Element;
      })}
    </>
  );
}

async function getMetadata() {
  const { page } = await sanityFetch<MyWorkPage>({
    query: /* groq */ `{
      "page": *[_id=="MyWorkPage"] {
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
  const { page } = await sanityFetch<MyWorkPage>({
    query: /* groq */ `{
      "page": *[_id=="MyWorkPage"][0]{
        content[] {
          _type,
          heading,
          description,
          subheading,
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
          },
          cards[] {
            title,
            pluses[],
            plusesDescription,
            description,  
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
          faq[] {
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
            }
          },
          proceses[] {
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
          formCta {
            theme,
            text
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
      }
    }`,
  });
  return page;
}
