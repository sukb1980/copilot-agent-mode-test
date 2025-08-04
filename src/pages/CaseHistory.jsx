// CaseHistory.jsx
// Case History page for the NGO, inspired by ABWU.
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const cases = [
  {
    title: 'Case 1: Rekha',
    desc: 'Rekha, a minor girl, was rescued from a trafficking racket and brought to ABWU. With counseling, education, and vocational training, she has now completed her schooling and is pursuing a diploma in nursing.'
  },
  {
    title: 'Case 2: Sita',
    desc: 'Sita was abandoned by her family and found shelter at ABWU. She excelled in her studies and is now working as a teacher, inspiring other girls to follow their dreams.'
  },
  {
    title: 'Case 3: Maya',
    desc: 'Maya, a survivor of abuse, received psychological support and care at ABWU. She has been successfully reintegrated with her family and continues her education.'
  },
  {
    title: 'Case 4: Laxmi',
    desc: 'Laxmi was rescued from child labor and given a new life at ABWU. She is now a skilled tailor and supports herself independently.'
  },
];

export default function CaseHistory() {
  return (
    <Box sx={{ bgcolor: '#fffbe6', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 5 }, mb: 3, border: '2px solid #bfa14a', maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h3" sx={{ color: '#bfa14a', fontFamily: 'Merriweather, serif', fontWeight: 700, mb: 2, textAlign: 'center', textShadow: '1px 1px 0 #fff, 0 2px 8px #bfa14a33' }}>
        Case History
      </Typography>
      <Typography variant="h5" sx={{ color: '#1b5e20', fontFamily: 'Merriweather, serif', fontWeight: 600, mb: 3, textAlign: 'center' }}>
        Stories of Change
      </Typography>
      <Grid container spacing={3}>
        {cases.map((c, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Card sx={{ bgcolor: '#fff', borderRadius: 2, boxShadow: 1, minHeight: 140 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#bfa14a', fontFamily: 'Merriweather, serif', fontWeight: 700, mb: 1 }}>{c.title}</Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#333' }}>{c.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" sx={{ fontFamily: 'Segoe UI, Arial, sans-serif', color: '#388e3c', fontWeight: 600, mt: 4, textAlign: 'center' }}>
        "Every story is a testament to hope, resilience, and the power of support."
      </Typography>
    </Box>
  );
}
