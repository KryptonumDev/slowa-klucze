import styles from './sliderComponent.module.scss';
import { type Props } from './sliderComponent.types';
import SwiperComponent from './swiperComponent';
import Img from '@/components/ui/Img';
import CentralizedHeading from '@/components/ui/centralizedHeading';
import Markdown from '@/components/ui/Markdown';

export default function SliderComponent({ data: { centralizedHeading, centralizedHeading2, slides } }: Props) {
  return (
    <section className={styles.sliderComponent}>
      <QuotaDecoration />
      <CentralizedHeading
        data={centralizedHeading}
        backgroundColor={'var(--background)'}
        className={`${styles.centralizedHeading} maxWidth`}
      />
      <SwiperComponent length={slides.length}>
        {slides.map(({ description, heading, icon, rating, url }) => (
          <>
            <div className={styles.info}>
              <Img
                className={styles.img}
                data={icon}
              />
              <Markdown className={styles.heading}>{heading}</Markdown>
              <Markdown className={styles.url}>{url}</Markdown>
            </div>
            <div className={styles.rating}>
              {Array.from({ length: rating }).map((_, i) => (
                <Rating key={i} />
              ))}
            </div>
            <Markdown className={styles.description}>{description}</Markdown>
          </>
        ))}
      </SwiperComponent>

      <CentralizedHeading
        data={centralizedHeading2}
        className={`maxWidth`}
      />
    </section>
  );
}

function Rating() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='28'
      height='28'
      fill='none'
      viewBox='0 0 28 28'
    >
      <path
        fill='#2D7C80'
        d='M10.014 4.772C11.788 1.59 12.674 0 14 0s2.212 1.59 3.986 4.772l.458.823c.504.904.756 1.356 1.15 1.654.392.298.881.409 1.86.63l.89.202c3.444.779 5.166 1.169 5.576 2.486.41 1.317-.765 2.69-3.112 5.435l-.607.71c-.668.78-1.001 1.17-1.151 1.653-.15.482-.1 1.003.001 2.044l.092.947c.355 3.663.532 5.494-.54 6.308-1.073.814-2.685.072-5.909-1.412l-.834-.384c-.916-.422-1.374-.633-1.86-.633s-.944.21-1.86.633l-.834.384c-3.224 1.484-4.836 2.226-5.909 1.412-1.072-.814-.895-2.645-.54-6.308l.092-.947c.1-1.041.151-1.562.001-2.044-.15-.483-.483-.873-1.15-1.653l-.608-.71C.845 13.257-.329 11.884.08 10.567.49 9.25 2.212 8.86 5.655 8.08l.891-.202c.979-.221 1.468-.332 1.86-.63.394-.298.646-.75 1.15-1.654l.458-.823z'
      ></path>
    </svg>
  );
}

function QuotaDecoration() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='183'
      height='133'
      fill='none'
      viewBox='0 0 183 133'
      className={styles.quotaDecoration}
    >
      <path
        fill='#DCDCDC'
        d='M7.115 0A7.108 7.108 0 000 7.123V77.34a7.1 7.1 0 007.115 7.123h50.074a41.78 41.78 0 01-17.624 24.588c-6.061 3.791-7.9 11.789-4.108 17.86 3.79 6.073 11.781 7.909 17.838 4.114.137-.089.27-.178.403-.267 18.053-11.778 29.34-31.441 30.593-52.774 0-.226.059-.422.059-.644v-.189c.074-1.436.085-2.884.06-4.346 0-.378-.023-.763-.06-1.14V7.125A7.107 7.107 0 0077.24.003L7.114 0zm98.577 0a7.104 7.104 0 00-7.11 7.123V77.34a7.098 7.098 0 007.11 7.123h50.074a41.785 41.785 0 01-17.621 24.588c-6.065 3.791-7.902 11.789-4.108 17.86 3.786 6.073 11.777 7.909 17.831 4.114.141-.089.274-.178.404-.267 18.056-11.778 29.34-31.441 30.597-52.774 0-.226.064-.422.064-.644v-.189c.066-1.436.081-2.884.055-4.346 0-.378-.023-.763-.055-1.14V7.125a7.113 7.113 0 00-7.115-7.123L105.692 0z'
      ></path>
    </svg>
  );
}