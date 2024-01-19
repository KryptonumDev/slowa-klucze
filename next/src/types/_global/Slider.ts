import { type CentralizedHeading } from './CentralizedHeading';
import { type Image } from './Image';

export interface Slider {
  _type?: string;
  centralizedHeading: CentralizedHeading;
  centralizedHeading2: CentralizedHeading;
  slides: Slide[];
}

interface Slide {
  description: string;
  url: string;
  heading: string;
  icon: Image;
  rating: number;
}
