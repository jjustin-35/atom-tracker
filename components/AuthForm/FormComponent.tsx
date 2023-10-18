import { Button, Typography, Divider } from '@mui/material';

import useForm from '@/helpers/useForm';
import Link from '../Link';
import Field from '@/containers/Field';
import { FormCompWrapper, Hint, Image } from './styled';
import { FormType } from './data';

const FormComponent = ({ data }: { data: FormType }) => {
  const { isReset, errors, handleFormData, handleError, submitHandler } =
    useForm(data.fields);
  return (
    <form onSubmit={submitHandler}>
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
          Sign in with Google
        </Button>
      </FormCompWrapper>
    </form>
  );
};

export default FormComponent;
