import styles from './numberedCardsSection.module.scss';
import Markdown from '@/components/ui/Markdown';
import CentralizedHeading from '@/components/ui/centralizedHeading';
import { type NumberedCards } from '@/types/_global/NumberedCards';

export default function NumberedCardsSection({ data: { cards, centralizedHeading } }: { data: NumberedCards }) {
  return (
    <section className={`${styles.numberedCards} fullWidthBackground`}>
      <CentralizedHeading
        data={centralizedHeading}
        className={styles.centralizedHeading}
      />
      <div className={styles.cards}>
        {cards.map((item, i) => (
          <div
            className={styles.card}
            key={i}
          >
            <Markdown className={styles.decsription}>{item}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
}
