'use client';

import { useState } from 'react';
import styles from './faq.module.scss';

export default function FaqItems({
  images,
  headings,
  descriptions,
  arrow,
  length,
}: {
  images: React.ReactNode[];
  headings: React.ReactNode[];
  descriptions: React.ReactNode[];
  arrow: React.ReactNode;
  length: number;
}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleButtonClick = (i: number) => {
    if (i == activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(i);
    }
  };

  return (
    <>
      {Array.from({ length: length }).map((_, i) => (
        <details
          key={i}
          className={styles.item}
          data-selected={activeIndex == i}
        >
          <summary
            className={styles.button}
            onClick={() => handleButtonClick(i)}
          >
            {images[i]}

            {headings[i]}
            <div className={styles.svgWrapper}>{arrow}</div>
          </summary>
          {descriptions[i]}
        </details>
      ))}
    </>
  );
}
