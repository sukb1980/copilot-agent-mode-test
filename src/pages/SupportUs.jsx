// SupportUs.jsx
// Support Us page for the NGO, inspired by ABWU.
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SupportUs() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h3" sx={{ color: 'primary.main', fontFamily: 'Merriweather, serif', mb: 2 }}>
        Support Us
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        Your contribution will provide underprivileged children and girls with a chance to learn and aspire. Support us in our mission to empower and protect those in need.
      </Typography>
    </Box>
  );
}
