import { type Dayjs } from 'dayjs';
import { type ContactForm } from '@/types/_global/ContactForm';

export interface Props {
  data: ContactForm;
}

export interface FormData {
  date?: Dayjs;
}
