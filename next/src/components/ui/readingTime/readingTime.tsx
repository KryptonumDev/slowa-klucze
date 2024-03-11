/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { toPlainText } from '@portabletext/react';
import styles from './readingTime.module.scss';

export default function ReadingTime({ text, isBlogCard }: { text: any; isBlogCard?: boolean }) {
  function calculateReadingTime(text: any) {
    const countWords = (text: string) => {
      const trimmedText = text.trim();
      if (trimmedText === '') {
        return 0;
      }
      const words = trimmedText.split(/\s+/);
      return words.length;
    };
    const plainText = toPlainText(text);
    const words = countWords(plainText);
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(words / wordsPerMinute);
    return readingTime;
  }

  function displayTime(time: number) {
    if (time == 1) {
      return 'minuta';
    } else if (time >= 2 && time <= 4) {
      return 'minuty';
    }
    return 'minut';
  }

  const readingTime = calculateReadingTime(text);
  const displayedTime = displayTime(readingTime);

  return (
    <div
      className={styles.readingTime}
      data-card={isBlogCard}
    >
      {isBlogCard ? blogReadingIcon() : readingIcon()}
      <span>{isBlogCard ? `${readingTime} ${displayedTime}` : `Czas czytania: ${readingTime} ${displayedTime}`}</span>
    </div>
  );
}

function readingIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='42'
      height='41'
      fill='none'
    >
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3'
        d='M21 12.9v7.6l4.75 4.75'
      ></path>
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeWidth='3'
        d='M11.5 4.042A18.913 18.913 0 0121 1.5c10.493 0 19 8.507 19 19s-8.507 19-19 19-19-8.507-19-19c0-3.46.925-6.705 2.542-9.5'
      ></path>
    </svg>
  );
}

function blogReadingIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='34'
      height='34'
      fill='none'
    >
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='3'
        d='M17 11v6l3.75 3.75'
      ></path>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeWidth='3'
        d='M9.5 4.007A14.93 14.93 0 0117 2c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-2.732.73-5.294 2.007-7.5'
      ></path>
    </svg>
  );
}
