import { Button, Typography, Divider } from '@mui/material';
import Link from '../Link';
import { FormComponentProps } from '@/containers/Form';
import Field from '@/containers/Field';
import { FormCompWrapper, Hint } from './styled';

const FormComponent = ({
  errors,
  isReset,
  data,
  handleFormData,
  handleError,
}: FormComponentProps) => {
  return (
    <FormCompWrapper>
      {data.fields.map((field) => (
        <Field
          key={field.name}
          errors={errors}
          isReset={isReset}
          handleFormData={handleFormData}
          handleError={handleError}
          {...field}
        />
      ))}
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      <Hint>
        {data.hint?.map((hint, idx) => (
          <Link href={hint.link} underline="always" key={idx}>
            <Typography variant="body2" align="left" color="#000000B2">
              {hint.text}
            </Typography>
          </Link>
        ))}
      </Hint>
      <Divider variant="middle" />
      <Button
        variant="contained"
        sx={{ backgroundColor: 'white', color: 'black' }}
      >
        Google
      </Button>
    </FormCompWrapper>
  );
};

export default FormComponent;
