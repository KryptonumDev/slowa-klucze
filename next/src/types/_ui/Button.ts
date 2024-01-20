export interface Button {
  data?: {
    theme?: string;
    href?: string;
    text?: string;
  },
  theme?: string;
  href?: string;
  children?: string;
  className?: string;
  svg: boolean;
  disabled?: boolean;
}