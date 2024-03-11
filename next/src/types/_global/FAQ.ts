import { type CentralizedHeading } from './CentralizedHeading';
import { type Image } from './Image';
import { type ImageTitleDescription } from './ImageTitleDescription';

export interface FAQ {
  _type?: string;
  faq: ImageTitleDescription[];
  heading: string;
  description: string;
  centralizedHeading: CentralizedHeading;
  title: string;
  image: Image;
}
