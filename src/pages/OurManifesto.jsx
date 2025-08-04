// OurManifesto.jsx
// ABWU-inspired Our Manifesto page
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function OurManifesto() {
  return (
    <Box sx={{ bgcolor: '#fffbe6', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 5 }, mb: 3, border: '2px solid #bfa14a', maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" sx={{ color: '#bfa14a', fontFamily: 'Merriweather, serif', fontWeight: 700, mb: 2, textAlign: 'center', textShadow: '1px 1px 0 #fff, 0 2px 8px #bfa14a33' }}>
        Our Manifesto
      </Typography>
      <Typography variant="h5" sx={{ color: '#1b5e20', fontFamily: 'Merriweather, serif', fontWeight: 600, mb: 3, textAlign: 'center' }}>
        "Right To Survive & Thrive. Let's Stand For Children's Right."
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#333', fontSize: '1.15rem', mb: 2, textAlign: 'justify' }}>
        <b>Our Manifesto</b> is rooted in the belief that every child and woman deserves a life of dignity, safety, and opportunity. We are committed to:
        <ul style={{ marginTop: 16, marginBottom: 16 }}>
          <li>Protecting children and women from exploitation, abuse, and neglect.</li>
          <li>Providing shelter, education, and healthcare to the underprivileged.</li>
          <li>Empowering girls and women to become self-reliant and confident.</li>
          <li>Advocating for the rights of the vulnerable and voiceless in society.</li>
          <li>Fostering a nurturing environment where every individual can aspire and achieve.</li>
        </ul>
        Our work is guided by compassion, integrity, and a relentless pursuit of justice for those in need. We invite you to join us in this mission to create a world where every child and woman can survive, thrive, and dream without fear.
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#388e3c', fontWeight: 600, mt: 3, textAlign: 'center' }}>
        "Your support helps us turn this manifesto into reality."
      </Typography>
    </Box>
  );
}
