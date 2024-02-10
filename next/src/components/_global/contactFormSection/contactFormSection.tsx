import styles from './contactFormSection.module.scss';
import Form from './form';
import { type Props } from './contactFormSection.types';
import Heading from '@/components/ui/heading/Heading';
import Img from '@/components/ui/Img';
import Markdown from '@/components/ui/Markdown';

export default function ContactFormSection({ data: { formCta, heading, image, subheading } }: Props) {
  return (
    <section
      className={`${styles.contactFormSection}`}
      id='formularz-kontaktowy'
    >
      <header>
        <Heading type='h2'>{heading}</Heading>
        <Markdown.h2 className={styles.subheading}>{subheading}</Markdown.h2>
      </header>
      <Img
        className={styles.image}
        data={image}
        sizes='(max-width: 999px) 100vw, 50vw'
      />
      <Form formCta={formCta} />
    </section>
  );
}
