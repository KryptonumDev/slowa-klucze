import { type CentralizedHeading } from "./CentralizedHeading";
import { type HeadingDescription } from "./HeadingDescription";
import { type Image } from "./Image";

export interface FAQ {
  _type?: string;
  faq: HeadingDescription[];
  heading: string;
  description: string;
  centralizedHeading: CentralizedHeading;
  title: string;
  image: Image;
}
