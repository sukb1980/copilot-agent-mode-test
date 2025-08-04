// StaffList.jsx
// ABWU-inspired Staff List page
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function StaffList() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h3" sx={{ color: 'primary.main', fontFamily: 'Merriweather, serif', mb: 2 }}>
        Staff List
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        Meet our dedicated staff members who make our mission possible. (Staff details and photos can be added here.)
      </Typography>
    </Box>
  );
}
