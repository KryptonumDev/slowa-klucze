import Link from 'next/link';
import styles from './footer.module.scss';
import { type Props } from './footer.types';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';
import Button from '@/components/ui/button/Button';

export default function Footer({ data: {description, portrait }, logo, socialsList }: Props) {
  return (
    <footer className={` ${styles.footer}`}>
      <div className={`${styles.footerWrapper} maxWidth`}>
        <Img
          className={styles.logo}
          data={logo}
        />
        <Markdown className={styles.description}>{description}</Markdown>
        <div className={styles.socials}>
          {socialsList.map(({ icon, href }, i) => (
            <Link
              href={href}
              key={i}
            >
              <Img
                className={styles.socials}
                data={icon}
                sizes='39px'
              />
            </Link>
          ))}
        </div>
        <Img
          className={styles.photo}
          data={portrait}
        />
        <p className={styles.copyright}>
          Copyright © 2023 — <span>slowa-klucze.pl</span> <span>Realizacja: Kryptonum</span>
        </p>
        <div className={styles.links}>
          <Link href={'/o-mnie'}>O mnie</Link>
          <Link href={'/oferta'}>Oferta</Link>
          <Link href={'/ppinie'}>Opinie</Link>
          <Link href={'/efekty-wspolpracy'}>Efekty współpracy</Link>
          <Link href={'/case-study'}>Case study</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'/faq'}>FAQ</Link>
          <Link href={'/regulamin'}>Regulamin</Link>
          <Link href={'/polityka-prywatnosci'}>Polityka prywatności</Link>
          <Button className={styles.button} svg={false}>Zarządzam ciasteczkami</Button>
        </div>
      </div>
    </footer>
  );
}
