import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { domain } from '@/global/Seo';

const LinkRenderer = ({
  href,
  children,
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
}) => {
  const isExternal =
    href &&
    ((href.startsWith('https://') && !href.startsWith(domain)) ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:'));
  const Element = isExternal ? 'a' : Link;
  return (
    <Element
      href={href || ''}
      className='link'
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener',
      })}
    >
      {children}
    </Element>
  );
};
const ListRenderer = ({
  children,
  ordered,
}: React.LiHTMLAttributes<HTMLLIElement> & {
  children?: React.ReactNode;
  ordered?: boolean;
}) => (
  <li>
    {!ordered && <ListBullet />}
    <span>{children}</span>
  </li>
);
type MarkdownProps = {
  Tag?: keyof JSX.IntrinsicElements;
  components?: Record<string, React.ReactNode>;
  children: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};
const Markdown = ({ Tag, components, children, className, style, id, ...props }: MarkdownProps) => {
  const markdown = (
    <MDXRemote
      source={children}
      components={{
        ...(Tag && {
          p: ({ children }) => (
            <Tag
              {...props}
              {...(id && { id })}
            >
              {children}
            </Tag>
          ),
        }),
        a: LinkRenderer,
        li: ListRenderer,
        ol: ({ children }) => <ol className='orderedList'>{children}</ol>,
        ul: ({ children }) => <ul className='unorderedList'>{children}</ul>,
        ...components,
      }}
      {...props}
    />
  );
  return className ? (
    <div
      className={className}
      style={style}
    >
      {markdown}
    </div>
  ) : (
    markdown
  );
};
Markdown.h1 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h1'
    {...props}
  />
);
Markdown.h2 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h2'
    {...props}
  />
);
Markdown.h3 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h3'
    {...props}
  />
);
Markdown.h4 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h4'
    {...props}
  />
);
Markdown.h5 = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='h5'
    {...props}
  />
);
Markdown.span = (props: JSX.IntrinsicAttributes & MarkdownProps) => (
  <Markdown
    Tag='span'
    {...props}
  />
);

const ListBullet = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='44'
    height='44'
    fill='none'
  >
    <path
      stroke='#25666A'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='3'
      d='M15.001 23l4 4 10-10'
    ></path>
    <path
      stroke='#25666A'
      strokeLinecap='round'
      strokeWidth='3'
      d='M12 4.676A19.908 19.908 0 0122 2c11.046 0 20 8.954 20 20s-8.954 20-20 20S2 33.046 2 22c0-3.643.974-7.058 2.676-10'
    ></path>
  </svg>
);

export default Markdown;
