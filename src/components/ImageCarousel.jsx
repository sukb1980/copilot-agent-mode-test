// ImageCarousel.jsx
import React from 'react';
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export default function ImageCarousel({ images, height = 340, borderRadius = 16 }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mb: 3 }}>
      <Carousel
        autoPlay
        animation="fade"
        indicators
        navButtonsAlwaysVisible
        interval={4000}
        sx={{ borderRadius, overflow: 'hidden', boxShadow: 2 }}
      >
        {images.map((img, idx) => (
          <Box key={idx} component="img" src={img} alt="carousel" sx={{ width: '100%', height, objectFit: 'cover', borderRadius }} />
        ))}
      </Carousel>
    </Box>
  );
}
