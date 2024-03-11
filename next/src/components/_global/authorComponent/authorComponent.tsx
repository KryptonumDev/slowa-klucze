import Link from 'next/link';
import styles from './authorComponent.module.scss';
import Img from '@/components/ui/Img';
import { type Author } from '@/types/_global/Author';
import Markdown from '@/components/ui/Markdown';

export default function AuthorComponent({ data: { description, fullName, photo, socials } }: { data: Author }) {
  return (
    <section className={styles.authorComponent}>
      <Img
        className={styles.image}
        data={photo}
        sizes='186px'
      />
      <div className={styles.content}>
        <Markdown.h2 className={styles.heading}>{fullName}</Markdown.h2>
        <Markdown className={styles.description}>{description}</Markdown>
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
      </div>
    </section>
  );
}
