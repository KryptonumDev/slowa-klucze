import Link from 'next/link';
import styles from './categoryComponent.module.scss';
import { type Page } from '@/types/_pages/BlogPostPage';
import Img from '@/components/ui/Img';
import ReadingTime from '@/components/ui/readingTime/readingTime';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';

export default function BlogEntries({ blogEntries }: { blogEntries: Page[] }) {
  return (
    <div className={styles.blogEntries}>
      {blogEntries.map((entry, i) => (
        <div
          key={i}
          className={styles.blogEntry}
        >
          <Link
            href={`blog/${entry.slug.current}`}
            className={styles.blogLink}
          >
            <Img
              data={entry.hero_Image}
              className={styles.image}
            />
            <ReadingTime
              text={JSON.stringify(entry.content, null, 2)}
              isBlogCard={true}
            />
          </Link>
          <div
            className={styles.headingsWrapper}
            key={i}
          >
            {entry.categories.map((category, i) => (
              <Heading
                key={i}
                type='h3'
                className={styles.heading}
              >
                {category.name}
              </Heading>
            ))}
          </div>
          <Markdown.h3 className={styles.title}>{entry.hero_Title}</Markdown.h3>
          <div className={styles.overlay}>
            <Markdown className={styles.description}>{entry.hero_Description}</Markdown>
          </div>
          <Link
            href={`/blog/${entry.slug.current}`}
            className={styles.link}
          >
            Sprawdź więcej
          </Link>
        </div>
      ))}
    </div>
  );
}
