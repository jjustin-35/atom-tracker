import styled from '@emotion/styled';
import { colors } from '@/constants/styles';

export const Wrapper = styled.div<{ isNewItem: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  border-width: 1px;
  border-style: ${({ isNewItem }) => (isNewItem ? 'dashed' : 'solid')};
  border-color: ${({ isNewItem }) => (isNewItem ? colors.grey : colors.black)};
  color: ${({ isNewItem }) => (isNewItem ? colors.grey : colors.black)};
  cursor: pointer;
`;
