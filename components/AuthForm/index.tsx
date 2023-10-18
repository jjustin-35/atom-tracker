'use client';

import { Typography } from '@mui/material';

import FormComponent from './FormComponent';
import { Container } from '@/constants/styles';
import { Outer, Wrapper, Inner, Icon } from './styled';
import dataset from './data';

type Props = {
  variant: 'signin' | 'signup';
};

const AuthForm = ({ variant }: Props) => {
  const data = dataset[variant];
  return (
    <Outer>
      <Container>
        <Wrapper>
          <Inner>
            <Icon src="/images/icon/ic-logo.svg" alt="ic-logo" />
            <Typography variant="h2" align="center" color="#000000">
              {data.title}
            </Typography>
            <FormComponent data={data} variant={variant} />
          </Inner>
        </Wrapper>
      </Container>
    </Outer>
  );
};

export default AuthForm;
