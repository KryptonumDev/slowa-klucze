import NextImage from 'next/image';

const defaultPlaceholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/1+yHgAHtAKYD9BncgAAAABJRU5ErkJggg==';

type ImgProps = {
  src?: string;
  alt?: string;
  data?: Data;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'lazy' | 'eager' | undefined;
  priority?: boolean;
  className?: string;
};

type Data = {
  asset: {
    url: string;
    altText: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
      lqip: string;
    };
  };
};

const Img = ({ src, alt = '', data, width, height, sizes, loading, priority, className, ...props }: ImgProps) => (
  <NextImage
    className={className}
    src={data?.asset?.url || src || ''}
    alt={data?.asset.altText || alt}
    width={width || data?.asset.metadata.dimensions?.width}
    height={height || data?.asset.metadata.dimensions?.height}
    loading={loading}
    priority={priority}
    sizes={sizes}
    {...(((width ?? data?.asset.metadata.dimensions.width ?? 0) > 40 ||
      (height ?? data?.asset.metadata.dimensions.height ?? 0) > 40) && {
      placeholder: 'blur',
      blurDataURL: data?.asset.metadata?.lqip ?? defaultPlaceholder,
    })}
    {...props}
  />
);

export default Img;
