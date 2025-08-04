// ChildProtection.jsx
// ABWU-inspired Child Protection page
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ChildProtection() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h3" sx={{ color: 'primary.main', fontFamily: 'Merriweather, serif', mb: 2 }}>
        Child Protection
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        ABWU provides a safe haven for children rescued from trafficking, abuse, and neglect. Our programs focus on rehabilitation, counseling, and reintegration into society, ensuring every child’s right to safety and dignity.
      </Typography>
    </Box>
  );
}
