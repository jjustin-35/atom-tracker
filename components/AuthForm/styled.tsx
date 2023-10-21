import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { theme } from '@/constants/styles';

const btnColor = {
  default: {
    bgColor: '#ffffff',
    color: '#000000',
    hoverColor: '#ffffffB2',
  },
  google: {
    bgColor: '#ffffff',
    color: '#000000',
    hoverColor: '#ffffffB2',
  },
  facebook: {
    bgColor: '#1877f2',
    color: '#ffffff',
    hoverColor: '#1877f2B2',
  },
};

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
  background-image: linear-gradient(
    ${theme.palette.primary.light},
    ${theme.palette.primary.main}
  );
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin: 0 auto;

  ${theme.breakpoints.up('sm')} {
    width: 80px;
    height: 80px;
  }
`;

export const Image = styled.img`
  width: 18px;
  height: 18px;
`;

export const Hint = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;
`;

export const AuthButton = styled(Button)<{ buttonType: 'google' | 'facebook' }>`
  background-color: ${({ buttonType }) =>
    btnColor[buttonType].bgColor || btnColor.default.bgColor};
  color: ${({ buttonType }) =>
    btnColor[buttonType].color || btnColor.default.color};
  justify-content: center;
  :hover {
    background-color: ${({ buttonType }) =>
      btnColor[buttonType].hoverColor || btnColor.default.hoverColor};
  }
`;

export const BtnContent = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;
