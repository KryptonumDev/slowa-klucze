import Button from '../button/Button';
import styles from './centralizedHeading.module.scss';
import { type Props } from './centralizedHeading.types';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';

export default function CentralizedHeading({
  data: { title, description, heading, cta },
  backgroundColor,
  className,
}: Props) {
  return (
    <div className={`${styles.centralizedHeading} ${className || ''}`}>
      {heading && (
        <Heading
          type='h2'
          backgroundColor={backgroundColor}
        >
          {heading}
        </Heading>
      )}
      <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
      {description && <Markdown className={styles.description}>{description}</Markdown>}
      {cta.text && (
        <Button
          data={cta}
          svg={false}
          theme='secondary'
        />
      )}
    </div>
  );
}
