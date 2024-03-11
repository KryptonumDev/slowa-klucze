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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (event: React.MouseEvent<HTMLDetailsElement, MouseEvent>, i: number) => {
    event.preventDefault();
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
          open={activeIndex == i}
          onClick={(event: React.MouseEvent<HTMLDetailsElement, MouseEvent>) => handleButtonClick(event, i)}
        >
          <summary className={styles.button}>
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
