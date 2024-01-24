import styles from './cardsComponent.module.scss';
import { type Cards } from '@/types/_global/Cards';
import CentralizedHeading from '@/components/ui/centralizedHeading/centralizedHeading';
import Img from '@/components/ui/Img';
import Markdown from '@/components/ui/Markdown';

export default function CardsComponent({ data: { centralizedHeading, cards } }: { data: Cards }) {
  return (
    <section className={styles.cardsComponent}>
      <div className={` ${styles.componentWrapper} maxWidth`}>
        <CentralizedHeading
          data={centralizedHeading}
          backgroundColor='var(--background)'
        />
        <div className={styles.cards}>
          {cards.map(({ description, icon, title, pluses, plusesDescription }, i) => (
            <div
              className={styles.card}
              key={i}
            >
              <header>
                <Img
                  className={styles.icon}
                  data={icon}
                />
                <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
              </header>
              <Markdown className={styles.description}>{description}</Markdown>
              <Markdown className={styles.plusesDescription}>{plusesDescription}</Markdown>
              {pluses.map((plus, i) => (
                <div
                  className={styles.plus}
                  key={i}
                >
                  <PlusIcon className={styles.plusIcon} />
                  <Markdown className={styles.plusDescription}>{plus}</Markdown>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PlusIcon({className}: {className?: string}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      fill='none'
      viewBox='0 0 32 32'
      className={className}
    >
      <path
        stroke='#25666A'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M11.333 16.667L14 19.333l6.666-6.666'
      ></path>
      <path
        stroke='#25666A'
        strokeLinecap='round'
        strokeWidth='2'
        d='M9.334 4.45A13.272 13.272 0 0116 2.667c7.364 0 13.334 5.97 13.334 13.333 0 7.364-5.97 13.333-13.334 13.333-7.363 0-13.333-5.97-13.333-13.333 0-2.429.65-4.706 1.784-6.667'
      ></path>
    </svg>
  );
}
