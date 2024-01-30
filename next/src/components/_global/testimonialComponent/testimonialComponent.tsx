import Link from 'next/link';
import styles from './testimonialComponent.module.scss';
import Img from '@/components/ui/Img';
import { type Testimonial } from '@/types/_global/Testimonial';
import Heading from '@/components/ui/heading/Heading';
import Markdown from '@/components/ui/Markdown';
import { facebookIcon, instagramIcon, linkedinIcon } from '@/app/layout';

const icons = [
  {
    icon: facebookIcon(),
    name: 'facebook',
  },
  {
    icon: linkedinIcon(),
    name: 'linkedin',
  },
  {
    icon: instagramIcon(),
    name: 'instagram',
  },
];

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
        {socials.map((href, i) => {
          const icon = icons.find(({ name }) => href.toLowerCase().includes(name.toLowerCase()));
          if (icon) {
            return (
              <Link
                href={href}
                key={i}
                aria-label={icon.name}
              >
                {icon.icon}
              </Link>
            );
          }
        })}
      </div>
    </section>
  );
}
