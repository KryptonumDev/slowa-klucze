import styles from './newsletterSection.module.scss';
import { type Props } from './newsletterSection.types';

export default function NewsletterSection({
  data: { cta, description, formCta, heading, image, subheading, card },
}: Props) {
  return <section className={styles.wrapper}></section>;
}
