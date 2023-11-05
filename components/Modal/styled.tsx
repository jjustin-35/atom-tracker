import styled from '@emotion/styled';
import { theme } from '@/constants/styles';

export const Outer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 16px;
  width: 100%;
  max-width: 350px;
  outline: none;
`;

export const Wrapper = styled.div`
  background-color: ${theme.palette.background.paper};
  border-radius: 8px;
`;

export const Inner = styled.div`
  padding: 16px;
`;
