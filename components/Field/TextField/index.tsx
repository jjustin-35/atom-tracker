import { TextField } from '@mui/material';

import { FieldType } from '@/constants/types/global';

const TextFieldComp = ({
  errorMessage,
  onChange,
  onBlur,
  ...inputProps
}: FieldType) => (
  <TextField
    error={!!errorMessage}
    helperText={errorMessage}
    onChange={onChange}
    onBlur={onBlur}
    {...inputProps}
  />
);

export default TextFieldComp;
