import styles from './processComponent.module.scss';
import Img from '@/components/ui/Img';
import { type Process } from '@/types/_global/Process';
import CentralizedHeading from '@/components/ui/centralizedHeading/centralizedHeading';
import Markdown from '@/components/ui/Markdown';

export default function ProcessComponent({ data: { centralizedHeading, proceses } }: { data: Process }) {
  return (
    <section className={styles.processComponent}>
      <div className={` ${styles.componentWrapper} maxWidth`}>
        <CentralizedHeading
          data={centralizedHeading}
          backgroundColor='var(--light-background)'
        />
        <div className={styles.process}>
          {proceses.map(({ description, image, title }, i) => (
            <div
              className={styles.itemWrapper}
              key={i}
            >
              <div className={styles.item}>
                <Img
                  className={styles.image}
                  data={image}
                />
                <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
                <Markdown className={styles.description}>{description}</Markdown>
              </div>
              {i % 2 == 0 && i + 1 != proceses.length && <Arrow className={styles.arrowRight} />}
              {i % 2 != 0 && i + 1 != proceses.length && <Arrow className={styles.arrowLeft} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='287'
      height='217'
      fill='none'
      viewBox='0 0 287 217'
      className={className}
    >
      <path
        stroke='#EEE'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='6'
        d='M23.5 165.308h178.75c44.873 0 81.25-36.334 81.25-81.154C283.5 39.334 247.124 3 202.25 3M23.5 165.308L72.25 214M23.5 165.308l48.75-48.693M3 3h134.25'
      ></path>
    </svg>
  );
}
