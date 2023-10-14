import { TextField, MenuItem } from '@mui/material';

import { FieldType } from '@/constants/types/global';

type SelectProps = FieldType & {
  options: { value: string; label: string }[];
};

const Select = ({
  options,
  errorMessage,
  onBlur,
  onChange,
  ...inputProps
}: SelectProps) => (
  <TextField select onBlur={onBlur} onChange={onChange} {...inputProps}>
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

export default Select;
