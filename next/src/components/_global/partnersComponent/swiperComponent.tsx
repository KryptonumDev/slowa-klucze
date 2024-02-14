'use client';

import 'swiper/css';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import { A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import styles from './partnersComponent.module.scss';

export default function SwiperComponent({ children, length }: { children: React.ReactNode; length: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        loop={true}
        centeredSlides={true}
        modules={[A11y, Autoplay, EffectCoverflow]}
        className={styles.slider}
        onSlideChange={(slider) => setActiveIndex(slider.realIndex)}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            spaceBetween: 20,
            slidesPerView: 1.5,
          },
          599: {
            spaceBetween: 30,
            slidesPerView: 2.5,
          },
          999: {
            spaceBetween: 40,
            slidesPerView: 3.5,
          },
          1349: {
            spaceBetween: 40,
            slidesPerView: 4.5,
          },
          1600: {
            spaceBetween: 50,
            slidesPerView: 5.0,
          },
        }}
        speed={1000}
        slidesPerView={5.5}
        effect='coverflow'
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {Array.from({ length: length }).map((_, i) => (
          <SwiperSlide
            className={styles.slide}
            data-selected={i == activeIndex}
            key={i}
          >
            {children[i]}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
