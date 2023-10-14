import React from 'react';
import { TextField } from '@mui/material';

type ErrorType = Record<string, string>;

export type FieldType = {
  errors: ErrorType;
  isReset: boolean;
  handleFormData: (data: Record<string, string | number>) => void;
  validate: (value: string) => string;
  handleError: (data: Record<string, string>) => void;
} & React.ComponentProps<typeof TextField>;
