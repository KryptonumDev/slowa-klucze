import { type Cta } from '@/types/_global/Cta';

export interface Props {
  data: {
    hero_Heading: string;
    hero_Description: string;
    hero_Subheading: string;
    hero_Form: {
      title: string;
      formCta: Cta;
    };
  };
}
