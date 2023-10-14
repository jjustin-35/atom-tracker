import { TextField } from '@mui/material';

import type { FieldType } from '@/constants/types/field';

type Props = FieldType & {
  errorMessage: string;
};

const TextFieldContainer = ({
  errorMessage,
  onChange,
  onBlur,
  handleFormData,
  validate,
  handleError,
  ...inputProps
}: Props) => {
  return (
    <TextField
      error={!!errorMessage}
      helperText={errorMessage}
      onChange={onChange}
      onBlur={onBlur}
      {...inputProps}
    />
  );
};

export default TextFieldContainer;
