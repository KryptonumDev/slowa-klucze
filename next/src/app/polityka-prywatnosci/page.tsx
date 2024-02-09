import ContentComponent from '@/components/_global/contentComponent/contentComponent';
import Hero from '@/components/_privacyPolicy/hero';
import SEO from '@/global/Seo';
import { type PrivacyPolicyPage } from '@/types/_pages/PrivacyPolicyPage';
import { sanityFetch } from '@/utils/sanity-client';

export async function generateMetadata() {
  const { seo } = await getMetadata();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: '/polityka-prywatnosci',
  });
}

export default async function privacyPolicyPage() {
  const { content, hero_Title } = await getData();

  return (
    <>
      <Hero data={{ hero_Title }} />
      <ContentComponent data={content} />
    </>
  );
}

async function getMetadata() {
  const { page } = await sanityFetch<PrivacyPolicyPage>({
    query: /* groq */ `{
      "page": *[_id=="privacyPolicyPage"][0] {
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
  const { page } = await sanityFetch<PrivacyPolicyPage>({
    query: /* groq */ `{
      "page": *[_id=="privacyPolicyPage"][0] {
        hero_Title,
        content[] {
            _type,
            _type == 'information' => {
              heading,
              description
            },
            _type == 'imageSource' => {
              source,
              image,
            },
            _type == 'block' => {
              style,
              children[],
              markDefs[],
            },
            _type == 'unorderedList' => {
              array[],
            },
            _type == 'grid2Buttons' => {
              buttons[],
            },
            _type == 'orderedList' => {
              array[],
            },
            _type == 'grid2Images' => {
              source,
              images[],
            },
            _type == 'quote' => {
              quote
            },
            _type == 'ctaWithBackgroundImage' => {
              title,
              subtitle,
              cta {
                href,
                text,
              }
            }
          },
      }
    }`,
  });
  return page;
}
