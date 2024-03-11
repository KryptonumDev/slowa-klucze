import Link from 'next/link';
import SwiperComponent from './swiperComponent';
import styles from './blogReferenceComponent.module.scss';
import { type HighlightedBlogDataProps } from './blogReferenceComponent.types';
import Heading from '@/components/ui/heading/Heading';
import { type BlogReference } from '@/types/_global/BlogReference';
import Markdown from '@/components/ui/Markdown';
import Button from '@/components/ui/button/Button';
import Img from '@/components/ui/Img';
import { sanityFetch } from '@/utils/sanity-client';

export default async function BlogReferenceComponent({
  data: { blogReference, cta, description, heading, title },
}: {
  data: BlogReference;
}) {
  const highlightedBlog = await getHiglhightedBlogData();

  return (
    <section className={`${styles.blogReferenceComponent} fullWidthBackground`}>
      <header>
        <div className={styles.contentWrapper}>
          <Heading
            className={styles.heading}
            type='h2'
          >
            {heading}
          </Heading>
          <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
          <Markdown className={styles.description}>{description}</Markdown>
        </div>
        <Button
          data={cta}
          svg={false}
          className={styles.button}
        />
      </header>
      <div className={styles.blogEntries}>
        <SwiperComponent length={blogReference.length}>
          {blogReference.map(({ hero_Description, hero_Image, hero_Title, slug: { current } }, i) => (
            <div
              className={styles.blogEntry}
              key={i}
            >
              <Link
                href={`blog/${current}`}
                className={styles.blogLink}
              >
                {highlightedBlog === current && <div className={styles.card}> {starIcon()}Wyróżnione</div>}
                <Img
                  data={hero_Image}
                  className={styles.image}
                  sizes='(max-width: 599px) 100vw, (max-width: 999px) 75vw, 33vw'
                />
              </Link>
              <Markdown.h3 className={styles.title}>{hero_Title}</Markdown.h3>
              <div className={styles.overlay}>
                <Markdown className={styles.description}>{hero_Description}</Markdown>
              </div>
              <Button
                theme='borderless'
                svg={false}
                href={`/blog/${current}`}
                className={styles.link}
              >
                Sprawdź więcej
              </Button>
            </div>
          ))}
        </SwiperComponent>
      </div>
    </section>
  );
}

async function getHiglhightedBlogData() {
  const { content } = await sanityFetch<HighlightedBlogDataProps>({
    query: /* groq */ `
      *[_id=='blogPage'][0] {
        content[] {
          _type=='reference' => @-> {
            'slug': slug.current
          }
        }
      }
    `,
  });
  const slug = content.filter((item) => item.slug).map((item) => item.slug)[0];
  return slug;
}

function starIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='31'
      height='31'
      fill='none'
    >
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeWidth='2'
        d='M7.155 9.488c-3.443.779-5.165 1.168-5.575 2.486-.41 1.317.765 2.69 3.112 5.435l.607.71c.668.78 1.001 1.17 1.151 1.653.15.482.1 1.003-.001 2.043l-.092.948c-.355 3.663-.532 5.494.54 6.308 1.073.814 2.685.072 5.909-1.413l.834-.384c.916-.422 1.374-.633 1.86-.633s.944.212 1.86.633l.834.384c3.224 1.485 4.836 2.227 5.909 1.413 1.072-.814.895-2.645.54-6.308m1.665-5.354c2.347-2.746 3.521-4.118 3.112-5.435-.41-1.318-2.132-1.707-5.575-2.486l-.891-.202c-.979-.221-1.468-.332-1.86-.63-.394-.299-.646-.75-1.15-1.655l-.458-.823c-1.774-3.18-2.66-4.771-3.986-4.771s-2.212 1.59-3.986 4.771'
      ></path>
    </svg>
  );
}