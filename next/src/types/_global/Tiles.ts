import { type CentralizedHeading } from './CentralizedHeading';
import { type ImageTitleDescription } from './ImageTitleDescription';

export interface Tiles {
  _type?: string;
  centralizedHeading: CentralizedHeading;
  list: ImageTitleDescription[];
}
