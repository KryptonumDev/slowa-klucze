import styles from './hero.module.scss';
import { type Props } from './hero.types';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';

export default function Hero({
  data: {
    hero_Heading,
    hero_Subheading,
    hero_ImageTitleSubtitleDescription,
    hero_ImageDescription,
    hero_centralizedIconTitleDescription,
    hero_Image,
  },
}: {
  data: Props;
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <header>
          <Heading
            type='h1'
            className={styles.heading}
          >
            {hero_Heading}
          </Heading>
          <Markdown.h2 className={styles.subheading}>{hero_Subheading}</Markdown.h2>
        </header>
        <Img
          className={styles.icon}
          data={hero_ImageTitleSubtitleDescription.image}
        />
        <Markdown.h3 className={styles.title}>{hero_ImageTitleSubtitleDescription.title}</Markdown.h3>
        <Markdown className={styles.subtitle}>{hero_ImageTitleSubtitleDescription.subtitle}</Markdown>
        <Markdown className={styles.description}>{hero_ImageTitleSubtitleDescription.description}</Markdown>
        <Img
          className={styles.image}
          data={hero_Image}
        />
      </div>
      <div className={styles.imageDescription}>
        <Img
          className={styles.image}
          data={hero_ImageDescription.image}
        />
        <Markdown className={styles.description}>{hero_ImageDescription.description}</Markdown>
      </div>
      <div className={styles.centralizedIconTitleDescription}>
        <div className={styles.iconTitle}>
          <Img
            className={styles.icon}
            data={hero_centralizedIconTitleDescription.image}
          />
          <Markdown.h3 className={styles.title}>{hero_centralizedIconTitleDescription.title}</Markdown.h3>
        </div>
        <Markdown className={styles.description}>{hero_centralizedIconTitleDescription.description}</Markdown>
      </div>
    </section>
  );
}
