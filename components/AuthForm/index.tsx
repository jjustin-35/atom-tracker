'use client';

import { Button, Typography } from '@mui/material';

import Form, { FormComponentProps } from '@/containers/Form';
import Field from '@/containers/Field';
import { Container } from '@/constants/styles';
import { FormCompWrapper, Wrapper, Outer } from './styled';
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
    <Container>
      <Outer>
        <Wrapper>
          <Typography variant="h2" align="center" color="#000000">
            {data.title}
          </Typography>
          <Form data={data} FormComponent={FormComponent} />
        </Wrapper>
      </Outer>
    </Container>
  );
};

export default AuthForm;
