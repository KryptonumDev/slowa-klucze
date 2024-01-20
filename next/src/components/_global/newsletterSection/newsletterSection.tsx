import styles from './newsletterSection.module.scss';
import { type Props } from './newsletterSection.types';
import Form from './form';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';

export default function NewsletterSection({ data: { description, formCta, heading, image, subheading, card } }: Props) {
  return (
    <section className={`${styles.newsletterSection} maxWidth`}>
      <div className={styles.content}>
        <header>
          <Heading type='h2' className={styles.heading}>{heading}</Heading>
          <Markdown.h2>{subheading}</Markdown.h2>
        </header>
        <Markdown className={styles.description}>{description}</Markdown>
        <Form data={{ formCta }} />
      </div>
      <div className={styles.visuals}>
        <div className={styles.card}>
          <Img
            className={styles.image}
            data={card.image}
          />
          <Markdown.h3 className={styles.heading}>{card.heading}</Markdown.h3>
          <Markdown className={styles.description}>{card.description}</Markdown>
        </div>
        <Img
          data={image}
          className={styles.image}
        />
      </div>
    </section>
  );
}
