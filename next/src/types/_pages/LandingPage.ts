import { type AchievementsShowcase } from '../_global/AchievementsSchowcase';
import { type Cards } from '../_global/Cards';
import { type CardsList } from '../_global/CardsList';
import { type CaseStudies } from '../_global/CaseStudies';
import { type ContactForm } from '../_global/ContactForm';
import { type Cta } from '../_global/Cta';
import { type FAQ } from '../_global/FAQ';
import { type Image } from '../_global/Image';
import { type Process } from '../_global/Process';
import { type Seo } from '../_global/Seo';
import { type Slider } from '../_global/Slider';
import { type Tiles } from '../_global/Tiles';
import { type Partners } from '../_global/Partners';
import { type ProsAndCons } from '../_global/ProsAndCons';
import { type Offers } from '../_global/Offers';

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
  landingPages: {
    slug: {
      current: string;
    };
  }[];
}

export type ContentItem =
  | CardsList
  | Process
  | Cards
  | ContactForm
  | FAQ
  | AchievementsShowcase
  | Slider
  | CaseStudies
  | Tiles
  | Partners
  | ProsAndCons
  | Offers;
