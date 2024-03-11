import { type Image } from './Image';

export interface ProsAndCons {
  _type?: string;
  heading: string;
  cards: prosAndConsCards[];
}
export type prosAndConsCards = {
  title: string;
  cards: prosAndConsCard[];
};
export type prosAndConsCard = {
  description: string;
  image: Image;
};
