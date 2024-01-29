import { type CentralizedHeading } from './CentralizedHeading';
import { type ImageTitleDescription } from './ImageTitleDescription';

export interface AchievementsShowcase {
  _type?: string;
  centralizedHeading: CentralizedHeading;
  tiles: ImageTitleDescription[];
  centralizedHeading2: CentralizedHeading;
}
