// Home.jsx
// About Us page for the Akshay Kalash NGO website.
// Describes the mission and vision of the NGO.

import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * Home/About Us page component.
 * Shows a description of the NGO's mission and work.
 */
export default function Home() {
  return (
    <Box sx={{ bgcolor: '#eafbe7', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, mb: 3 }}>
      <Typography variant="h4" mb={2}>About Us</Typography>
      <Typography>
        We are a non-profit organization committed to the welfare, education, and rehabilitation of girl children and survivors of sexual violence. Our mission is to create a safe, nurturing environment and empower them to lead fulfilling lives.
      </Typography>
    </Box>
  );
}
