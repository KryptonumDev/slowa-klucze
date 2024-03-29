import { type CaseStudies } from '../_global/CaseStudies';
import { type ContactForm } from '../_global/ContactForm';
import { type FAQ } from '../_global/FAQ';
import { type Newsletter } from '../_global/Newsletter';
import { type Seo } from '../_global/Seo';
import { type Slider } from '../_global/Slider';
import { type AchievementsShowcase } from '../_global/AchievementsSchowcase';
import { type BlogReference } from '../_global/BlogReference';
import { type Offers } from '../_global/Offers';

export interface CooperationEffectsPage {
  page: {
    content: ContentItem[];
    seo: Seo;
  };
}

export type ContentItem = FAQ | Newsletter | ContactForm | Slider | CaseStudies | AchievementsShowcase | BlogReference | Offers;
