import Markdown from '../Markdown';
import styles from './quote.module.scss';
import { type Quote } from '@/types/_global/Quote';

export default function Quote({ data: { heading, quote } }: { data: Quote }) {
  return (
    <div className={styles.quote}>
      <Markdown.h2 className={styles.heading}>{heading}</Markdown.h2>
      <Markdown className={styles.quote}>{quote}</Markdown>
    </div>
  );
}
