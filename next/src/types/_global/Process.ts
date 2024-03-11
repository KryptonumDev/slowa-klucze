import { type CentralizedHeading } from './CentralizedHeading';
import { type ImageTitleDescription } from './ImageTitleDescription';

export interface Process {
  _type?: string;
  centralizedHeading: CentralizedHeading;
  proceses: ImageTitleDescription[];
}