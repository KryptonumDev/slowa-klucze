import styles from './offersComponent.module.scss';
import Heading from '@/components/ui/heading/Heading';
import { type Offers } from '@/types/_global/Offers';
import Markdown from '@/components/ui/Markdown';
import Button from '@/components/ui/button/Button';

export default function OffersComponent({ data: { offers } }: { data: Offers }) {
  return (
    <section className={`${styles.offersComponent} fullWidthBackground`}>
      <div className={styles.offers}>
        {offers.map(({ addition, cta, description, heading, price, title }, i) => (
          <div
            key={i}
            className={styles.offer}
          >
            <Heading
              type='h2'
              className={styles.heading}
            >
              {heading}
            </Heading>
            <div className={styles.content}>
              <Markdown.h3 className={styles.title}>{title}</Markdown.h3>
              <p className={styles.price}>{price}</p>
            </div>
            <Markdown className={styles.list}>{description}</Markdown>
            <div className={styles.additionWrapper}>
              {RoundedPlusIcon()}
              <Markdown>{addition}</Markdown>
            </div>
            <Button
              data={cta}
              svg={false}
              className={styles.button}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function RoundedPlusIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='53'
      height='53'
      fill='none'
    >
      <path
        stroke='url(#a)'
        strokeLinecap='round'
        strokeWidth='4'
        d='M33.85 26.5H26.5m0 0h-7.35m7.35 0v-7.35m0 7.35v7.35'
      ></path>
      <path
        stroke='url(#b)'
        strokeLinecap='round'
        strokeWidth='4'
        d='M14.25 5.278A24.387 24.387 0 0126.5 2C40.031 2 51 12.969 51 26.5S40.031 51 26.5 51 2 40.031 2 26.5c0-4.463 1.193-8.646 3.278-12.25'
      ></path>
      <defs>
        <linearGradient
          id='a'
          x1='34.464'
          x2='17.403'
          y1='14.95'
          y2='15.43'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#134E51'></stop>
          <stop
            offset='1'
            stopColor='#5E8B8D'
          ></stop>
        </linearGradient>
        <linearGradient
          id='b'
          x1='53.047'
          x2='-3.822'
          y1='-12'
          y2='-10.403'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#134E51'></stop>
          <stop
            offset='1'
            stopColor='#5E8B8D'
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
