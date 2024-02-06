import { notFound } from 'next/navigation';
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

export async function generateStaticParams() {
  interface MappedObject {
    category: string;
    number: string;
  }
  interface Category {
    slug: {
      current: string;
    };
  }

  interface Entry {
    categories: Category[];
  }

  interface MappedObject {
    category: string;
    number: string;
  }

  const blogCategories: Entry[] = await getBlogCategories() as unknown as Entry[];

  return blogCategories
    .flatMap((entry: Entry) =>
      entry.categories.map((category: Category) => {
        const categorySlug = category.slug.current;
        return { category: categorySlug };
      })
    )
    .map((obj: MappedObject, index: number, array: MappedObject[]) => ({
      ...obj,
      number: Math.ceil(
        (array.filter((o) => o.category === obj.category).indexOf(obj) + 1) / blogsPerPage
      ).toString(),
    }))
    .filter(
      (value: MappedObject, index: number, self: MappedObject[]) =>
        index === self.findIndex((v) => v.number === value.number && v.category === value.category) &&
        value.number !== '1'
    );
}

export async function generateMetadata({
  params: { number, category },
}: {
  params: { number: string; category: string };
}) {
  const { seo } = await getMetadata();
  return SEO({
    title: seo?.title,
    description: seo?.description,
    url: `/blog/kategoria/${category}/${number}`,
  });
}

async function getBlogCategories() {
  const { allBlogEntries } = await sanityFetch<BlogPage>({
    query: /* groq */ `{
      "allBlogEntries": *[_type=="blog_entries"] {
        categories[]-> {
          slug {
            current
          }
        }
      } 
    }`,
  });
  return allBlogEntries;
}

export default async function blogCategoryPaginationPage({
  params: { category, number },
}: {
  params: { category: string; number: string };
}) {
  const { hero_Heading, hero_Description, hero_Subheading, hero_Form, content } = await getBlogCategoryPaginationData(
    category,
    parseInt(number)
  );

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
        urlBasis={`/blog`}
        key={i}
        selectedCategory={category}
        page={parseInt(number)}
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

async function getBlogCategoryPaginationData(category: string, number: number) {
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
              "totalCount": count(*[_type=="blog_entries" && $category in categories[]->slug.current][]),
              "blogEntries": *[_type=="blog_entries" && $category in categories[]->slug.current][$number-1 ... $blogsPerPage+$number-1] {
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
    params: { blogsPerPage, category, number },
  });
  page.content.forEach((item) => {
    if ('blogEntries' in item) {
      item.blogEntries.length == 0 && notFound();
    }
  });
  return page;
}
