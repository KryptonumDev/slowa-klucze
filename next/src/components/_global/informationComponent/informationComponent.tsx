import styles from './informationComponent.module.scss';
import { type Props } from './informationComponent.types';
import Markdown from '@/components/ui/Markdown';

export default function InformationComponent({ data: { heading, description } }: Props) {
  return (
    <section className={styles.informationComponent}>
      <Markdown.h2>{heading}</Markdown.h2>
      <div className={styles.markdownWrapper}>
        <Markdown className={styles.markdown}>{description}</Markdown>
      </div>
    </section>
  );
}
