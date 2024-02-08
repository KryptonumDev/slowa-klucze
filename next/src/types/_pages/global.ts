import { type Cta } from '../_global/Cta';
import { type Image } from '../_global/Image';
import { type Seo } from '../_global/Seo';

export interface global {
  page: {
    seo: Seo;
    footer: footer;
    logo: Image;
    navigation: navigation;
    socials: {
      facebook: string;
      linkedin: string;
      instagram: string;
    };
  };
}

export interface navigation {
  cta: Cta;
}

export interface footer {
  description: string;
  portrait: Image;
}
