import styles from './hero.module.scss';
import { type Props } from './hero.types';
import Button from '@/components/ui/button/Button';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';

export default function Hero({ data: { hero_Cta, hero_Image, hero_Paragraph, hero_Subheading, hero_Heading } }: Props) {
  return (
    <section className={styles.heroWrapper}>
      <div className={`${styles.hero} maxWidth`}>
        <div className={styles.content}>
          <Heading
            type='h1'
            backgroundColor={'var(--background)'}
          >
            {hero_Heading}
          </Heading>
          <Markdown.h1 className={styles.subheading}>{hero_Subheading}</Markdown.h1>
          <Markdown className={styles.paragraph}>{hero_Paragraph}</Markdown>
          <Button
            data={hero_Cta}
            svg={false}
            theme='secondary'
          />
        </div>
        <Img
          className={styles.img}
          data={hero_Image}
        />
      </div>
    </section>
  );
}
