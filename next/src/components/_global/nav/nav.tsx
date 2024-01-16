'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './nav.module.scss';
import { type Props } from './nav.types';
import Img from '@/components/ui/Img';
import Button from '@/components/ui/button/Button';

export default function Nav({ data: { cta }, logo, socialsList }: Props) {
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
      className={styles.navWrapper}
      ref={navRef}
    >
      <div className={`maxWidth ${styles.nav}`}>
        <Img
          className={styles.logo}
          data={logo}
        />
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
                {ChevronDown()}
              </button>
              {isExpanded && (
                <>
                  <Link href={'/co-robie'}>Co robię</Link>
                  <Link href={'/efekty-wspolpracy'}>Efekty współpracy</Link>
                </>
              )}
            </div>
            <Link href={'/Blog'}>Blog</Link>
          </div>
        </div>
        <Button
          className={styles.button}
          svg={false}
          data={cta}
        />
        <div className={styles.hamburger}>{Hamburger({ toggleNav, setToggleNav })}</div>
      </div>
      {toggleNav && (
        <div
          className={styles.toggled}
          onMouseLeave={() => setToggleNav(!toggleNav)}
          ref={toggledNavRef}
        >
          <Img
            className={styles.logo}
            data={logo}
          />
          {Exit({ toggleNav, setToggleNav })}
          <div className={styles.links}>
            <Link href={'/o-mnie'}>O mnie</Link>
            <Link href={'/oferta'}>Oferta</Link>
            <div className={styles.sublinks}>
              <Link href={'/co-robie'}>Co robię</Link>
              <Link href={'/efekty-wspolpracy'}>Efekty współpracy</Link>
            </div>
            <Link href={'/blog'}>Blog</Link>
          </div>
          <div className={styles.socials}>
            {socialsList.map(({ icon, href }, i) => (
              <Link
                href={href}
                key={i}
              >
                <Img
                  className={styles.social}
                  data={icon}
                  sizes='39px'
                />
              </Link>
            ))}
          </div>
          <Button
            className={styles.button}
            svg={false}
            data={cta}
          />
        </div>
      )}
    </nav>
  );
}

export function Hamburger({
  toggleNav,
  setToggleNav,
}: {
  toggleNav: boolean;
  setToggleNav: (toggleNav: boolean) => void;
}) {
  return (
    <button
      onClick={() => setToggleNav(!toggleNav)}
      className={styles.exit}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='62'
        height='61'
        fill='none'
        viewBox='0 0 62 61'
      >
        <path
          stroke='#163C3E'
          strokeLinecap='round'
          strokeWidth='4'
          d='M10.917 17.792h7.625m33.042 0H28.709M51.583 43.208h-7.625m-33.042 0h22.875M10.917 30.5h40.667'
        ></path>
      </svg>
    </button>
  );
}

export function Exit({ toggleNav, setToggleNav }: { toggleNav: boolean; setToggleNav: (toggleNav: boolean) => void }) {
  return (
    <button onClick={() => setToggleNav(!toggleNav)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='42'
        height='42'
        fill='none'
        viewBox='0 0 42 42'
      >
        <path
          stroke='#163C3E'
          strokeLinecap='round'
          strokeWidth='1.5'
          d='M25.375 16.625l-8.75 8.75m0-8.75l8.75 8.75M38.5 21c0 8.25 0 12.374-2.563 14.937C33.374 38.5 29.25 38.5 21 38.5s-12.374 0-14.937-2.563C3.5 33.374 3.5 29.25 3.5 21s0-12.374 2.563-14.937C8.626 3.5 12.75 3.5 21 3.5s12.374 0 14.937 2.563c1.704 1.704 2.275 4.099 2.467 7.937'
        ></path>
      </svg>
    </button>
  );
}

export function ChevronDown() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='13'
      fill='none'
      viewBox='0 0 18 13'
    >
      <path
        stroke='currentColor'
        strokeWidth='3'
        d='M1.5 1.5l7.5 9 7.5-9'
      ></path>
    </svg>
  );
}
