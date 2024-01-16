import { type Cta } from '../_global/Cta';
import { type Image } from '../_global/Image';

export interface global {
  page: {
    seo: seo;
    footer: footer;
    logo: Image;
    navigation: navigation;
  };
}

export interface navigation {
  cta: Cta;
  socialsList: {
    icon: Image;
    href: string;
  }[];
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
