// OurTeam.jsx
// ABWU-inspired Our Team page
import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';

const teamMembers = [
  { name: 'Mrs. Shukla Banerjee', role: 'President', img: null },
  { name: 'Mrs. Rina Banerjee', role: 'Vice President', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'Secretary', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'Superintendent', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'Project Director', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'Child Welfare Officer', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'Probation Officer', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'Counsellor', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'House Mother', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'House Father', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'House Attendant', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'Cook', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'Sweeper', img: null },
  { name: 'Mrs. Sarmila Basu', role: 'Watchman', img: null },
];

export default function OurTeam() {
  return (
    <Box sx={{ bgcolor: '#fffbe6', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 5 }, mb: 3, border: '2px solid #bfa14a', maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" sx={{ color: '#bfa14a', fontFamily: 'Merriweather, serif', fontWeight: 700, mb: 2, textAlign: 'center', textShadow: '1px 1px 0 #fff, 0 2px 8px #bfa14a33' }}>
        Our Team
      </Typography>
      <Typography variant="h5" sx={{ color: '#1b5e20', fontFamily: 'Merriweather, serif', fontWeight: 600, mb: 3, textAlign: 'center' }}>
        Meet the dedicated team behind ABWU
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {teamMembers.map((member, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#fff', borderRadius: 2, boxShadow: 1, p: 2, minHeight: 160 }}>
              <Avatar sx={{ width: 64, height: 64, mb: 1, bgcolor: '#bfa14a', color: '#fff', fontFamily: 'Merriweather, serif', fontWeight: 700 }}>
                {member.name.split(' ').map(n => n[0]).join('').slice(0,2)}
              </Avatar>
              <Typography variant="subtitle1" sx={{ fontFamily: 'Merriweather, serif', color: '#1b5e20', fontWeight: 700, textAlign: 'center' }}>{member.name}</Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#388e3c', textAlign: 'center' }}>{member.role}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#388e3c', fontWeight: 600, mt: 4, textAlign: 'center' }}>
        "Together, we strive to create a safe and empowering environment for every girl and woman in our care."
      </Typography>
    </Box>
  );
}
