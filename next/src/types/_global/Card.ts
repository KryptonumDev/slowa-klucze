import { type Image } from "./Image";

export interface Card {
  icon: Image;
  title: string;
  description: string;
  plusesDescription: string;
  pluses: string[];
}