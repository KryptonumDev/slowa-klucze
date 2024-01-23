import { type ContactForm } from '../_global/ContactForm';
import { type Cta } from '../_global/Cta';
import { type FAQ } from '../_global/FAQ';
import { type Image } from '../_global/Image';
import { type Newsletter } from '../_global/Newsletter';
import { type Slider } from '../_global/Slider';
import { type Tiles } from '../_global/Tiles';

export interface homepage {
  page: {
    hero_Cta: Cta;
    hero_Image: Image;
    hero_Paragraph: string;
    hero_Subheading: string;
    hero_Heading: string;
    content: ContentItem[];
  };
}

export type ContentItem = Tiles | Slider | FAQ | Newsletter | ContactForm;
