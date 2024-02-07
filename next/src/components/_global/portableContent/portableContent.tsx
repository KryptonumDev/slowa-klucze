import imageUrlBuilder from '@sanity/image-url';
import { PortableText, toPlainText, type PortableTextReactComponents } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import InformationComponent from '../informationComponent';
import styles from './portableContent.module.scss';
import ImageSource from '@/components/_global/imageSource';
import UnorderedList from '@/components/_global/unorderedList';
import Img from '@/components/ui/Img';
import Grid2Buttons from '@/components/_global/grid2Buttons';
import OrderedList from '@/components/_global/orderedList';
import Grid2Images from '@/components/_global/grid2Images';
import CtaWithBackgroundImage from '@/components/_global/ctaWithBackgroundImage';
import Markdown from '@/components/ui/Markdown';
import { portableTextToMarkdown, slugify } from '@/utils/functions';
import { type Node } from '@/types/_global/Node';
import { type Cta } from '@/types/_global/Cta';
import Quote from '@/components/ui/quote/quote';

interface ReferencedImage {
  asset: { _ref: string };
  altText: string;
}

interface ArrayProps {
  image: ReferencedImage;
  description: string;
}

interface MappedArrayProps {
  image: JSX.Element;
  description: string;
}

export const ImageRenderer = ({
  value: {
    asset: { _ref },
    altText,
  },
  sizes,
}: {
  value: ReferencedImage;
  sizes?: string;
}) => {
  const builder = imageUrlBuilder({
    projectId: 'xg0fttfo',
    dataset: 'production',
  });
  return (
    <Img
      src={builder.image(_ref).url()}
      width={getImageDimensions(_ref).width}
      height={getImageDimensions(_ref).height}
      alt={altText || ''}
      className={styles.img}
      {...(sizes && { sizes })}
    />
  );
};

const components = {
  types: {
    imageSource: ({ value }: { value: { image: ReferencedImage; source: string } }) => {
      const image = <ImageRenderer value={value.image} />;

      return (
        <ImageSource
          image={image}
          source={value.source}
        />
      );
    },
    unorderedList: ({ value: { array } }: { value: { array: Array<object> } }) => {
      const mappedArray: MappedArrayProps[] = array.map((obj: ArrayProps) => {
        return { ...obj, image: <ImageRenderer value={obj.image} /> };
      });
      return <UnorderedList data={mappedArray} />;
    },
    grid2Buttons: ({ value: { buttons } }: { value: { buttons: Array<Cta> } }) => {
      return <Grid2Buttons data={buttons} />;
    },
    orderedList: ({ value: { array } }: { value: { array: Array<{ description: string }> } }) => (
      <OrderedList array={array} />
    ),
    grid2Images: ({ value: { images, source } }: { value: { images: Array<ReferencedImage>; source: string } }) => {
      const mappedArray: JSX.Element[] = images.map((obj: ReferencedImage, i) => {
        return (
          <ImageRenderer
            value={obj}
            key={i}
          />
        );
      });
      return (
        <Grid2Images
          images={mappedArray}
          source={source}
        />
      );
    },
    quote: ({ value: { quote, heading } }: { value: { quote: string; heading?: string } }) => (
      <Quote
        data={{ quote, heading }}
        className={styles.quote}
      />
    ),
    information: ({ value: { heading, description } }: { value: { heading: string; description: string } }) => (
      <InformationComponent data={{ heading, description }} />
    ),
    ctaWithBackgroundImage: ({
      value: { cta, title, subtitle },
    }: {
      value: { cta: Cta; title: string; subtitle: string };
    }) => <CtaWithBackgroundImage data={{ cta, title, subtitle }} />,
  },
  block: {
    h2: ({ value }: { value: [] }) => (
      <Markdown.h2 id={slugify(toPlainText(value))}>{portableTextToMarkdown(value as Node)}</Markdown.h2>
    ),
    h3: ({ value }: { value: [] }) => (
      <Markdown.h3 id={slugify(toPlainText(value))}>{portableTextToMarkdown(value as Node)}</Markdown.h3>
    ),
    largeParagraph: ({ children }) => <p className={styles.largeParagraph}>{children}</p>,
  },
  listItem: {
    number: ({ children }) => <li className={styles.portableList}>{children}</li>,
  },
  list: {
    bullet: ({ children }) => <ul className={styles.portableList}>{children}</ul>,
    number: ({ children }) => <ol className={styles.portableList}>{children}</ol>,
  },
  marks: {
    link: ({ value, children }) => {
      const { href }: { href: string } = value as { href: string };
      return (
        <a
          href={href}
          target='_blank'
          rel='noopener'
          className={styles.link}
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableContent({ data }: { data: object[] }) {
  return (
    <section className={styles.portableContent}>
      <PortableText
        value={data as []}
        components={components as unknown as Partial<PortableTextReactComponents>}
      />
    </section>
  );
}
