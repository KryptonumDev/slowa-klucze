import { type BlogReference } from '../_global/BlogReference';
import { type Cards } from '../_global/Cards';
import { type ContactForm } from '../_global/ContactForm';
import { type FAQ } from '../_global/FAQ';
import { type Newsletter } from '../_global/Newsletter';
import { type Offers } from '../_global/Offers';
import { type Process } from '../_global/Process';
import { type Seo } from '../_global/Seo';
import { type Tiles } from '../_global/Tiles';

export interface MyWorkPage {
  page: {
    content: ContentItem[];
    seo: Seo;
  };
}

export type ContentItem = Tiles | FAQ | Newsletter | ContactForm | Cards | Process | BlogReference | Offers;
