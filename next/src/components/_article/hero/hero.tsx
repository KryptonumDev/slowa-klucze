import styles from './hero.module.scss';
import { type Props } from './hero.types';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';

export default function Hero({ data: { hero_Description, hero_Image, hero_Title, categories } }: Props) {
  return (
    <section className={`${styles.hero} fullWidthBackground`}>
      <header>
        <div className={styles.categories}>
          {categories.map(({ name }, i) => (
            <Heading
              className={styles.heading}
              key={i}
              type={'h2'}
            >
              {name}
            </Heading>
          ))}
        </div>
        <Markdown.h2 className={styles.title}>{hero_Title}</Markdown.h2>
        <Markdown className={styles.description}>{hero_Description}</Markdown>
      </header>
      <Img
        className={styles.image}
        data={hero_Image}
      />
    </section>
  );
}
