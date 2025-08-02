import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, IconButton, Drawer, List, ListItem, ListItemText, TextField, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#43ea7c' },
    secondary: { main: '#2e8b57' },
  },
  typography: {
    fontFamily: 'Segoe UI, Arial, sans-serif',
  },
});

function HeroBanner({ onDonateClick }) {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', py: 6, borderRadius: '0 0 24px 24px', textAlign: 'center', boxShadow: 3, mb: 3 }}>
      <Typography variant="h3" fontWeight={700} mb={2}>
        Empowering Girl Children & Supporting Survivors
      </Typography>
      <Typography variant="h6" mb={3}>
        Our NGO is dedicated to providing hope, support, and opportunities for girl children and victims of rape incidents. Join us in making a difference.
      </Typography>
      <Button variant="contained" color="secondary" size="large" onClick={onDonateClick}>
        Donate Now
      </Button>
    </Box>
  );
}

function Home() {
  return (
    <Box sx={{ bgcolor: '#eafbe7', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, mb: 3 }}>
      <Typography variant="h4" mb={2}>About Us</Typography>
      <Typography>
        We are a non-profit organization committed to the welfare, education, and rehabilitation of girl children and survivors of sexual violence. Our mission is to create a safe, nurturing environment and empower them to lead fulfilling lives.
      </Typography>
    </Box>
  );
}

function Gallery() {
  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, mb: 3 }}>
      <Typography variant="h4" mb={2}>Gallery</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box component="img" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Smiling Girls Group" sx={{ width: '100%', borderRadius: 2, boxShadow: 1, display: 'block' }} loading="lazy" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box component="img" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" alt="Happy Girl Smiling" sx={{ width: '100%', borderRadius: 2, boxShadow: 1, display: 'block' }} loading="lazy" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box component="video" controls poster="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" sx={{ width: '100%', borderRadius: 2, boxShadow: 1, display: 'block' }}>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Sorry, your browser does not support embedded videos.
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

function Contact() {
  return (
    <Box sx={{ bgcolor: '#eafbe7', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, mb: 3 }}>
      <Typography variant="h4" mb={2}>Contact Us</Typography>
      <Typography>Email: support@ngoforgirls.org</Typography>
      <Typography>Phone: +91-12345-67890</Typography>
      <Typography>Address: 123 Hope Street, City, Country</Typography>
    </Box>
  );
}

function DonationForm() {
  const [form, setForm] = useState({ name: '', address: '', phone: '', email: '', amount: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Box sx={{ bgcolor: '#fff', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, mb: 3, maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h4" mb={2}>Make a Donation</Typography>
      {submitted ? (
        <Typography color="primary" fontWeight={600} textAlign="center">Thank you for your support, {form.name}!</Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <TextField name="name" label="Name" value={form.name} onChange={handleChange} required fullWidth />
          <TextField name="address" label="Address" value={form.address} onChange={handleChange} required fullWidth />
          <TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} required fullWidth />
          <TextField name="email" label="Email" type="email" value={form.email} onChange={handleChange} required fullWidth />
          <TextField name="amount" label="Amount" type="number" value={form.amount} onChange={handleChange} required fullWidth inputProps={{ min: 1 }} />
          <Button type="submit" variant="contained" color="primary">Donate</Button>
        </Box>
      )}
    </Box>
  );
}

function LoginForm({ onBack }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, maxWidth: 400, mx: 'auto', my: 6 }}>
      <Typography variant="h4" mb={2}>User Login</Typography>
      {submitted ? (
        <Typography color="primary" fontWeight={600} textAlign="center">Login successful!</Typography>
      ) : (
        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
          <TextField name="email" label="Email" type="email" value={form.email} onChange={handleChange} required fullWidth />
          <TextField name="password" label="Password" type="password" value={form.password} onChange={handleChange} required fullWidth />
          <Box display="flex" gap={2} justifyContent="center">
            <Button type="submit" variant="contained" color="primary">Login</Button>
            <Button type="button" variant="outlined" color="secondary" onClick={onBack}>Back</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#fff', color: 'secondary.main', textAlign: 'center', py: 2, mt: 4, borderRadius: 2, boxShadow: 1 }}>
      The NGO Foundation © 2025 &nbsp;|&nbsp; Empowering Girl Children & Survivors
    </Box>
  );
}

function ResponsiveNavbar({ setPage, onLogin }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
    { label: 'Donate', page: 'donate' },
  ];

  return (
    <AppBar position="static" color="inherit" elevation={1} sx={{ mb: 2 }}>
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="primary" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main' }}>
          Akshay Kalash
        </Typography>
        {!isMobile && navItems.map(item => (
          <Button key={item.page} color="primary" onClick={() => setPage(item.page)} sx={{ mx: 1 }}>
            {item.label}
          </Button>
        ))}
        <Button color="secondary" variant="contained" onClick={onLogin} sx={{ ml: 2 }}>
          Login
        </Button>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navItems.map(item => (
              <ListItem button key={item.page} onClick={() => setPage(item.page)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem button onClick={onLogin}>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

function App() {
  const [page, setPage] = useState('home');
  const [showLogin, setShowLogin] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters sx={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', px: { xs: 0, md: 0 } }}>
        <ResponsiveNavbar setPage={setPage} onLogin={() => setShowLogin(true)} />
        {showLogin ? (
          <LoginForm onBack={() => setShowLogin(false)} />
        ) : (
          <>
            <HeroBanner onDonateClick={() => setPage('donate')} />
            {page === 'home' && <Home />}
            {page === 'gallery' && <Gallery />}
            {page === 'contact' && <Contact />}
            {page === 'donate' && <DonationForm />}
          </>
        )}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
