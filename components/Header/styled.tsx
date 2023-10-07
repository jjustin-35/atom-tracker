import styled from '@emotion/styled';
import { Toolbar as MuiToolbar, Button as MuiButton } from '@mui/material';

import { theme } from '@/constants/styles';

export const BrandWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;

  ${theme.breakpoints.up('md')} {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled.img`
  width: 28px;
  height: 28px;

  ${theme.breakpoints.up('md')} {
    width: 40px;
    height: 40px;
  }
`;

export const Toolbar = styled(MuiToolbar)`
  padding: 0;
  gap: 16px;
  position: relative;
  justify-content: space-between;
`;

export const MenuWrapper = styled.div`
  width: 250px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

