// theme.js
// Custom Material UI theme for the Akshay Kalash NGO website.
// Defines color palette, typography, and component overrides for a modern, accessible, and empathetic look inspired by ABWU.

import { createTheme } from '@mui/material/styles';

/**
 * Custom MUI theme object
 * @type {import('@mui/material').Theme}
 */
const theme = createTheme({
  palette: {
    primary: { main: '#1b5e20', contrastText: '#fff' }, // Deep green
    secondary: { main: '#bfa14a', contrastText: '#fff' }, // Gold
    background: {
      default: '#f6f9f4', // Creamy white
      paper: '#fff',
    },
    text: {
      primary: '#222',
      secondary: '#4e5d4e',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
    h1: { fontFamily: 'Merriweather, serif', fontWeight: 700 },
    h2: { fontFamily: 'Merriweather, serif', fontWeight: 700 },
    h3: { fontFamily: 'Merriweather, serif', fontWeight: 700 },
    h4: { fontFamily: 'Merriweather, serif', fontWeight: 700 },
    h5: { fontFamily: 'Merriweather, serif', fontWeight: 700 },
    h6: { fontFamily: 'Merriweather, serif', fontWeight: 700 },
    body1: { fontFamily: 'Segoe UI, Arial, sans-serif' },
    body2: { fontFamily: 'Segoe UI, Arial, sans-serif' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
