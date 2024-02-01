import { type Image } from './Image';

export interface Author {
  socials: string[];
  description: string;
  fullName: string;
  photo: Image;
}
