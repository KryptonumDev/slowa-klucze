import styles from './faq.module.scss';
import { type Props } from './faq.types';
import FaqItems from './faqItems';
import Img from '@/components/ui/Img';
import Markdown from '@/components/ui/Markdown';
import Heading from '@/components/ui/heading/Heading';
import CentralizedHeading from '@/components/ui/centralizedHeading/centralizedHeading';

export default function Faq({ data: { centralizedHeading, description, faq, image, title, heading } }: Props) {
  const arrow = <Arrow />;
  const images = [] as React.ReactNode[];
  const headings = [] as React.ReactNode[];
  const descriptions = [] as React.ReactNode[];
  faq.forEach(({ title, description, image }) => {
    images.push(
      <Img
        className={styles.image}
        data={image}
      />
    );

    headings.push(
      <Markdown.h3
        className={styles.heading}
      >
        {title}
      </Markdown.h3>
    );

    descriptions.push(
      <Markdown
        className={styles.description}
      >
        {description}
      </Markdown>
    );
  });

  return (
    <section className={styles.faqWrapper}>
      <div className={`${styles.faq} maxWidth`}>
        <header>
          <Heading
            type='h2'
            backgroundColor={'var(--background)'}
          >
            {heading}
          </Heading>
          <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
          <Markdown className={styles.description}>{description}</Markdown>
        </header>
        <div className={styles.faqList}>
          <Img
            className={styles.image}
            data={image}
          />
          <div className={styles.items}>
            <FaqItems
              images={images}
              headings={headings}
              descriptions={descriptions}
              arrow={arrow}
              length={faq.length}
            ></FaqItems>
          </div>
        </div>
        <CentralizedHeading data={centralizedHeading} />
      </div>
    </section>
  );
}

function Arrow({ ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='45'
      height='45'
      fill='none'
      viewBox='0 0 45 45'
      {...props}
    >
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeWidth='2'
        d='M39.991 18.706a17.813 17.813 0 01-.448 9.251c-3.014 9.413-13.088 14.6-22.5 11.586-9.413-3.014-14.6-13.088-11.586-22.5 3.014-9.413 13.088-14.6 22.5-11.586a17.813 17.813 0 017.792 5.01'
      ></path>
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M22.5 14.316V30.42m0 0l7.158-6.902M22.5 30.422l-7.158-6.903'
      ></path>
    </svg>
  );
}
