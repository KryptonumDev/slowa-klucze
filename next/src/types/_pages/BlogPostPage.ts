import { type Author } from '../_global/Author';
import { type Categories } from '../_global/Categories';
import { type Image } from '../_global/Image';
import { type Node } from '../_global/Node';
import { type Seo } from '../_global/Seo';

export interface BlogPostPage {
  page: {
    hero_Image: Image;
    hero_Title: string;
    hero_Description: string;
    categories: Categories[];
    author: Author;
    content: Node[];
    seo: Seo;
  };
  blogPosts: {
    slug: {
      current: string;
    };
  }[];
}
