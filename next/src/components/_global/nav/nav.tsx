'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './nav.module.scss';
import { type Props } from './nav.types';
import Img from '@/components/ui/Img';
import Button from '@/components/ui/button/Button';

export default function Nav({ data: { cta }, logo, socials, icons }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const [toggleNav, setToggleNav] = useState(false);

  const navRef = useRef(null);

  const toggledNavRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current as HTMLElement;
    const navHeight = nav.offsetHeight;
    let prevScrollPos = window.scrollY;
    let currentScrollPos = prevScrollPos;
    let scrollDistance = 0;
    const handleScroll = () => {
      prevScrollPos = currentScrollPos;
      currentScrollPos = window.scrollY;
      if (currentScrollPos < prevScrollPos && currentScrollPos > navHeight) {
        nav.classList.add(`${styles.fixed}`, 'fixed');
        scrollDistance = 0;
      } else if (nav.classList.contains(styles.fixed)) {
        scrollDistance += prevScrollPos - currentScrollPos;
        if (scrollDistance * -1 >= navHeight) {
          nav.classList.remove(`${styles.fixed}`, 'fixed');
          scrollDistance = 0;
        }
      }
      if (currentScrollPos === 0) {
        nav.classList.remove(styles.fixed);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setToggleNav(false);
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const handleTouchOutside = (event: TouchEvent) => {
      const nav = toggledNavRef.current as HTMLElement;
      if (nav && !nav.contains(event.target as Node)) {
        setToggleNav(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const ref = toggledNavRef.current as HTMLElement;
      if (toggleNav && event.key === 'Tab') {
        const focusableElements = ref.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        ) as unknown as HTMLElement[];
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    window.addEventListener('touchstart', handleTouchOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('touchstart', handleTouchOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleNav, setToggleNav]);

  return (
    <nav
      className={`${styles.navWrapper} nav`}
      ref={navRef}
    >
      <div className={`maxWidth ${styles.nav}`}>
        <Link href={'/'}>
          <Img
            className={styles.logo}
            data={logo}
            aria-label={'Logo'}
          />
        </Link>
        <div className={styles.linksWrapper}>
          <div className={styles.links}>
            <Link href={'/o-mnie'}>O mnie</Link>
            <div
              className={isExpanded ? `${styles.dropdown} ${styles.expanded}` : styles.dropdown}
              onMouseLeave={() => setIsExpanded(false)}
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={styles.button}
              >
                <span>Oferta</span>
                <ChevronDown />
              </button>
              {isExpanded && (
                <>
                  <Link href={'/co-robie'}>Co robię</Link>
                  <Link href={'/efekty-wspolpracy'}>Efekty współpracy</Link>
                </>
              )}
            </div>
            <Link href={'/blog'}>Blog</Link>
          </div>
        </div>
        <Button
          className={styles.button}
          svg={false}
          data={cta}
        />
        <div className={styles.hamburger}>
          <button
            onClick={() => setToggleNav(!toggleNav)}
            className={styles.exit}
            aria-label='rozwiń nawigację'
          >
            <Hamburger />
          </button>
        </div>
      </div>
      <div
        className={styles.toggled}
        onMouseLeave={() => setToggleNav(false)}
        data-show={toggleNav}
        ref={toggledNavRef}
      >
        <Img
          className={styles.logo}
          data={logo}
        />
        <button onClick={() => setToggleNav(!toggleNav)} aria-label='zamknji nawigację'>{<Exit />}</button>
        <div className={styles.links}>
          <Link
            href={'/o-mnie'}
            onClick={() => setToggleNav(!toggleNav)}
          >
            O mnie
          </Link>
          <span className={styles.span}>Oferta</span>
          <div>
            <Link
              href={'/co-robie'}
              onClick={() => setToggleNav(!toggleNav)}
            >
              Co robię
            </Link>
            <Link
              href={'/efekty-wspolpracy'}
              onClick={() => setToggleNav(!toggleNav)}
            >
              Efekty współpracy
            </Link>
          </div>
          <Link
            href={'/blog'}
            onClick={() => setToggleNav(!toggleNav)}
          >
            Blog
          </Link>
        </div>
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
        <Button
          className={styles.button}
          svg={false}
          data={cta}
        />
      </div>
    </nav>
  );
}

function Hamburger() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='62'
      height='61'
      fill='none'
    >
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeWidth='4'
        d='M10.917 17.792h7.625m33.042 0H28.709m22.874 25.416h-7.625m-33.042 0h22.875M10.917 30.5h40.667'
      ></path>
    </svg>
  );
}

function Exit() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='42'
      height='42'
      fill='none'
    >
      <path
        stroke='#163C3E'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M25.375 16.625l-8.75 8.75m0-8.75l8.75 8.75M38.5 21c0 8.25 0 12.374-2.563 14.937C33.374 38.5 29.25 38.5 21 38.5s-12.374 0-14.937-2.563C3.5 33.374 3.5 29.25 3.5 21s0-12.374 2.563-14.937C8.626 3.5 12.75 3.5 21 3.5s12.374 0 14.937 2.563c1.704 1.704 2.275 4.099 2.467 7.937'
      ></path>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='13'
      fill='none'
    >
      <path
        stroke='#163C3E'
        strokeWidth='3'
        d='M1.5 1.5l7.5 9 7.5-9'
      ></path>
    </svg>
  );
}
