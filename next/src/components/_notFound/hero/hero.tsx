import styles from './hero.module.scss';
import { type Props } from './hero.types';
import Button from '@/components/ui/button/Button';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';

export default function Hero({ data: { hero_Cta, hero_Description, hero_Heading, hero_Image, hero_Title } }: Props) {
  return (
    <section className={styles.hero}>
      <header>
        <Markdown.h1 className={styles.heading}>{hero_Heading}</Markdown.h1>
        <div className={styles.contents}>
          <Markdown.h3>{hero_Title}</Markdown.h3>
          <Markdown>{hero_Description}</Markdown>
        </div>
        <Button
          data={hero_Cta}
          svg={false}
          className={styles.button}
        />
      </header>
      <Img
        className={styles.image}
        data={hero_Image}
      />
    </section>
  );
}
