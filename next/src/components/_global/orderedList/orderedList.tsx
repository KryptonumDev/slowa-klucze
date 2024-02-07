import styles from './orderedList.module.scss';
import { type Props } from './orderedList.types';
import Markdown from '@/components/ui/Markdown';

export default function OrderedList({ array }: Props) {
  return (
    <ol className={styles.orderedList}>
      {array.map(({ description }, i) => (
        <li key={i}>
          <Markdown>{description}</Markdown>
        </li>
      ))}
    </ol>
  );
}
