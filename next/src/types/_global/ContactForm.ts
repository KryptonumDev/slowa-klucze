import { type Cta } from './Cta';
import { type Image } from './Image';

export interface ContactForm {
  _type?: string;
  heading: string;
  subheading: string;
  formCta: Cta;
  image: Image;
}
