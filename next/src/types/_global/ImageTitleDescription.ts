import { type Image } from "./Image";

export interface ImageTitleDescription {
  _type?: string;
  description: string;
  title: string;
  image: Image;
}
