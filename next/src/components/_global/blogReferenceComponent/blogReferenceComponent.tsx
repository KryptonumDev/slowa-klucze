import Link from 'next/link';
import SwiperComponent from './swiperComponent';
import styles from './blogReferenceComponent.module.scss';
import Heading from '@/components/ui/heading/Heading';
import { type BlogReference } from '@/types/_global/BlogReference';
import Markdown from '@/components/ui/Markdown';
import Button from '@/components/ui/button/Button';
import Img from '@/components/ui/Img';

export default function BlogReferenceComponent({
  data: { blogReference, cta, description, heading, title },
}: {
  data: BlogReference;
}) {
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
                <Img
                  data={hero_Image}
                  className={styles.image}
                />
              </Link>
              <Markdown.h3 className={styles.title}>{hero_Title}</Markdown.h3>
              <div className={styles.overlay}>
                <Markdown className={styles.description}>{hero_Description}</Markdown>
              </div>
              <Link
                href={`/blog/${current}`}
                className={styles.link}
              >
                Sprawdź więcej
              </Link>
            </div>
          ))}
        </SwiperComponent>
      </div>
    </section>
  );
}
