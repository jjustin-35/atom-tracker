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
  errorMessage?: string;
};

type ErrorType = Record<string, string>;

export type TextFieldType = {
  value?: any;
  errors: ErrorType;
  isReset: boolean;
  confirmData?: string;
  handleFormData: (data: Record<string, string | number>) => void;
  handleError: (data: Record<string, string>) => void;
} & TextFieldProps;

export type SelectType = TextFieldType & {
  type: 'select';
  options: { value: string; label: string }[];
};

export type FormDataType = Record<string, string | number>;
