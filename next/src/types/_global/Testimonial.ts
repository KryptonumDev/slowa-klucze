import { type Image } from './Image';

export interface Testimonial {
  _type?: string;
  heading: string;
  subheading: string;
  title: string;
  description: string;
  socials: string[];
  image: Image;
}
