import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(',')
  },
  palette: {
    primary: {
      main: '#3B48CC',
      100: '#3E74D6',
      200: '#418FBF',
      300: '#3EC4D6',
      400: '#3BCCB6'
    },
    error: {
      main: '#c70505',
      100: '#df0000'
    },
    info: {
      main: '#003C3A',
      100: '#668a88'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: ${['Open Sans', 'sans-serif'].join(',')};
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
        `
    }
  }
});
