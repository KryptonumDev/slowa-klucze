import styles from './prosAndConsComponent.module.scss';
import Heading from '@/components/ui/heading/Heading';
import { type ProsAndCons } from '@/types/_global/ProsAndCons';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';

export default function ProsAndConsComponent({ data: { heading, cards } }: { data: ProsAndCons }) {
  return (
    <section className={styles.prosAndConsComponent}>
      <Heading
        type='h2'
        className={styles.heading}
      >
        {heading}
      </Heading>
      <div className={styles.wrapper}>
        {cards.map(({ title, cards }, i) => (
          <div
            className={styles.prosAndCons}
            key={i}
          >
            <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
            <div className={styles.cards}>
              {cards.map(({ description, image }, i) => (
                <div
                  className={styles.card}
                  key={i}
                >
                  <Img
                    className={styles.image}
                    data={image}
                  />
                  <Markdown className={styles.description}>{description}</Markdown>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
