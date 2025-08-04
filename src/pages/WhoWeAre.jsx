// WhoWeAre.jsx
// ABWU-inspired Who We Are page
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function WhoWeAre() {
  return (
    <Box sx={{ bgcolor: '#fffbe6', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 5 }, mb: 3, border: '2px solid #bfa14a', maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" sx={{ color: '#bfa14a', fontFamily: 'Merriweather, serif', fontWeight: 700, mb: 2, textAlign: 'center', textShadow: '1px 1px 0 #fff, 0 2px 8px #bfa14a33' }}>
        Who We Are
      </Typography>
      <Typography variant="h5" sx={{ color: '#1b5e20', fontFamily: 'Merriweather, serif', fontWeight: 600, mb: 3, textAlign: 'center' }}>
        Right To Survive & Thrive. Let's Stand For Children's Right.
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#333', fontSize: '1.15rem', mb: 2, textAlign: 'justify' }}>
        Bengal Presidency Council of Women & the All Bengal Women's Conference formed an independent organization for Suppression of Immoral Traffic. This society came into being as <b>ALL BENGAL WOMEN'S UNION (ABWU)</b>.<br /><br />
        ABWU is dedicated to the right to survive and thrive. We stand for the protection, education, and empowerment of underprivileged girls and women. Our mission is to provide shelter, education, and support to those in need, and to advocate for the rights of women and children in society.<br /><br />
        Our journey began with a vision to create a safe, nurturing environment for every child and woman. Today, ABWU continues to work tirelessly to ensure that every individual in our care has the opportunity to aspire, achieve, and lead a life of dignity.
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#388e3c', fontWeight: 600, mt: 3, textAlign: 'center' }}>
        "Your contribution will provide underprivileged children and girls with a chance to learn and aspire."
      </Typography>
    </Box>
  );
}
