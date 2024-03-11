import { type Offer } from './Offer';

export interface Offers {
  _type?: string;
  offers: Offer[];
  additionalInfo?: string;
}
