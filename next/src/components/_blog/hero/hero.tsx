import Form from './form';
import styles from './hero.module.scss';
import { type Props } from './hero.types';
import Markdown from '@/components/ui/Markdown';
import Heading from '@/components/ui/heading/Heading';

export default function Hero({ data: { hero_Heading, hero_Description, hero_Subheading, hero_Form } }: Props) {
  return (
    <section className={styles.hero}>
      <header>
        <Heading type='h2'>{hero_Heading}</Heading>
        <Markdown.h2>{hero_Subheading}</Markdown.h2>
        <Markdown className={styles.description}>{hero_Description}</Markdown>
      </header>
      <Form formCta={hero_Form.formCta}>
        <Markdown.h3 className={styles.title}>{hero_Form.title}</Markdown.h3>
      </Form>
    </section>
  );
}
