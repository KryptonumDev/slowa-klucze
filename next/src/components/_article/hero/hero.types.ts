import { type Categories } from '@/types/_global/Categories';
import { type Image } from '@/types/_global/Image';

export interface Props {
  data: { hero_Description: string; hero_Image: Image; hero_Title: string; categories: Categories[] };
}
