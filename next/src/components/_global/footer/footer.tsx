import Link from 'next/link';
import styles from './footer.module.scss';
import { type Props } from './footer.types';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';

export default function Footer({ data: { description, portrait }, logo, socials, icons }: Props) {
  const date = new Date().getFullYear();

  return (
    <footer className={` ${styles.footer}`}>
      <div className={styles.background}>
        <div className={`${styles.footerWrapper} maxWidth`}>
          <Link
            href={'/'}
            className={styles.logoLink}
          >
            <Img
              className={styles.logo}
              data={logo}
              aria-label={'Logo'}
            />
          </Link>
          <Markdown className={styles.description}>{description}</Markdown>
          <div className={styles.socials}>
            {Object.entries(socials).map(([name, href], i) => {
              const icon = icons.find((icon) => icon.name.toLowerCase() === name.toLowerCase());
              if (icon && href) {
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
          <Img
            className={styles.photo}
            data={portrait}
            sizes='(max-width: 599px) 0vw, (max-width: 799px) 50vw, 33vw'
          />
          <p className={styles.copyright}>
            Copyright © {date} — <span>slowa-klucze.pl</span>{' '}
            <span>
              <Link href={'https://kryptonum.eu/pl'}>Realizacja: Kryptonum</Link>
            </span>
          </p>
          <div className={styles.links}>
            <Link href={'/o-mnie'}>O mnie</Link>
            <Link href={'/co-robie'}>Co robię</Link>
            <Link href={'/efekty-wspolpracy'}>Efekty współpracy</Link>
            <Link href={'/blog'}>Blog</Link>
            <Link href={'/polityka-prywatnosci'}>Polityka prywatności</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
