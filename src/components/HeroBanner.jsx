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
    <Box
      sx={{
        bgcolor: '#fffbe6',
        color: '#1b5e20',
        py: { xs: 4, md: 7 },
        borderRadius: '0 0 32px 32px',
        textAlign: 'center',
        boxShadow: 3,
        mb: 3,
        border: '2px solid #bfa14a',
        backgroundImage: 'linear-gradient(90deg, #fffbe6 0%, #f6f9f4 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h2"
        fontWeight={700}
        sx={{
          fontFamily: 'Merriweather, serif',
          color: '#bfa14a',
          mb: 1,
          textShadow: '1px 1px 0 #fff, 0 2px 8px #bfa14a33',
          letterSpacing: 1,
        }}
      >
        Right To Survive & Thrive
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Merriweather, serif',
          color: '#1b5e20',
          mb: 3,
          fontWeight: 500,
          letterSpacing: 0.5,
        }}
      >
        Let's Stand For Children's Right
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Segoe UI, Arial, sans-serif',
          color: '#333',
          maxWidth: 700,
          mx: 'auto',
          mb: 3,
          fontSize: { xs: '1rem', md: '1.15rem' },
        }}
      >
        Bengal Presidency Council of Women & the All Bengal Women's Conference formed an independent organization for Suppression of Immoral Traffic. This society came into being as <b>ALL BENGAL WOMEN'S UNION (ABWU)</b>.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={onDonateClick}
        sx={{
          fontFamily: 'Merriweather, serif',
          fontWeight: 700,
          fontSize: '1.15rem',
          px: 5,
          py: 1.5,
          borderRadius: 3,
          boxShadow: '0 2px 12px #bfa14a33',
          mb: 2,
          background: 'linear-gradient(90deg, #bfa14a 0%, #ffe082 100%)',
          color: '#1b5e20',
          '&:hover': {
            background: 'linear-gradient(90deg, #ffe082 0%, #bfa14a 100%)',
            color: '#fff',
          },
        }}
      >
        Donate Now
      </Button>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Segoe UI, Arial, sans-serif',
          color: '#388e3c',
          fontWeight: 600,
          mt: 2,
        }}
      >
        Your contribution will provide underprivileged children and girls with a chance to learn and aspire.
      </Typography>
    </Box>
  );
}
