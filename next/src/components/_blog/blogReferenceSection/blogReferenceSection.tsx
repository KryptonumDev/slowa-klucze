import styles from './blogReferenceSection.module.scss';
import Img from '@/components/ui/Img';
import { type Page } from '@/types/_pages/BlogPostPage';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';
import Button from '@/components/ui/button/Button';
import ReadingTime from '@/components/ui/readingTime/readingTime';

export default function BlogReferenceSection({
  data: {
    hero_Description,
    hero_Image,
    hero_Title,
    categories,
    content,
    slug: { current },
  },
}: {
  data: Page;
}) {
  return (
    <section className={`${styles.blogReferenceSection} fullWidthBackground`}>
      <div className={styles.imageWrapper}>
        <div className={styles.card}>
          {starIcon()} <span>Wyróżnione</span>
        </div>
        <Img
          data={hero_Image}
          className={styles.image}
        />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.categories}>
          {categories &&
            categories.map((category, i) => (
              <Heading
                className={styles.heading}
                type='h1'
                key={i}
              >
                {category.name}
              </Heading>
            ))}
        </div>
        <Markdown.h2 className={styles.title}>{hero_Title}</Markdown.h2>
        <Markdown>{hero_Description}</Markdown>
        <ReadingTime text={JSON.stringify(content, null, 2)}/>
        <Button
          href={`/blog/${current}`}
          theme='borderless'
          svg={false}
          className={styles.button}
        >
          Sprawdź więcej
        </Button>
      </div>
    </section>
  );
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
