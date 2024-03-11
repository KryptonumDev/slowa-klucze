'use client';

import 'swiper/css';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import { A11y } from 'swiper/modules';
import styles from './sliderComponent.module.scss';

export default function SwiperComponent({ children, length }: { children: React.ReactNode[]; length: number }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = () => swiperRef.current?.swiper?.slidePrev();

  const handleNext = () => swiperRef.current?.swiper?.slideNext();

  const handleButtonClick = (i: number) => swiperRef.current?.swiper?.slideToLoop(i);
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
            className={styles.slide}
            data-selected={i == activeIndex}
            onClick={() => swiperRef.current?.swiper?.slideToLoop(i)}
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
            className={styles.dot}
            data-selected={i == activeIndex}
            onClick={() => handleButtonClick(i)}
            aria-label={`przejdź do karty numer ${i + 1}`}
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
    <button
      {...props}
      aria-label='poprzednia karta'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='19'
        fill='none'
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
    <button
      {...props}
      aria-label='następna karta'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='19'
        fill='none'
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
