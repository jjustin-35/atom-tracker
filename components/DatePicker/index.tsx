import {
  LocalizationProvider,
  DatePicker as MuiDatePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

type DatePickerProps = {
  value: string;
  onChange: (value: string) => void;
};

const DatePicker = ({ value, onChange }: DatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker value={value} onChange={(value) => onChange(value)} />
    </LocalizationProvider>
  );
};

export default DatePicker;
