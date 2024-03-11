import { type Page } from '../_pages/BlogPostPage';
import { type Cta } from './Cta';

export interface BlogReference {
  _type?: string;
  cta: Cta;
  heading: string;
  description: string;
  title: string;
  blogReference: Page[];
}
