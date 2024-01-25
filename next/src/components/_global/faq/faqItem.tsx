'use client';

import { useState } from 'react';
import styles from './faq.module.scss';
export default function FaqItem({ data: { Image, Heading, Description, arrow, key } }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleButtonClick = (i: number) => {
    if (i == activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(i);
    }
  };

  return (
    <div className={key == activeIndex ? `${styles.item} ${styles.active}` : styles.item}>
      {Image}
      {Heading}
      <button
        className={styles.icon}
        onClick={() => handleButtonClick(i)}
      >
        {arrow}
      </button>
      {Description}
    </div>
  );
}
