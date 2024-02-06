import { type Props } from './ctaWithBackgroundImage.types';
import styles from './ctaWithBackgroundImage.module.scss';
import Markdown from '@/components/ui/Markdown';
import Button from '@/components/ui/button/Button';

export default function CtaWithBackgroundImage({ data: { cta, title, subtitle } }: Props) {
  return (
    <div className={styles.ctaWithBackgroundImage}>
      <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
      {subtitle && <Markdown className={styles.subtitle}>{subtitle}</Markdown>}
      {cta.text && (
        <Button
          data={cta}
          svg={false}
          className={styles.button}
        />
      )}
    </div>
  );
}
