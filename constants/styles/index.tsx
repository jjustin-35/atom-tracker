import styled from '@emotion/styled';
import { Container as MuiContainer } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#268CBE',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const Container = styled(MuiContainer)`
  padding: 0 16px;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;

  ${theme.breakpoints.up('sm')} {
    max-width: 688px;
    padding: 0;
  }

  ${theme.breakpoints.up('md')} {
    max-width: 960px;
  }

  ${theme.breakpoints.up('lg')} {
    max-width: 1080px;
  }
`;
