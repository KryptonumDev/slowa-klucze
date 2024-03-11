import Markdown from '../Markdown';
import styles from './styles.module.scss';

export default function Heading({
  children,
  type = 'h2',
  className,
  ...props
}: {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}) {
  const headingClassName = `${styles.heading} ${className || ''} `;

  const Heading = type;
  return (
    <Heading
      className={headingClassName}
      {...props}
    >
      <Markdown>{children}</Markdown>
    </Heading>
  );
}
