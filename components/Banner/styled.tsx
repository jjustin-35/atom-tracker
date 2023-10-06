import styled from '@emotion/styled';
import { theme } from '@/constants/styles';

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  ${theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 100%;

  ${theme.breakpoints.up('sm')} {
    max-width: 480px;
  }

  ${theme.breakpoints.up('lg')} {
    max-width: 600px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;