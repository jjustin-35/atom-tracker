import { Button, Typography, Divider } from '@mui/material';
import { signIn } from 'next-auth/react';

import { UserType } from '@/constants/types/api';
import useForm from '@/helpers/useForm';
import Link from '../Link';
import Field from '@/containers/Field';
import {
  FormCompWrapper,
  Hint,
  Image,
  AuthButtonGroup,
  AuthButton,
  BtnContent,
} from './styled';
import { FormType } from './data';

type Props = {
  data: FormType;
  variant: 'signin' | 'signup';
  onSubmit: (data: UserType) => void;
  isSubmitted?: boolean;
};

const FormComponent = ({ data, variant, isSubmitted, onSubmit }: Props) => {
  const { errors, handleFormData, handleError, submitHandler } =
    useForm(data.fields, onSubmit, isSubmitted);

  return (
    <form onSubmit={submitHandler}>
      <FormCompWrapper>
        {data.fields.map((field) => (
          <Field
            key={field.name}
            errors={errors}
            isReset={isSubmitted}
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
              <AuthButton
                buttonType="google"
                variant="contained"
                onClick={() => signIn('google')}
              >
                <BtnContent>
                  <Image src="/images/auth/google-icon.svg" alt="ic-google" />
                  Sign in with Google
                </BtnContent>
              </AuthButton>
              <AuthButton
                buttonType="facebook"
                variant="contained"
                onClick={() => signIn('facebook')}
              >
                <BtnContent>
                  <Image
                    src="/images/auth/facebook-icon.svg"
                    alt="ic-facebook"
                  />
                  Sign in with Facebook
                </BtnContent>
              </AuthButton>
            </AuthButtonGroup>
          </>
        )}
      </FormCompWrapper>
    </form>
  );
};

export default FormComponent;
