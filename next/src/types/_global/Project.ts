import { type ImageDescription } from './ImageDescription';
import { type ImageTitleDescription } from './ImageTitleDescription';
import { type Quote } from './Quote';

export interface Project {
  heading: string;
  assumptions: ImageDescription[];
  projectName: string;
  projectContent: ImageTitleDescription[];
  quote: Quote;

}
