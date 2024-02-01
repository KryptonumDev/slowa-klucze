'use client';

import { useEffect, useRef } from 'react';
import styles from './contentComponent.module.scss';

export default function ContentSection({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth >= 1099) {
        const navElement = document.querySelector('nav.nav:not(.fixed)');
        const section = ref.current as HTMLElement;
        if (navElement) {
          section?.classList?.remove(styles.transform);
        } else {
          section?.classList?.add(styles.transform);
        }
      }
    };
    handleResize();
    window.addEventListener('scroll', handleResize);
    return () => {
      window.removeEventListener('scroll', handleResize);
    };
  }, []);
  return (
    <section
      className={styles.contentComponent}
      ref={ref}
    >
      {children}
    </section>
  );
}
