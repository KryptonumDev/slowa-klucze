import Link from 'next/link';
import styles from './categoryComponent.module.scss';
import { type Page } from '@/types/_pages/BlogPostPage';
import Img from '@/components/ui/Img';
import ReadingTime from '@/components/ui/readingTime/readingTime';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';
import Button from '@/components/ui/button/Button';

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
              sizes='(max-width: 599px) 100vw, (max-width: 899px) 50vw, 33vw'
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
          <Button
            href={`/blog/${entry.slug.current}`}
            className={styles.link}
            theme='borderless'
            svg={false}
          >
            Sprawdź więcej
          </Button>
        </div>
      ))}
    </div>
  );
}
