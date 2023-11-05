import styled from '@emotion/styled';

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 12px 10px;
  flex-wrap: wrap;
  max-width: 230px;
`;

export const IconOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const IconWrapper = styled.div`
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e0e0e0;
  cursor: pointer;
`;
