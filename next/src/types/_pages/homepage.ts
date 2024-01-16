import { type Cta } from '../_global/Cta';
import { type Image } from '../_global/Image';

export interface homepage {
  page: {
    hero_Cta: Cta;
    hero_Image: Image;
    hero_Paragraph: string;
    hero_Subheading: string;
    hero_Heading: string;
  };
}
