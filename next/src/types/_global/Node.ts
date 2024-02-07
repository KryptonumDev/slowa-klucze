import { type Image } from "./Image";

export interface Node {
  children?: Node[];
  style?: string;
  text?: string;
  subheadings?: Node[];
  slug?: string;
  _type?: string;
  marks?: string;
  icon?: Image;
}