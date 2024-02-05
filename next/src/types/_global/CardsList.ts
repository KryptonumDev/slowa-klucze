import { type CentralizedHeading } from './CentralizedHeading';
import { type HeadingDescription } from './HeadingDescription';
import { type Image } from './Image';

export interface CardsList {
  _type?: string;
  cards: HeadingDescription[];
  heading: string;
  description: string;
  centralizedHeading: CentralizedHeading;
  title: string;
}
