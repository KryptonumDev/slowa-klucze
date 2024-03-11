import { type CentralizedHeading } from './CentralizedHeading';
import { type ImageNumberDescription } from './ImageNumberDescription';

export interface AchievementsShowcase {
  _type?: string;
  centralizedHeading: CentralizedHeading;
  tiles: ImageNumberDescription[];
  centralizedHeading2: CentralizedHeading;
}
