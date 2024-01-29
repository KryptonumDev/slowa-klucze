import CaseStudiesComponent from '@/components/_global/caseStudiesComponent/caseStudiesComponent';
import ContactFormSection from '@/components/_global/contactFormSection/contactFormSection';
import Faq from '@/components/_global/faq/faq';
import NewsletterSection from '@/components/_global/newsletterSection/newsletterSection';
import SliderComponent from '@/components/_global/sliderComponent/sliderComponent';
import { type CaseStudies } from '@/types/_global/CaseStudies';
import { type ContactForm } from '@/types/_global/ContactForm';
import { type FAQ } from '@/types/_global/FAQ';
import { type Newsletter } from '@/types/_global/Newsletter';
import { type Slider } from '@/types/_global/Slider';
import type { CooperationEffectsPage, ContentItem } from '@/types/_pages/CooperationEffectsPage';
import { sanityFetch } from '@/utils/sanity-client';

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
  });

  return (
    <>
      {content.map((component, i) => {
        return mappedComponents(component, i)[component._type] as JSX.Element;
      })}
    </>
  );
}

async function getData() {
  const { page } = await sanityFetch<CooperationEffectsPage>({
    query: /* groq */ `
      {
        "page": *[_id=="CooperationEffectsPage"][0] {
          content[] {
            _type,
            description,
            subheading,
            heading,
            centralizedHeading {
              heading,
              description,
              title,
              cta {
                theme,
                href,
                text
              }
            },
            centralizedHeading2 {
              heading,
              description,
              title,
              cta {
                theme,
                href,
                text
              }
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
              title,
              description
            },
            slides[] {
              heading,
              description,
              url,
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
            },
            formCta {
              theme,
              text,
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
            projects[] {
              projectName,
              heading,
              assumptions[] {
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
              quote {
                heading,
                quote
              },
              projectDescription[] {
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
      }
    `,
  });
  return page;
}