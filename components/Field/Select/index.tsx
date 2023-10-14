import { TextField, MenuItem } from '@mui/material';

import type { FieldType } from '@/constants/types/field';

type SelectProps = FieldType & {
  errorMessage: string;
  options: { value: string; label: string }[];
};

const SelectContainer = ({
  options,
  errorMessage,
  onBlur,
  onChange,
  handleFormData,
  validate,
  handleError,
  ...inputProps
}: SelectProps) => {
    
  return (
    <TextField select {...inputProps}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectContainer;
