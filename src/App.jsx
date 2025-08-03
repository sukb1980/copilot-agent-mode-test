import React, { useState, useRef } from 'react';
import { ThemeProvider, Container, Box } from '@mui/material';
import theme from './theme';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import HeroBanner from './components/HeroBanner';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import DonationForm from './components/DonationForm';
import LoginForm from './components/LoginForm';
import LiveCCTV from './components/LiveCCTV';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [page, setPage] = useState('home');
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pageBodyRef = useRef(null);

  function handleLogin() {
    setIsLoggedIn(true);
    setShowLogin(false);
  }
  function handleLogout() {
    setIsLoggedIn(false);
    setPage('home');
  }

  function handleSetPage(newPage, focusTarget) {
    if (newPage === 'login') {
      setShowLogin(true);
      setPage('home');
    } else {
      setPage(newPage);
      setShowLogin(false);
    }
    setTimeout(() => {
      if (focusTarget === 'login') return;
      if (pageBodyRef.current) {
        pageBodyRef.current.tabIndex = -1;
        pageBodyRef.current.focus();
      }
    }, 0);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false} disableGutters sx={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', px: { xs: 0, md: 0 } }}>
        <ResponsiveNavbar
          setPage={(p) => handleSetPage(p, p === 'login' ? 'login' : 'body')}
          onLogin={handleLogin}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          onShowLogin={() => { if (!isLoggedIn) handleSetPage('login', 'login'); }}
        />
        {showLogin ? (
          <LoginForm onBack={() => setShowLogin(false)} onLogin={handleLogin} />
        ) : (
          <Box ref={pageBodyRef} tabIndex={-1} sx={{ outline: 'none' }}>
            <HeroBanner onDonateClick={() => handleSetPage('donate', 'body')} />
            {page === 'home' && <Home />}
            {page === 'gallery' && <Gallery />}
            {page === 'contact' && <Contact />}
            {page === 'donate' && <DonationForm />}
            {page === 'livecctv' && isLoggedIn && <LiveCCTV />}
            {!['home', 'gallery', 'contact', 'donate', 'livecctv'].includes(page) && <NotFound />}
          </Box>
        )}
        <Box component="footer" sx={{ bgcolor: '#fff', color: 'secondary.main', textAlign: 'center', py: 2, mt: 4, borderRadius: 2, boxShadow: 1 }}>
          The NGO Foundation © 2025 &nbsp;|&nbsp; Empowering Girl Children & Survivors
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
