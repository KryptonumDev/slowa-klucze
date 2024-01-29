import styles from './achievementShowcaseComponent.module.scss';
import Counter from './counter';
import Img from '@/components/ui/Img';
import CentralizedHeading from '@/components/ui/centralizedHeading';
import { type AchievementsShowcase } from '@/types/_global/AchievementsSchowcase';
import Markdown from '@/components/ui/Markdown';

export default function AchievementShowcaseComponent({
  data: { centralizedHeading, centralizedHeading2, tiles },
}: {
  data: AchievementsShowcase;
}) {

  const highestNumber = Math.max(...tiles.map(tile => tile.number));

  return (
    <section className={styles.achievementShowcaseComponent}>
      <CentralizedHeading data={centralizedHeading} />
      <div className={styles.items}>
        {tiles.map(({ description, image, number }, i) => {
          return (
            <div
              className={styles.item}
              key={i}
            >
              <Img
                className={styles.image}
                data={image}
              />
              <Counter number={number} maxNumber={highestNumber}/>
              <Markdown className={styles.description}>{description}</Markdown>
            </div>
          );
        })}
      </div>
      <CentralizedHeading data={centralizedHeading2} />
    </section>
  );
}
