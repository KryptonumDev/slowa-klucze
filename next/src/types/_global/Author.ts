import { type Image } from './Image';

export interface Author {
  socials: {
    href: string;
    icon: Image;
  }[],
  description: string;
  fullName: string;
  photo: Image;
}
