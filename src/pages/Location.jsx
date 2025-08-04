// Location.jsx
// Location page for the NGO, inspired by ABWU.
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Location() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h3" sx={{ color: 'primary.main', fontFamily: 'Merriweather, serif', mb: 2 }}>
        Location
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        89, Elliot Road, Kolkata - 700016, West Bengal, India<br/>
        <strong>Phone:</strong> +91 33 2229 3292<br/>
        <strong>Email:</strong> abwuallhome@yahoo.com
      </Typography>
      <Box mt={2}>
        <iframe
          title="ABWU Location"
          src="https://www.google.com/maps?q=89+Elliot+Road,+Kolkata,+West+Bengal+700016,+India&output=embed"
          width="100%"
          height="220"
          style={{ border: 0, borderRadius: 8 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
}
