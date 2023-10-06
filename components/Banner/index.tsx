'use client';

import { Typography, Button } from '@mui/material';

import { Container } from '@/constants/styles';
import { BannerWrapper, Image, Content } from './styled';
import dataset from './data';

type BannerProps = {
  variant: string;
};

const Banner = ({ variant }: BannerProps) => {
  const data = dataset[variant];
  if (!data) return null;
  return (
    <Container>
      <BannerWrapper>
        <Image {...data.image} />
        <Content>
          <Typography variant="h1" align="center" color="primary">
            {data.title}
          </Typography>
          {data.desc && (
            <Typography variant="body1" align="center" color="text">
              {data.desc}
            </Typography>
          )}
          {data.button && (
            <Button {...data.button}>
              {data.button.text}
            </Button>
          )}
        </Content>
      </BannerWrapper>
    </Container>
  );
};

export default Banner;
