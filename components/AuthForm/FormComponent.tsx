import { Button, Typography, Divider } from '@mui/material';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { UserType } from '@/constants/types/api';
import { usePostSignUpMutation } from '@/redux/apis/auth';
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
};

const FormComponent = ({ data, variant }: Props) => {
  const [postSignUp, result] = usePostSignUpMutation();
  const router = useRouter();

  const isSubmitted = result.isSuccess;

  if (isSubmitted) {
    router.push('/auth/signin');
  }

  const onSubmit = (data: UserType) => {
    if (variant === 'signup') return postSignUp(data);
    return signIn('credentials', { callbackUrl: '/dashboard' });
  };

  const { formData, errors, handleFormData, handleError, submitHandler } =
    useForm(data.fields, onSubmit, isSubmitted);

  return (
    <form onSubmit={submitHandler}>
      <FormCompWrapper>
        {data.fields.map((field) => (
          <Field
            key={field.name}
            errors={errors}
            isReset={isSubmitted}
            confirmData={
              field.name === 'confirmPassword' && (formData.password as string)
            }
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
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
              >
                <BtnContent>
                  <Image src="/images/auth/google-icon.svg" alt="ic-google" />
                  Sign in with Google
                </BtnContent>
              </AuthButton>
              <AuthButton
                buttonType="facebook"
                variant="contained"
                onClick={() => signIn('facebook', { callbackUrl: '/dashboard' })}
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
