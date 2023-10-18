'use client';

import { Button, Typography } from '@mui/material';

import Form, { FormComponentProps } from '@/containers/Form';
import Field from '@/containers/Field';
import { Container } from '@/constants/styles';
import { FormCompWrapper, Outer, Wrapper, Inner } from './styled';
import dataset from './data';

type Props = {
  variant: 'signin' | 'signup';
};

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
    </FormCompWrapper>
  );
};

const AuthForm = ({ variant }: Props) => {
  const data = dataset[variant];
  return (
    <Outer>
      <Container>
        <Wrapper>
          <Inner>
            <Typography variant="h2" align="center" color="#000000">
              {data.title}
            </Typography>
            <Form data={data} FormComponent={FormComponent} />
          </Inner>
        </Wrapper>
      </Container>
    </Outer>
  );
};

export default AuthForm;
