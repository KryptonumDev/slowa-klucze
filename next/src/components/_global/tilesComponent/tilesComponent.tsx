import styles from './tilesComponent.module.scss';
import { type Props } from './tilesComponent.types';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';
import CentralizedHeading from '@/components/ui/centralizedHeading/centralizedHeading';

export default function TilesComponent({ data: { centralizedHeading, list } }: Props) {
  return (
    <section className={`${styles.tilesComponent}`}>
      <CentralizedHeading data={centralizedHeading} />
      <div className={styles.list}>
        {list.map((item, i) => (
          <div
            key={i}
            className={styles.item}
          >
            <Img
              data={item.image}
              className={styles.image}
              sizes='(max-width: 499px) 100vw, (max-width: 1199px) 50vw, 33vw'
            />
            <Markdown className={styles.description}>{item.description}</Markdown>
            <Markdown.h3>{item.title}</Markdown.h3>
          </div>
        ))}
      </div>
    </section>
  );
}
