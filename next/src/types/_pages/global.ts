import { type Image } from '../_global/Image';

export interface global {
  page: {
    seo: seo;
    footer: footer;
    logo: Image;
  };
}

export interface footer {
  socialsList: {
    icon: Image;
    href: string;
  }[];
  description: string;
  portrait: Image;
}

export interface seo {
  og_Img: Image;
}
