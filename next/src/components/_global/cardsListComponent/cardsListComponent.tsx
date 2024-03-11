import styles from './cardsListComponent.module.scss';
import Heading from '@/components/ui/heading/Heading';
import { type CardsList } from '@/types/_global/CardsList';
import Markdown from '@/components/ui/Markdown';
import CentralizedHeading from '@/components/ui/centralizedHeading/centralizedHeading';

export default function CardsListComponent({
  data: { cards, centralizedHeading, description, heading, title },
}: {
  data: CardsList;
}) {
  return (
    <section className={styles.cardsListComponent}>
      <header>
        <Heading
          className={styles.heading}
          type='h2'
        >
          {heading}
        </Heading>
        <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
        <Markdown>{description}</Markdown>
      </header>
      <div className={styles.cards}>
        {cards.map(({ description, heading }, i) => (
          <div
            key={i}
            className={styles.cardWrapper}
          >
            <div className={styles.card}>
              <Markdown.h2 className={styles.cardHeading}>{heading}</Markdown.h2>
              <Markdown className={styles.description}>{description}</Markdown>
            </div>
          </div>
        ))}
      </div>
      <CentralizedHeading data={centralizedHeading} className={styles.centralizedHeading}/>
    </section>
  );
}
