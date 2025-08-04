// ChildEducation.jsx
// ABWU-inspired Child Education page
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ChildEducation() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h3" sx={{ color: 'primary.main', fontFamily: 'Merriweather, serif', mb: 2 }}>
        Child Education
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        We believe education is the key to empowerment. ABWU offers formal and non-formal education, vocational training, and life skills development to help children build a brighter future.
      </Typography>
    </Box>
  );
}
