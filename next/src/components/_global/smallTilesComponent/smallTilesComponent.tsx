import styles from './smallTilesComponent.module.scss';
import Img from '@/components/ui/Img';
import CentralizedHeading from '@/components/ui/centralizedHeading/centralizedHeading';
import { type Tiles } from '@/types/_global/Tiles';
import Markdown from '@/components/ui/Markdown';

export default function SmallTilesComponent({ data: { centralizedHeading, list } }: { data: Tiles }) {
  return (
    <section className={`${styles.smallTilesComponent} maxWidth`}>
      <CentralizedHeading data={centralizedHeading} />
      <div className={styles.items}>
        {list.map(({ title, description, image }, i) => (
          <div
            className={styles.item}
            key={i}
          >
            <Img
              data={image}
              className={styles.image}
            />
            <Markdown.h3 className={styles.title}>{title}</Markdown.h3>
            <Markdown className={styles.description}>{description}</Markdown>
          </div>
        ))}
      </div>
    </section>
  );
}
