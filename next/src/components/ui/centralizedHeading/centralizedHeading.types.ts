import { type CentralizedHeading } from '@/types/_global/CentralizedHeading';

export interface Props {
  data: CentralizedHeading;
  backgroundColor?: string;
  className?: string;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
