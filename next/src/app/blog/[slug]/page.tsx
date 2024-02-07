import { notFound } from 'next/navigation';
import Hero from '@/components/_article/hero';
import AuthorComponent from '@/components/_global/authorComponent';
import ContentSection from '@/components/_global/contentComponent/contentComponent';
import SEO from '@/global/Seo';
import { type BlogPostPage } from '@/types/_pages/BlogPostPage';
import { sanityFetch } from '@/utils/sanity-client';

export async function generateStaticParams() {
  const allBlogPosts = await getAllBlogPosts();
  return allBlogPosts.map(({ slug }) => ({
    slug: slug.current,
  }));
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  const { seo } = await getMetadata(slug);
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: `/blog/${slug}`,
  });
}

export default async function blogPostPage({ params: { slug } }: { params: { slug: string } }) {
  const { author, categories, content, hero_Description, hero_Image, hero_Title } = await getBlogData(slug);
  return (
    <>
      <Hero data={{ hero_Description, hero_Image, hero_Title, categories }} />
      <ContentSection data={content} />
      <AuthorComponent data={author} />
    </>
  );
}

async function getAllBlogPosts() {
  const { blogPosts } = await sanityFetch<BlogPostPage>({
    query: /* groq */ `{
      "blogPosts": *[_type=="blog_entries"][] {
        slug {
          current
        }
      }
    }`,
  });
  return blogPosts;
}

async function getMetadata(slug: string) {
  const { page } = await sanityFetch<BlogPostPage>({
    query: /* groq */ `{
      "page": *[_type=="blog_entries" && slug.current==$slug][0] {
      seo {
       description,
       title,
     }
   }
    }`,
    params: { slug },
  });
  !page && notFound();
  return page;
}

async function getBlogData(slug: string) {
  const { page } = await sanityFetch<BlogPostPage>({
    query: /* groq */ `{
      "page": *[_type=="blog_entries" && slug.current==$slug][0] {
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
        seo {
          title,
          description
        },
        hero_Description,
        categories[] -> {
          name
        },
        author -> {
          socials[],
          description,
          fullName,
          photo {
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
    }`,
    params: { slug },
  });
  if (!page) {
    notFound();
  }
  return page;
}
