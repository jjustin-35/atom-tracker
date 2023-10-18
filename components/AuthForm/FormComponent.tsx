import { Button, Typography, Divider } from '@mui/material';
import { signIn } from 'next-auth/react';

import useForm from '@/helpers/useForm';
import Link from '../Link';
import Field from '@/containers/Field';
import {
  FormCompWrapper,
  Hint,
  Image,
  AuthButtonGroup,
  GoogleButton,
  FacebookButton,
} from './styled';
import { FormType } from './data';

type Props = {
  data: FormType;
  variant: 'signin' | 'signup';
};

const FormComponent = ({ data, variant }: Props) => {
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
        {variant === 'signin' && (
          <>
            <Divider variant="middle" />
            <AuthButtonGroup>
              <GoogleButton
                variant="contained"
                onClick={() => signIn('google')}
              >
                <Image src="/images/auth/google-icon.svg" alt="ic-google" />
                Sign in with Google
              </GoogleButton>
              <FacebookButton
                variant="contained"
                onClick={() => signIn('facebook')}
              >
                <Image src="/images/auth/facebook-icon.svg" alt="ic-facebook" />
                Sign in with Facebook
              </FacebookButton>
            </AuthButtonGroup>
          </>
        )}
      </FormCompWrapper>
    </form>
  );
};

export default FormComponent;
