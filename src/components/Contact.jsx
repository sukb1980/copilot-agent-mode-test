// Contact.jsx
// Contact information page for the Akshay Kalash NGO website.
// Displays email, phone, address, map, and quick links for the NGO.
// Follows accessible, modern, and empathetic design inspired by ABWU.

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import blogs from '../pages/blogData';

/**
 * Contact page component.
 * Shows the NGO's contact details, Google map, and quick navigation links.
 * Quick links include About, What We Do, Projects, News, Case History, Success Story, Support, Location, Blog, and dynamic blog posts.
 * @returns {JSX.Element} The rendered Contact page.
 */
export default function Contact() {
  return (
    <Box sx={{ bgcolor: '#f6f9f4', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, mb: 3 }}>
      {/* Contact header */}
      <Typography variant="h4" mb={2} sx={{ color: '#1b5e20', fontWeight: 700, fontFamily: 'Merriweather, Arial, serif' }}>
        Contact Us
      </Typography>
      {/* Email */}
      <Typography mb={1} sx={{ fontFamily: 'Merriweather, Arial, serif' }}>
        <strong>Email:</strong> <Link href="mailto:abwuallhome@yahoo.com" underline="hover">abwuallhome@yahoo.com</Link>
      </Typography>
      {/* Phone */}
      <Typography mb={1} sx={{ fontFamily: 'Merriweather, Arial, serif' }}>
        <strong>Phone:</strong> <Link href="tel:+913322293292" underline="hover">+91 33 2229 3292</Link>
      </Typography>
      {/* Address */}
      <Typography mb={2} sx={{ fontFamily: 'Merriweather, Arial, serif' }}>
        <strong>Address:</strong> 89, Elliot Road, Kolkata - 700016, West Bengal, India
      </Typography>
      {/* Google Map Embed */}
      <Box mb={2}>
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
      {/* Quick Links Section */}
      <Box mb={2}>
        <Typography variant="h6" sx={{ color: '#388e3c', fontWeight: 600, fontFamily: 'Merriweather, Arial, serif' }}>
          Quick Links
        </Typography>
        <Box component="ul" sx={{ pl: 2, fontFamily: 'Merriweather, Arial, serif' }}>
          <li><Link component={RouterLink} to="/aboutus" underline="hover">About Us</Link></li>
          <li><Link component={RouterLink} to="/whatwedo" underline="hover">What We Do</Link></li>
          <li><Link component={RouterLink} to="/latestprojects" underline="hover">Our Latest Projects</Link></li>
          <li><Link component={RouterLink} to="/newsroom" underline="hover">News Room</Link></li>
          <li><Link component={RouterLink} to="/casehistory" underline="hover">Case History</Link></li>
          <li><Link component={RouterLink} to="/successstory" underline="hover">Success Story</Link></li>
          <li><Link component={RouterLink} to="/supportus" underline="hover">Support Us</Link></li>
          <li><Link component={RouterLink} to="/location" underline="hover">Location</Link></li>
          <li><Link component={RouterLink} to="/blog" underline="hover">Blog</Link></li>
          {/* Dynamic blog post links */}
          {blogs.map(blog => (
            <li key={blog.id} style={{ marginLeft: 8 }}>
              <Link component={RouterLink} to={`/blog/${blog.id}`} underline="hover">
                {blog.title.length > 32 ? blog.title.slice(0, 32) + '…' : blog.title}
              </Link>
            </li>
          ))}
        </Box>
      </Box>
      {/* Footer note */}
      <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Merriweather, Arial, serif' }}>
        Follow us on <Link href="https://www.facebook.com/ABWUIndia" target="_blank" rel="noopener" underline="hover">Facebook</Link><br/>
        Copyright © 2020 ABWU - All Rights Reserved.
      </Typography>
    </Box>
  );
}
