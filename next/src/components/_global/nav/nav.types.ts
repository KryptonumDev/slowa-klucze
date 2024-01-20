import { type Image } from '@/types/_global/Image';
import { type navigation } from '@/types/_pages/global';

export interface Props {
  data: navigation;
  logo: Image;
  socialsList: {
    href: string;
  }[];
  icons: {
    icon: JSX.Element;
    name: string;
  }[];
}
