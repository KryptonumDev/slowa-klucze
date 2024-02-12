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
      <Form
        formCta={formCta}
        Loader={<Loader className={styles.circle} />}
      />
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
