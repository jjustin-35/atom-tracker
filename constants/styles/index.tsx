import styled from '@emotion/styled';
import { Container as MuiContainer } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const breakpointsValues = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1920,
};

export const colors = {
  white: '#ffffff',
  black: '#000000',
  grey: '#afafaf',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: '#268CBE',
      light: '#56baed',
      dark: '#146B96',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h1: {
      fontSize: '36px',
      fontWeight: 700,
      [`@media (min-width: ${breakpointsValues.md}px)`]: {
        fontSize: '48px',
      },
    },
    h2: {
      fontSize: '28px',
      fontWeight: 700,
      [`@media (min-width: ${breakpointsValues.md}px)`]: {
        fontSize: '32px',
      },
    },
  },
  breakpoints: {
    values: breakpointsValues,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
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
