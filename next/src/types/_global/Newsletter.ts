import { type Cta } from './Cta';
import { type Image } from './Image';

export interface Newsletter {
  _type?: string;
  heading: string;
  formCta: Cta;
  subheading: string;
  description: string;
  image: Image;
  card: {
    href: string;
    image: Image;
    heading: string;
    description: string;
  };
}
