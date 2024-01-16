import Markdown from '../Markdown';
import styles from './styles.module.scss';

export default function Heading({
  children,
  type = 'h2',
  className,
  isBackground,
  ...props
}: {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  isBackground?: boolean;
  className?: string;
}) {
  const headingClassName = `${styles.heading} ${isBackground ? styles.background : ''} ${className || ''} `;

  const Heading = type;
  return (
    <Heading
      className={headingClassName}
      {...props}
    >
      <Markdown>{children.toUpperCase()}</Markdown>
    </Heading>
  );
}
