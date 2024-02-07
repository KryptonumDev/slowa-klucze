import { type Categories } from '../_global/Categories';
import { type Page } from '../_pages/BlogPostPage';

export interface Category {
  _type?: string;
  categories: Categories[];
  blogEntries: Page[];
  totalCount: number;
}
