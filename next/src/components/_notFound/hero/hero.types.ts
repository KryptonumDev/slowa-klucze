import { type Cta } from '@/types/_global/Cta';
import { type Image } from '@/types/_global/Image';

export interface Props {
  data: {
    hero_Heading: string;
    hero_Description: string;
    hero_Image: Image;
    hero_Title: string;
    hero_Cta: Cta;
  };
}
