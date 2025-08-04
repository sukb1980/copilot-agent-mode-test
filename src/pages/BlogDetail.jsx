// BlogDetail.jsx
// Blog detail page for the Akshay Kalash NGO website.
// Displays the full content of a single blog post, styled for readability.
// Follows accessible, modern, and empathetic design inspired by ABWU.

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

/**
 * BlogDetail page component
 * Shows the full content of a single blog post, with a back button.
 * @param {Object} props
 * @param {Object} props.blog - The blog post object to display
 * @param {Function} props.onBack - Callback for the back button
 * @returns {JSX.Element} The rendered Blog Detail page
 */
export default function BlogDetail({ blog, onBack }) {
  // Fallback content if blog prop is not provided
  if (!blog) {
    return (
      <Box sx={{ bgcolor: '#fffbe6', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 5 }, mb: 3, border: '2px solid #bfa14a', maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h4" color="error" sx={{ fontFamily: 'Merriweather, serif', fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Blog post not found
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 3, fontFamily: 'Merriweather, serif', fontWeight: 600 }} onClick={onBack}>
          Back to Blog
        </Button>
      </Box>
    );
  }

  const content = blog || {
    title: 'Empowering Girls Through Education',
    date: 'July 2025',
    body: `Education is the most powerful tool for change. At ABWU, we believe that every girl deserves the opportunity to learn, grow, and achieve her dreams. Our education initiatives include formal schooling, non-formal education, and vocational training. We have seen countless stories of transformation as girls gain confidence, skills, and hope for a brighter future.\n\nOur dedicated teachers and volunteers work tirelessly to provide a nurturing environment where every child can thrive. We invite you to support our mission and help us empower more girls through education.\n\nTogether, we can break the cycle of poverty and create lasting change.`
  };

  return (
    <Box sx={{ bgcolor: '#fffbe6', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 5 }, mb: 3, border: '2px solid #bfa14a', maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h3" sx={{ color: '#bfa14a', fontFamily: 'Merriweather, serif', fontWeight: 700, mb: 2, textAlign: 'center', textShadow: '1px 1px 0 #fff, 0 2px 8px #bfa14a33' }}>
        {content.title}
      </Typography>
      <Typography variant="caption" sx={{ color: '#888', fontFamily: 'Segoe UI, Arial, sans-serif', display: 'block', textAlign: 'center', mb: 3 }}>
        {content.date}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#333', fontSize: '1.15rem', mb: 2, textAlign: 'justify', whiteSpace: 'pre-line' }}>
        {content.body}
      </Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 3, fontFamily: 'Merriweather, serif', fontWeight: 600 }} onClick={onBack}>
        Back to Blog
      </Button>
    </Box>
  );
}
