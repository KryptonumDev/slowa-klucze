import { type Carousel } from './Carousel';
import { type CentralizedHeading } from './CentralizedHeading';

export interface Partners {
  _type?: string;
  centralizedHeading: CentralizedHeading;
  carousel: Carousel[];
}
