import { type ContactForm } from '../_global/ContactForm';
import { type FAQ } from '../_global/FAQ';
import { type Image } from '../_global/Image';
import { type ImageDescription } from '../_global/ImageDescription';
import { type ImageTitleDescription } from '../_global/ImageTitleDescription';
import { type Newsletter } from '../_global/Newsletter';
import { type NumberedCards } from '../_global/NumberedCards';
import { type Seo } from '../_global/Seo';
import { type Testimonial } from '../_global/Testimonial';

export interface AboutMePage {
  page: {
    hero_Heading: string;
    hero_Subheading: string;
    hero_ImageTitleSubtitleDescription: ImageTitleDescription;
    hero_ImageDescription: ImageDescription;
    hero_centralizedIconTitleDescription: ImageTitleDescription;
    hero_Image: Image;
    content: ContentItem[];
    seo: Seo;
  };
}

export type ContentItem = FAQ | Newsletter | ContactForm | Testimonial | NumberedCards;
