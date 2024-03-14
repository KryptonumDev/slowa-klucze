'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import styles from './achievementShowcaseComponent.module.scss';

export default function Counter({ number, maxNumber }: { number: number; maxNumber: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const baseIntervalTime = (10 * maxNumber) / number;
    const interval = setInterval(() => {
      if (count < number) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, baseIntervalTime);

    return () => clearInterval(interval);
  }, [isInView, count, number, maxNumber]);

  return (
    <h2
      className={styles.counter}
      ref={ref}
    >
      {count}
    </h2>
  );
}
