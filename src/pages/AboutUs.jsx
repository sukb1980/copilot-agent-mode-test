// AboutUs.jsx
// About Us page for the Akshay Kalash NGO website.
// Displays information about the NGO's mission, vision, and team, with an image carousel.
// Follows accessible, modern, and empathetic design inspired by ABWU.

import React from 'react';
import { Box, Typography } from '@mui/material';
import ImageCarousel from '../components/ImageCarousel';
import { aboutImages } from '../assets/CarouselImages';

/**
 * AboutUs page component
 * Shows an image carousel and detailed information about the NGO.
 * @returns {JSX.Element} The rendered About Us page
 */

export default function AboutUs() {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <ImageCarousel images={aboutImages} height={320} borderRadius={16} />
      <Typography variant="h3" sx={{ color: 'primary.main', fontFamily: 'Merriweather, serif', mb: 2 }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        {/* Add Who We Are, Manifesto, Team sections here */}
        Bengal Presidency Council of Women & the All Bengal Women's Conference formed an independent organization for Suppression of Immoral Traffic. This society came into being as ALL BENGAL WOMEN'S UNION (ABWU).<br/><br/>
        ABWU is dedicated to the right to survive and thrive. Let's stand for children's rights together.<br/><br/>
        <strong>Address:</strong> 89, Elliot Road, Kolkata - 700016, West Bengal, India<br/>
        <strong>Phone:</strong> +91 33 2229 3292<br/>
        <strong>Email:</strong> abwuallhome@yahoo.com
      </Typography>
    </Box>
  );
}
