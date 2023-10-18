import styled from '@emotion/styled';
import { theme } from '@/constants/styles';

export const FormCompWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Inner = styled.div`
  width: 100%;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 425px;
  margin: 0 auto;
`;

export const Outer = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.main});
`;
