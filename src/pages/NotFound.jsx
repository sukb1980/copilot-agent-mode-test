import React from 'react';
import { Box, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" color="error">404 - Page Not Found</Typography>
    </Box>
  );
}
