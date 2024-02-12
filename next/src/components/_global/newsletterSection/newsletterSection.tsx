import styles from './newsletterSection.module.scss';
import { type Props } from './newsletterSection.types';
import Form from './form';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';

export default function NewsletterSection({ data: { description, formCta, heading, image, subheading, card } }: Props) {
  const JsxDescription = <Markdown className={styles.description}>{description}</Markdown>;

  return (
    <section className={`${styles.newsletterSection}`}>
      <div className={styles.content}>
        <header>
          <Heading
            type='h2'
            className={styles.heading}
          >
            {heading}
          </Heading>
          <Markdown.h2>{subheading}</Markdown.h2>
        </header>
        <Form
          data={{ formCta, JsxDescription }}
          Loader={<Loader className={styles.circle} />}
        />
      </div>
      <div className={styles.visuals}>
        <div className={styles.card}>
          <Img
            className={styles.image}
            data={card.image}
            sizes='78px'
          />
          <Markdown.h3 className={styles.heading}>{card.heading}</Markdown.h3>
          <Markdown className={styles.description}>{card.description}</Markdown>
        </div>
        <Img
          data={image}
          className={styles.image}
          sizes='(max-width: 999px) 100vw, 50vw'
        />
      </div>
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
