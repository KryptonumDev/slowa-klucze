'use client';

import { useState } from 'react';
import styles from './faq.module.scss';
import { type Props } from './faq.types';
import Img from '@/components/ui/Img';
import Markdown from '@/components/ui/Markdown';
import Heading from '@/components/ui/heading/Heading';
import CentralizedHeading from '@/components/ui/centralizedHeading/centralizedHeading';

export default function Faq({ data: { centralizedHeading, description, faq, image, title, heading } }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.faqWrapper}>
      <div className={`${styles.faq} maxWidth`}>
        <header>
          <Heading
            type='h2'
            backgroundColor={'var(--background)'}
          >
            {heading}
          </Heading>
          <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
          <Markdown className={styles.description}>{description}</Markdown>
        </header>
        <div className={styles.faqList}>
          <Img
            className={styles.image}
            data={image}
          />
          <div className={styles.items}>
            {faq.map(({ heading, description }, i) => (
              <div
                className={i == activeIndex ? `${styles.item} ${styles.active}` : styles.item}
                key={i}
              >
                <ChartIcon className={styles.chart} />
                <Markdown.h4 className={styles.heading}>{heading}</Markdown.h4>
                <button
                  className={styles.icon}
                  onClick={() => setActiveIndex(i)}
                >
                  <Arrow />
                </button>
                <Markdown className={styles.description}>{description}</Markdown>
              </div>
            ))}
          </div>
        </div>
        <CentralizedHeading data={centralizedHeading} />
      </div>
    </section>
  );
}

function ChartIcon({ ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='52'
      height='53'
      fill='none'
      viewBox='0 0 52 53'
      {...props}
    >
      <path
        stroke='#784B36'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M15.167 30.833l4.968-4.968a2.167 2.167 0 013.064 0l3.436 3.436a2.167 2.167 0 003.064 0l7.135-7.134m0 0v5.416m0-5.416h-5.417'
      ></path>
      <path
        stroke='#784B36'
        strokeLinecap='round'
        strokeWidth='2'
        d='M47.666 26.5c0 10.214 0 15.32-3.173 18.494-3.173 3.173-8.28 3.173-18.493 3.173-10.214 0-15.321 0-18.494-3.173S4.333 36.714 4.333 26.5s0-15.32 3.173-18.494C10.679 4.833 15.786 4.833 26 4.833c10.213 0 15.32 0 18.493 3.173 2.11 2.11 2.817 5.075 3.054 9.827'
      ></path>
    </svg>
  );
}

function Arrow({ ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='45'
      height='45'
      fill='none'
      viewBox='0 0 45 45'
      {...props}
    >
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeWidth='2'
        d='M39.991 18.706a17.813 17.813 0 01-.448 9.251c-3.014 9.413-13.088 14.6-22.5 11.586-9.413-3.014-14.6-13.088-11.586-22.5 3.014-9.413 13.088-14.6 22.5-11.586a17.813 17.813 0 017.792 5.01'
      ></path>
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M22.5 14.316V30.42m0 0l7.158-6.902M22.5 30.422l-7.158-6.903'
      ></path>
    </svg>
  );
}
