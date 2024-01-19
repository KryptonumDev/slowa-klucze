import { type CSSProperties } from 'react';
import Markdown from '../Markdown';
import styles from './styles.module.scss';

export default function Heading({
  children,
  type = 'h2',
  className,
  backgroundColor,
  ...props
}: {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  backgroundColor?: string;
  className?: string;
}) {
  const headingClassName = `${styles.heading} ${backgroundColor ? styles.background : ''} ${className || ''} `;

  const Heading = type;
  return (
    <Heading
      className={headingClassName}
      style={{ '--background-color': backgroundColor } as CSSProperties}
      {...props}
    >
      <Markdown>{children}</Markdown>
    </Heading>
  );
}
