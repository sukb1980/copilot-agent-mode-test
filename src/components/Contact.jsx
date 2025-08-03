// Contact.jsx
// Contact information page for the Akshay Kalash NGO website.
// Displays email, phone, and address for the NGO.

import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * Contact page component.
 * Shows the NGO's contact details.
 */
export default function Contact() {
  return (
    <Box sx={{ bgcolor: '#eafbe7', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, mb: 3 }}>
      <Typography variant="h4" mb={2}>Contact Us</Typography>
      <Typography>Email: support@ngoforgirls.org</Typography>
      <Typography>Phone: +91-12345-67890</Typography>
      <Typography>Address: 123 Hope Street, City, Country</Typography>
    </Box>
  );
}
