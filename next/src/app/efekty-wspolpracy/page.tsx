import AchievementShowcaseComponent from '@/components/_global/achievementShowcaseComponent';
import BlogReferenceComponent from '@/components/_global/blogReferenceComponent';
import CaseStudiesComponent from '@/components/_global/caseStudiesComponent/caseStudiesComponent';
import ContactFormSection from '@/components/_global/contactFormSection/contactFormSection';
import Faq from '@/components/_global/faq/faq';
import NewsletterSection from '@/components/_global/newsletterSection/newsletterSection';
import SliderComponent from '@/components/_global/sliderComponent/sliderComponent';
import SEO from '@/global/Seo';
import { type AchievementsShowcase } from '@/types/_global/AchievementsSchowcase';
import { type BlogReference } from '@/types/_global/BlogReference';
import { type CaseStudies } from '@/types/_global/CaseStudies';
import { type ContactForm } from '@/types/_global/ContactForm';
import { type FAQ } from '@/types/_global/FAQ';
import { type Newsletter } from '@/types/_global/Newsletter';
import { type Slider } from '@/types/_global/Slider';
import type { CooperationEffectsPage, ContentItem } from '@/types/_pages/CooperationEffectsPage';
import { sanityFetch } from '@/utils/sanity-client';

export async function generateMetadata() {
  const { seo } = await getMetadata();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: '/efekty-wspolpracy',
  });
}

export default async function cooperationEffectsPage() {
  const { content } = await getData();

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
    slider: (
      <SliderComponent
        data={component as Slider}
        key={i}
      />
    ),
    caseStudies: (
      <CaseStudiesComponent
        data={component as CaseStudies}
        key={i}
      />
    ),
    achievementsShowcase: (
      <AchievementShowcaseComponent
        data={component as AchievementsShowcase}
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
  const { page } = await sanityFetch<CooperationEffectsPage>({
    query: /* groq */ `{
      "page": *[_id=="CooperationEffectsPage"][0] {
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
  const { page } = await sanityFetch<CooperationEffectsPage>({
    query: /* groq */ `
      {
  "page": *[_id=="CooperationEffectsPage"][0] {
    content[] {
      _type,
      _type == 'achievementsShowcase' => {
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
        tiles[] {
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
          number,
          description
        }
      },
      _type == "caseStudies" => {
        subheading,
        heading,
        description,
        projects[] {
          projectName,
          heading,
          assumptions[]{
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
          projectContent[] {
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
          quote {
            quote,
            heading
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
}
    `,
    isDraftMode: true,
  });
  return page;
}
