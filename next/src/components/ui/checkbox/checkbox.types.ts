import type { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

export interface Props {
  text?: string;
  name: string;
  register?: UseFormRegisterReturn<string>;
  errors?: FieldErrors<FieldValues>;
  error?: string;
  disabled?: boolean;
}
