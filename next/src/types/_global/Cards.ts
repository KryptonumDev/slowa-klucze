import { type Card } from './Card';
import { type CentralizedHeading } from './CentralizedHeading';

export interface Cards {
  _type?: string;
  centralizedHeading: CentralizedHeading;
  cards: Card[];
}
