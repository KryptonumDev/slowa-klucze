'use client';
import { useEffect, useState } from 'react';
import styles from './achievementShowcaseComponent.module.scss';

export default function Counter({ number, maxNumber }: { number: number; maxNumber: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const baseIntervalTime = (10 * maxNumber) / number;
    const interval = setInterval(() => {
      if (count < number) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, baseIntervalTime);

    return () => clearInterval(interval);
  }, [count, number, maxNumber]);

  return <h2 className={styles.counter}>{count}</h2>;
}
