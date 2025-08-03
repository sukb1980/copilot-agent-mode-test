// HeroBanner.jsx
// Hero banner for the Akshay Kalash NGO website.
// Displays a prominent message and a donation call-to-action button.

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

/**
 * HeroBanner component.
 * Shows the main message and a Donate Now button.
 * @param {function} onDonateClick - Callback for the Donate button
 */
export default function HeroBanner({ onDonateClick }) {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', py: 6, borderRadius: '0 0 24px 24px', textAlign: 'center', boxShadow: 3, mb: 3 }}>
      <Typography variant="h3" fontWeight={700} mb={2}>
        Empowering Girl Children & Supporting Survivors
      </Typography>
      <Typography variant="h6" mb={3}>
        Our NGO is dedicated to providing hope, support, and opportunities for girl children and victims of rape incidents. Join us in making a difference.
      </Typography>
      <Button variant="contained" color="secondary" size="large" onClick={onDonateClick}>
        Donate Now
      </Button>
    </Box>
  );
}
