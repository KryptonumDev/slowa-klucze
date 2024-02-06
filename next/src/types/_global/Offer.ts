import { type Cta } from './Cta';

export interface Offer {
  price: string;
  description: string;
  title: string;
  addition: string;
  heading: string;
  cta: Cta;
}
