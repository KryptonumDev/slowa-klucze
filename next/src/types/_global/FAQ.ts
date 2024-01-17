import { type CentralizedHeading } from "./CentralizedHeading";
import { type HeadingDescription } from "./HeadingDescription";
import { type Image } from "./Image";

export interface FAQ {
  _type?: string;
  faq: HeadingDescription[];
  description: string;
  centralizedHeading: CentralizedHeading;
  _key: string;
  title: string;
  image: Image;
}
