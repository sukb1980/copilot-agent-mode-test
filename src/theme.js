// theme.js
// Material-UI theme configuration for the Akshay Kalash NGO website.
// Sets up primary/secondary colors and typography for a modern, empathetic look.

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#43ea7c' },
    secondary: { main: '#2e8b57' },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
});

export default theme;
