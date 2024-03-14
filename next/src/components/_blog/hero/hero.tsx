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
      <Form
        formCta={hero_Form.formCta}
        Loader={<Loader className={styles.circle} />}
      >
        <Markdown.h3 className={styles.title}>{hero_Form.title}</Markdown.h3>
      </Form>
    </section>
  );
}

function Loader({ className }: { className: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='323'
      height='322'
    fill='none'
      className={className}
    >
      <path
        stroke='#2D7C80'
        strokeLinecap='round'
        strokeWidth='12'
        d='M195.004 31.023c47.093 12.121 84.168 49.196 96.289 96.289m4.222 33.505a134.014 134.014 0 01-241.227 80.409M30.06 186.962A134.015 134.015 0 01161.5 26.802'
      ></path>
    </svg>
  );
}
