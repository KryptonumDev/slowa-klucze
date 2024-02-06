import styles from './unorderedList.module.scss';
import { type Props } from './unorderedList.types';
import Markdown from '@/components/ui/Markdown';

export default function UnorderedList({ data }: Props) {
  return (
    <div className={styles.unorderedList}>
      <ul>
        {data.map(({ description, image }, index) => (
          <li key={index}>
            <div>{image}</div>
            <Markdown>{description}</Markdown>
          </li>
        ))}
      </ul>
    </div>
  );
}
