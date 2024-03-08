import Link from 'next/link';
import styles from './footer.module.scss';
import { type Props } from './footer.types';
import Markdown from '@/components/ui/Markdown';
import Img from '@/components/ui/Img';

export default function Footer({ data: { description, portrait }, logo, socials }: Props) {
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
            {socials.map(({ href, icon }, i: number) => (
              <Link
                href={href}
                key={i}
                target='_blank'
                className={styles.social}
              >
                <Img data={icon} />
              </Link>
            ))}
          </div>
          <Img
            className={styles.photo}
            data={portrait}
            sizes='(max-width: 599px) 0vw, (max-width: 799px) 50vw, 33vw'
          />
          <p className={styles.copyright}>
            Copyright © {date} — <span>slowa-klucze.pl</span>{' '}
            <span>
              Realizacja:{' '}
              <Link href={'https://kryptonum.eu/pl'}>
                {' '}
                <KryptonumLogo /> Kryptonum
              </Link>
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

function KryptonumLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='26'
      fill='none'
    >
      <path
        fill='url(#a)'
        d='M16.224 13c0 .924-.282 1.827-.812 2.6a4.923 4.923 0 01-2.17 1.75v7.986H9.266v-7.987a4.919 4.919 0 01-2.17-1.75A4.59 4.59 0 016.284 13c0-.923.282-1.826.812-2.598a4.919 4.919 0 012.17-1.75V.665h3.976V8.65a4.92 4.92 0 012.17 1.75c.53.773.812 1.677.812 2.6z'
      ></path>
      <path
        fill='url(#b)'
        d='M23.363.496V6.19l-4.153 3.964-1.987-1.898-1.28 1.222a5.856 5.856 0 00-.995-.95l8.415-8.03z'
      ></path>
      <path
        fill='url(#c)'
        d='M19.21 15.847l4.153 3.964v5.693l-8.414-8.031c.37-.278.703-.596.994-.949l1.28 1.221 1.987-1.898z'
      ></path>
      <path
        fill='#090909'
        d='M5.292 13a5.5 5.5 0 001.279 3.522L1.315 21.54v-5.693l1.989-1.898v-1.898l-1.989-1.897V4.46l5.256 5.017A5.498 5.498 0 005.29 13z'
      ></path>
      <defs>
        <linearGradient
          id='a'
          x1='16.038'
          x2='5.658'
          y1='0.665'
          y2='0.931'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2DD282'></stop>
          <stop
            offset='1'
            stopColor='#90F4E8'
          ></stop>
        </linearGradient>
        <linearGradient
          id='b'
          x1='23.205'
          x2='14.439'
          y1='0.496'
          y2='0.983'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2DD282'></stop>
          <stop
            offset='1'
            stopColor='#90F4E8'
          ></stop>
        </linearGradient>
        <linearGradient
          id='c'
          x1='23.205'
          x2='14.44'
          y1='15.847'
          y2='16.334'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#2DD282'></stop>
          <stop
            offset='1'
            stopColor='#90F4E8'
          ></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
