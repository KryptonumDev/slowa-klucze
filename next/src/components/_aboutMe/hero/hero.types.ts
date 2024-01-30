import { type ImageDescription } from '@/types/_global/ImageDescription';
import { type ImageTitleDescription } from '@/types/_global/ImageTitleDescription';
import { type Image } from '@/types/_global/Image';
import { type ImageTitleSubtitleDescription } from '@/types/_global/ImageTitleSubtitleDescription';

export interface Props {
  hero_Heading: string;
  hero_Subheading: string;
  hero_ImageTitleSubtitleDescription: ImageTitleSubtitleDescription;
  hero_ImageDescription: ImageDescription;
  hero_centralizedIconTitleDescription: ImageTitleDescription;
  hero_Image: Image;
}
