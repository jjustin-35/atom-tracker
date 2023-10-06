import styled from '@emotion/styled';
import { theme } from '@/constants/styles';

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  ${theme.breakpoints.up('md')} {
    flex-direction: row-reverse;
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
  align-items: center;
  gap: 16px;

  ${theme.breakpoints.up('md')} {
    align-items: flex-start;
    gap: 24px;
  }
`;