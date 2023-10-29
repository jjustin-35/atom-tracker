import styled from '@emotion/styled';
import { theme } from '@/constants/styles';

export const Outer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: ${theme.palette.background.paper};
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  padding: 16px;
`;
