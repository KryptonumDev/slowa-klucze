import type { FieldErrors, FieldValues, UseFormRegisterReturn } from "react-hook-form";

export interface Label {
  placeholder?: string;
  title: string;
  name: string;
  register?: UseFormRegisterReturn<string>;
  errors?: FieldErrors<FieldValues>;
  error?: string;
  type: string;
  disabled?: boolean;
}