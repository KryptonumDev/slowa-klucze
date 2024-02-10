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
import BlogReferenceComponent from '@/components/_global/blogReferenceComponent';
import { type BlogReference } from '@/types/_global/BlogReference';

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
    blogReference: (
      <BlogReferenceComponent
        data={component as BlogReference}
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
      "page": *[_id=="MyWorkPage"][0] {
      seo {
        seo {
       title,
       description
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
          _type == "cards" => {
            centralizedHeading {
              description,
              title,
              heading,
              cta {
                text,
                theme,
                href
              }
            },
            cards[] {
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
              },
              description,
              title,
              pluses[],
              plusesDescription
            }
          },
          _type == "process" => {
            centralizedHeading {
              description,
              title,
              heading,
              cta {
                text,
                theme,
                href
              }
            },
            proceses[] {
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
            }
          },
          _type == "tilesSmall" => {
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
            list[] {
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
            }
          },
        }
      }
    }`,
    isDraftMode: true,
  });
  return page;
}
