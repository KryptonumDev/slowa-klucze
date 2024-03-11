import { type CentralizedHeading } from './CentralizedHeading';
import { type Project } from './Project';

export interface CaseStudies {
  _type?: string;
  heading: string;
  subheading: string;
  description: string;
  projects: Project[];
  centralizedHeading?: CentralizedHeading;
}
