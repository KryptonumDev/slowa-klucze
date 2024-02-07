import { type Props } from './imageSource.types';
import styles from './imageSource.module.scss';
import Markdown from '@/components/ui/Markdown';

export default function ImageSource({ image, source }: Props ) {
  return (
    <div className={styles.imageSource}>
      {image}
      <Markdown>{`Źródło: ${source}`}</Markdown>
    </div>
  );
}
