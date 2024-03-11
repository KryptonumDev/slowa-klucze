import styles from './grid2Buttons.module.scss';
import { type Cta } from '@/types/_global/Cta';
import Button from '@/components/ui/button/Button';

export default function Grid2Buttons({ data }: { data: Array<Cta> }) {
  return (
    <div className={styles.grid2Buttons}>
      {data.map((cta, i) => (
        <Button
          key={i}
          svg={false}
          data={cta}
          className={styles.button}
        />
      ))}
    </div>
  );
}
