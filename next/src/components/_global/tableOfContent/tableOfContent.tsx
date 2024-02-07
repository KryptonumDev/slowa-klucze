'use client';

import Link from 'next/link';
import styles from './tableOfContent.module.scss';
import { type Node } from '@/types/_global/Node';
import { smoothScroll } from '@/utils/functions';

export default function TableOfContent({ content }: { content: Node[] }) {
  return (
    <nav className={styles.tableOfContent}>
      <ul className={styles.unorderedList}>
        {content.map(({ text, slug, subheadings }, index) => (
          <li key={index} className={styles.list}>
            <Link
              href={`#${slug}`}
              onClick={(e) => smoothScroll(e, slug)}
              className={styles.link}
            >
              {ReferenceLink()}
              <span>{text}</span>
            </Link>
            {subheadings?.length > 0 && (
              <ul className={styles.subList}>
                {subheadings.map(({ text, slug }, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={`#${slug}`}
                      onClick={(e) => smoothScroll(e, slug)}
                      className={styles.link}
                    >
                      {ReferenceLink()}
                      <span>{text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ReferenceLink() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='31'
      height='30'
      fill='none'
    >
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M9.25 15H18m0 0l-3.75 3.75M18 15l-3.75-3.75'
      ></path>
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeWidth='2'
        d='M21.75 20V10M28 15c0 5.893 0 8.839-1.83 10.67-1.831 1.83-4.777 1.83-10.67 1.83s-8.839 0-10.67-1.83C3 23.838 3 20.892 3 15S3 6.161 4.83 4.33C6.662 2.5 9.608 2.5 15.5 2.5s8.839 0 10.67 1.83c1.217 1.218 1.624 2.928 1.761 5.67'
      ></path>
    </svg>
  );
}
