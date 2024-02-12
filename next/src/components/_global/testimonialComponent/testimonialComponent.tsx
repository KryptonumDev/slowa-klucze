import Link from 'next/link';
import styles from './testimonialComponent.module.scss';
import Img from '@/components/ui/Img';
import { type Testimonial } from '@/types/_global/Testimonial';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';

export default function TestimonialComponent({
  data: { description, heading, image, socials, subheading, title },
}: {
  data: Testimonial;
}) {
  return (
    <section className={styles.testimonialComponent}>
      <Img
        className={styles.image}
        data={image}
        sizes='(max-width: 599px) 100vw, (max-width: 1099px) 50vw, 33vw'
      />
      <div className={styles.wrapper}>
        <Heading
          type='h2'
          className={styles.heading}
        >
          {heading}
        </Heading>
        <Markdown.h2 className={styles.subheading}>{subheading}</Markdown.h2>
        <Markdown.h3 className={styles.title}>{title}</Markdown.h3>
        <Markdown className={styles.description}>{description}</Markdown>
      </div>
      <div className={styles.socials}>
        {socials.map(({ href, icon }, index) => (
          <Link
            href={href}
            key={index}
            className={styles.link}
            target='_blank'
          >
            <Img
              data={icon}
              className={styles.icon}
              sizes='40px'
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
