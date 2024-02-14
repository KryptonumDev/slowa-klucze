import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import Hero from '@/components/_homepage/hero/hero';
import type { ContentItem, LandingPage } from '@/types/_pages/LandingPage';
import { sanityFetch } from '@/utils/sanity-client';
import { type CardsList } from '@/types/_global/CardsList';
import CardsListComponent from '@/components/_global/cardsListComponent';
import ProcessComponent from '@/components/_global/processComponent';
import { type Process } from '@/types/_global/Process';
import CardsComponent from '@/components/_global/cardsComponent';
import { type Cards } from '@/types/_global/Cards';
import ContactFormSection from '@/components/_global/contactFormSection';
import { type ContactForm } from '@/types/_global/ContactForm';
import Faq from '@/components/_global/faq/faq';
import { type FAQ } from '@/types/_global/FAQ';
import AchievementShowcaseComponent from '@/components/_global/achievementShowcaseComponent';
import { type AchievementsShowcase } from '@/types/_global/AchievementsSchowcase';
import SliderComponent from '@/components/_global/sliderComponent/sliderComponent';
import { type Slider } from '@/types/_global/Slider';
import CaseStudiesComponent from '@/components/_global/caseStudiesComponent';
import { type CaseStudies } from '@/types/_global/CaseStudies';
import SmallTilesComponent from '@/components/_global/smallTilesComponent';
import { type Tiles } from '@/types/_global/Tiles';
import PartnersComponent from '@/components/_global/partnersComponent';
import { type Partners } from '@/types/_global/Partners';
import ProsAndConsComponent from '@/components/_global/prosAndConsComponent';
import { type ProsAndCons } from '@/types/_global/ProsAndCons';
import OffersComponent from '@/components/_global/offersComponent';
import { type Offers } from '@/types/_global/Offers';

export default async function LandingPage({ params: { slug } }: { params: { slug: string } }) {
  const { hero_Cta, hero_Heading, hero_Image, hero_Paragraph, hero_Subheading, content } = await getData(slug);

  const mappedComponents = (component: ContentItem, i: number) => ({
    cardsList: (
      <CardsListComponent
        data={component as CardsList}
        key={i}
      />
    ),
    process: (
      <ProcessComponent
        data={component as Process}
        key={i}
      />
    ),
    cards: (
      <CardsComponent
        data={component as Cards}
        key={i}
      />
    ),
    contactForm: (
      <ContactFormSection
        data={component as ContactForm}
        key={i}
      />
    ),
    faq: (
      <Faq
        data={component as FAQ}
        key={i}
      />
    ),
    achievementsShowcase: (
      <AchievementShowcaseComponent
        data={component as AchievementsShowcase}
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
    tilesSmall: (
      <SmallTilesComponent
        data={component as Tiles}
        key={i}
      />
    ),
    partners: (
      <PartnersComponent
        data={component as Partners}
        key={i}
      />
    ),
    prosAndCons: (
      <ProsAndConsComponent
        data={component as ProsAndCons}
        key={i}
      />
    ),
    offers: (
      <OffersComponent
        data={component as Offers}
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
      "page": *[_type == "LandingPage" && slug.current == $slug][0] {
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
          _type,
          _type == 'cardsList' => {
            title,
            description,
            heading,
            centralizedHeading {
              cta {
                text,
                theme,
                href
              },
              title,
              heading,
              description
            },
            cards[] {
              heading,
              description
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
          _type == "partners" => {
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
            carousel[] {
              url,
              image {
                asset-> {
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
          _type == 'prosAndCons' => {
            heading,
            cards[] {
              title,
              cards[] {
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
          _type == "offers" => {
            offers[] {
              price,
              description,
              title,
              addition,
              heading,
              cta {
                theme,
                href,
                text
              }
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
          }
        }
      }
    }`,
    params: { slug },
    isDraftMode: draftMode().isEnabled,
  });
  !page && notFound();
  return page;
}
