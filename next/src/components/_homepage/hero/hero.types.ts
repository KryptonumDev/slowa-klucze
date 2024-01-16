import { type Image } from "@/types/_global/Image";

export interface Props {
  data: {
    hero_Cta: {
      text: string;
      href: string;
      theme: string;
  },
    hero_Image: Image;
    hero_Paragraph: string;
    hero_Subheading: string;
    hero_Heading: string;
  };
}