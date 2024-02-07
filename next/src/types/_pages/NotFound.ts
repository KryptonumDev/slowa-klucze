import { type Cta } from "../_global/Cta";
import { type Image } from "../_global/Image";
import { type Seo } from "../_global/Seo";

export interface NotFoundPage {
  page: {
    hero_Heading: string;
    hero_Description: string;
    hero_Image: Image;
    hero_Title: string;
    hero_Cta: Cta;
    seo?: Seo;
  }
}