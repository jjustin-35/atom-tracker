import { ButtonProps, TextFieldProps } from '@mui/material';

export type ImageType = {
  src: string;
  alt: string;
};

export type LinkType = {
  href: string;
  target?: '_blank' | '_self';
  isExternal?: boolean;
  underline?: 'none' | 'hover' | 'always';
};

export type ButtonType = ButtonProps & {
  text: string;
};

export type FieldType = TextFieldProps & {
  errorMessage: string;
};
