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
        sizes='52px'
      />
    );

    headings.push(<Markdown.h3 className={styles.heading}>{title}</Markdown.h3>);

    descriptions.push(<Markdown className={styles.description}>{description}</Markdown>);
  });

  return (
    <section className={`${styles.faqWrapper} fullWidthBackground`}>
      <div className={`${styles.faq}`}>
        <header>
          <Heading
            type='h2'
            className={styles.heading}
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
            sizes='(max-width: 1349px) 100vw, 50vw'
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
    >
      <circle
        cx='22.5'
        cy='22.5'
        r='18.75'
        stroke='#163C3E'
        strokeWidth='2'
      ></circle>
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M22.5 14.316V30.42m0 0l7.158-6.902M22.5 30.421l-7.158-6.902'
      ></path>
    </svg>
  );
}
