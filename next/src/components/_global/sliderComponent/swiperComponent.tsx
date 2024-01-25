'use client';

import 'swiper/css';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import styles from './sliderComponent.module.scss';

export default function SwiperComponent({ children, length }: { children: React.ReactNode[]; length: number }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const handleButtonClick = (i) => swiperRef.current?.swiper?.slideToLoop(i);
  return (
    <>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1.5}
        modules={[A11y]}
        className={styles.slider}
        loop={true}
        centeredSlides={true}
        onSlideChange={(slider) => setActiveIndex(slider.realIndex)}
        breakpoints={{
          0: {
            spaceBetween: 16,
            slidesPerView: 1.15,
          },
          599: {
            spaceBetween: 16,
            slidesPerView: 1.1,
          },
          1349: {
            spaceBetween: 50,
            slidesPerView: 1.5,
          },
          1600: {
            spaceBetween: 50,
            slidesPerView: 2.0,
          },
        }}
      >
        {Array.from({ length: length }).map((_, i) => (
          <SwiperSlide
            className={i == activeIndex ? `${styles.slide} ${styles.active}` : styles.slide}
            key={i}
          >
            {children[i]}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.controls}>
        <ButtonLeft
          onClick={() => {
            handlePrev();
          }}
        />
        {Array.from({ length: length }).map((_, i) => (
          <button
            key={i}
            className={i == activeIndex ? `${styles.dot} ${styles.active}` : styles.dot}
            onClick={() => handleButtonClick(i) as void}
          />
        ))}
        <ButtonRight
          onClick={() => {
            handleNext();
          }}
        />
      </div>
    </>
  );
}

function ButtonLeft({ ...props }) {
  return (
    <button {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='19'
        fill='none'
        viewBox='0 0 20 19'
      >
        <path
          stroke='#060606'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M19 9.5H1m0 0l7.714 8M1 9.5l7.714-8'
        ></path>
      </svg>
    </button>
  );
}

function ButtonRight({ ...props }) {
  return (
    <button {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='19'
        fill='none'
        viewBox='0 0 20 19'
      >
        <path
          stroke='#060606'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M1 9.5h18m0 0l-7.714-8M19 9.5l-7.714 8'
        ></path>
      </svg>
    </button>
  );
}
