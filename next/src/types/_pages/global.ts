import { type Cta } from '../_global/Cta';
import { type Image } from '../_global/Image';

export interface global {
  page: {
    seo: seo;
    footer: footer;
    logo: Image;
    navigation: navigation;
    socialsList: {
      icon: Image;
      href: string;
    }[];
  };
}

export interface navigation {
  cta: Cta;
}

export interface footer {
  description: string;
  portrait: Image;
}

export interface seo {
  og_Img: Image;
}
