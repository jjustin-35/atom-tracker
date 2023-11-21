import styled from '@emotion/styled';
import { colors, theme } from '@/constants/styles';

export const AddButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 50%;
  transform: translateX(50%);
  z-index: 999;
  border-radius: 50%;
  background-color: ${theme.palette.primary.main};
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: ${theme.palette.primary.dark};
  }
`;
