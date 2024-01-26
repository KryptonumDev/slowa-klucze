import Link from 'next/link';
import styles from './styles.module.scss';
import { type Button } from '@/types/_ui/Button';

export default function Button({
  disabled = false,
  data,
  children,
  theme = 'primary',
  href,
  className,
  svg = true,
  onClick,
  ...props
}: Button) {
  if (data) {
    theme = data.theme;
    href = data.href;
    children = data.text;
  }

  const isExternal = href && href.startsWith('https://');

  const linkClassName = `${styles.button} ${theme === 'secondary' ? styles.secondary : styles.primary} ${
    className || ''
  } `;

  return (
    <>
      {href ? (
        isExternal ? (
          <a
            className={linkClassName}
            href={href}
            target='_blank'
            rel='noreferrer'
            onClick={onClick}
            {...props}
          >
            <span>{children}</span>
            {svg ? externalIcon() : null}
          </a>
        ) : (
          <Link
            className={linkClassName}
            href={href}
            onClick={onClick}
            {...props}
          >
            <span>{children}</span>
            {svg ? externalIcon() : null}
          </Link>
        )
      ) : (
        <button
          className={linkClassName}
          type='submit'
          onClick={onClick}
          disabled={disabled}
          {...props}
        >
          <span>{children}</span>
          {svg ? externalIcon() : null}
        </button>
      )}
    </>
  );
}

export const externalIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='22'
      height='22'
      fill='none'
    >
      <path
        stroke='#784B36'
        d='M12 10l9-9m0 0h-5.344M21 1v5.344M1 11c0-4.714 0-7.071 1.464-8.536C3.93 1 6.286 1 11 1m10 10c0 4.714 0 7.071-1.465 8.535C18.072 21 15.714 21 11 21s-7.071 0-8.536-1.465c-.973-.973-1.3-2.342-1.409-4.535'
      ></path>
    </svg>
  );
};
