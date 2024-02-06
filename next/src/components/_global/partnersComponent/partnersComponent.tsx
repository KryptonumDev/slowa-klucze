import Link from 'next/link';
import SwiperComponent from './swiperComponent';
import styles from './partnersComponent.module.scss';
import CentralizedHeading from '@/components/ui/centralizedHeading/centralizedHeading';
import { type Partners } from '@/types/_global/Partners';
import Img from '@/components/ui/Img';

export default function PartnersComponent({ data: { carousel, centralizedHeading } }: { data: Partners }) {
  return (
    <section className={styles.partnersComponent}>
      <CentralizedHeading
        data={centralizedHeading}
        className={styles.centralizedHeading}
      />
      <SwiperComponent length={carousel.length}>
          {carousel.map(({ image, url }, i) => (
            <Link
              key={i}
              href={url}
              className={styles.imageWrapper}
            >
              <Img
                data={image}
                className={styles.image}
              />
            </Link>
          ))}
      </SwiperComponent>
    </section>
  );
}
