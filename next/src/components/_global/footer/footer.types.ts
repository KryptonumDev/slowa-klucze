import { type Image } from '@/types/_global/Image';
import { type footer } from '@/types/_pages/global';

export interface Props {
  data: footer;
  logo: Image;
  socialsList: {
    href: string;
  }[];
  icons: {
    icon: JSX.Element;
    name: string;
  }[];
}
