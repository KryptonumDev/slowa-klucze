import { blogsPerPage } from '@/app-config';
import BlogReferenceSection from '@/components/_blog/blogReferenceSection';
import Hero from '@/components/_blog/hero';
import NewsletterSection from '@/components/_global/newsletterSection';
import { type Newsletter } from '@/types/_global/Newsletter';
import { type ContentItem, type BlogPage } from '@/types/_pages/BlogPage';
import { sanityFetch } from '@/utils/sanity-client';
import { type Page } from '@/types/_pages/BlogPostPage';
import CategoryComponent from '@/components/_blog/categoryComponent';
import { type Category } from '@/types/_blog/Category';
import SEO from '@/global/Seo';

export async function generateMetadata() {
  const { seo } = await getMetadata();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: '/blog',
  });
}

export default async function blogPage() {
  const { hero_Heading, hero_Description, hero_Subheading, hero_Form, content } = await getBlogData();

  const mappedComponents = (component: ContentItem, i: number) => ({
    blog_entries: (
      <BlogReferenceSection
        data={component as Page}
        key={i}
      />
    ),
    category: (
      <CategoryComponent
        data={component as Category}
        urlBasis='/blog'
        key={i}
      />
    ),
    newsletter: (
      <NewsletterSection
        data={component as Newsletter}
        key={i}
      />
    ),
  });

  return (
    <>
      <Hero data={{ hero_Heading, hero_Description, hero_Subheading, hero_Form }} />
      {content.map((component, i) => {
        return mappedComponents(component, i)[component._type] as JSX.Element;
      })}
    </>
  );
}

async function getMetadata() {
  const { page } = await sanityFetch<BlogPage>({
    query: /* groq */ `{
      "page": *[_id=="blogPage"][0] {
        seo {
          description,
          title,
        }
      }
    }`,
  });
  return page;
}

async function getBlogData() {
  const { page } = await sanityFetch<BlogPage>({
    query: /* groq */ `
      {
        "page": *[_id=="blogPage"][0] {
          hero_Heading,
          hero_Description,
          hero_Subheading,
          hero_Form {
            title,
            formCta {
              theme,
              text
            }
          },
          'content': content[]{
            _type == 'reference' => @-> {
              _type,
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
            },
            _type == 'category' => @ {
              _type,
              "categories": *[_type=="blog_categories"][]{
                name,
                slug {
                  current
                },
              },
              "totalCount": count(*[_type=="blog_entries"][]),
              "blogEntries": *[_type=="blog_entries"][0...$blogsPerPage] {
                slug {
                  current
                },
                hero_Description,
                content[],
                categories[] -> {
                  name,
                  slug {
                    current
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
                hero_Title
              }
            },
            _type == 'newsletter' => @ {
              _type,
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
              heading,
              description,
              subheading,
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
      }`,
    params: { blogsPerPage },
    isDraftMode: true,
  });
  return page;
}
