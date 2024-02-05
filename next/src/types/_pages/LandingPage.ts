import { type CardsList } from '../_global/CardsList';
import { type Cta } from '../_global/Cta';
import { type Image } from '../_global/Image';
import { type Seo } from '../_global/Seo';

export interface LandingPage {
  page: {
    hero_Image: Image;
    hero_Paragraph: string;
    hero_Heading: string;
    hero_Subheading: string;
    hero_Cta: Cta;
    content: ContentItem[];
    seo?: Seo;
  };
}

export type ContentItem = CardsList;
