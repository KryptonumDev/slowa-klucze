import Link from 'next/link';
import styles from './authorComponent.module.scss';
import Img from '@/components/ui/Img';
import { type Author } from '@/types/_global/Author';
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

export default function AuthorComponent({ data: { description, fullName, photo, socials } }: { data: Author }) {
  return (
    <section className={styles.authorComponent}>
      <Img
        className={styles.image}
        data={photo}
      />
      <div className={styles.content}>
        <Markdown.h2 className={styles.heading}>{fullName}</Markdown.h2>
        <Markdown className={styles.description}>{description}</Markdown>
        <div className={styles.socials}>
          {socials.map((href, index) => {
            const icon = icons.find(({ name }) => href.toLowerCase().includes(name.toLowerCase()));
            if (icon) {
              return (
                <Link
                  href={href}
                  key={index}
                  aria-label={icon.name}
                >
                  {icon.icon}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
