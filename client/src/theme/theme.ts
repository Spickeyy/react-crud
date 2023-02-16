import { createTheme } from '@mui/material';

// sukuria temą, default temos pagrindu.
const theme = createTheme({
  palette: {
    primary: {
      main: '#9e9d24',
    },
  },
  zIndex: {
    appBar: 1250,
  },
});

export default theme;
