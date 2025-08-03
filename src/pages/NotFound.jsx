// NotFound.jsx
// 404 Not Found page for the Akshay Kalash NGO website.
// Shown when a user navigates to an unknown route.

import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * NotFound page component.
 * Displays a 404 error message for unknown routes.
 */
export default function NotFound() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" color="error">404 - Page Not Found</Typography>
    </Box>
  );
}
