import Link from 'next/link';
import styles from './styles.module.scss';
import { type Button } from '@/types/_ui/Button';

export default function Button({ data, children, theme = 'primary', href, className, ...props }: Button) {
  if (data) {
    theme = data.theme;
    href = data.href;
    children = data.text;
  }
  const linkClassName = `${styles.button}  ${className || ''} `;

  return (
    <>
      {href ? (
        <Link
          className={linkClassName}
          href={href}
          {...props}
        >
          <span>{children}</span>
          {theme === 'secondary' ? externalLink() : null}
        </Link>
      ) : (
        <button
          className={linkClassName}
          type='submit'
          {...props}
        >
          <span>{children}</span>
          {theme === 'secondary' ? externalLink() : null}
        </button>
      )}
    </>
  );
}

export const externalLink = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
      viewBox='0 0 22 22'
    >
      <path
        stroke='#784B36'
        d='M12 10l9-9m0 0h-5.344M21 1v5.344M1 11c0-4.714 0-7.071 1.464-8.536C3.93 1 6.286 1 11 1m10 10c0 4.714 0 7.071-1.465 8.535C18.072 21 15.714 21 11 21s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535'
      ></path>
    </svg>
  );
};
