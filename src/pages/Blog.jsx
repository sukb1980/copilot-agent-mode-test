// Blog.jsx
// Blog listing page styled like ABWU's blog_listing.html
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import blogs from './blogData';
import { Link as RouterLink } from 'react-router-dom';

export default function Blog() {
  return (
    <Box sx={{ bgcolor: '#fffbe6', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 5 }, mb: 3, border: '2px solid #bfa14a', maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" sx={{ color: '#bfa14a', fontFamily: 'Merriweather, serif', fontWeight: 700, mb: 2, textAlign: 'center', textShadow: '1px 1px 0 #fff, 0 2px 8px #bfa14a33' }}>
        Blog
      </Typography>
      <Typography variant="h5" sx={{ color: '#1b5e20', fontFamily: 'Merriweather, serif', fontWeight: 600, mb: 3, textAlign: 'center' }}>
        Latest Posts & Stories
      </Typography>
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} key={blog.id}>
            <Card sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 1, minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#bfa14a', fontFamily: 'Merriweather, serif', fontWeight: 700, mb: 1 }}>{blog.title}</Typography>
                <Typography variant="caption" sx={{ color: '#888', fontFamily: 'Segoe UI, Arial, sans-serif' }}>{blog.date}</Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#333', mt: 1 }}>{blog.excerpt}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  component={RouterLink}
                  to={`/blog/${blog.id}`}
                  sx={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#388e3c', fontWeight: 600, mt: 4, textAlign: 'center' }}>
        "Stay tuned for more inspiring stories and updates from ABWU."
      </Typography>
    </Box>
  );
}
