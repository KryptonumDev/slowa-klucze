import styles from './grid2Images.module.scss';
import { type Props } from './grid2Images.types';
import Markdown from '@/components/ui/Markdown';

export default function Grid2Images({ images, source }: Props) {
  return (
    <div className={styles.grid2Images}>
      <div className={styles.images}>
        {images.map((image, i) => (
          <div
            className={styles.imageWrapper}
            key={i}
          >
            {image}
          </div>
        ))}
      </div>
      <Markdown className={styles.source}>{`Źródło: ${source}`}</Markdown>
    </div>
  );
}
