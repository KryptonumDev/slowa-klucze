import { type Category } from '../_blog/Category';
import { type Categories } from '../_global/Categories';
import { type Cta } from '../_global/Cta';
import { type Newsletter } from '../_global/Newsletter';
import { type Seo } from '../_global/Seo';
import { type Page } from './BlogPostPage';

export interface BlogPage {
  page: {
    hero_Heading: string;
    hero_Subheading: string;
    hero_Form: HeroForm;
    hero_Description: string;
    content: ContentItem[];
    seo: Seo;
  };
  totalCount?: number;
  blogCategories?: Categories[];
  allBlogEntries?: Page[];
}

export type ContentItem = Page | Newsletter | Category;

interface HeroForm {
  title: string;
  formCta: Cta;
}
