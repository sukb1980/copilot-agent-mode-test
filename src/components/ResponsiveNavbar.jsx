import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import theme from '../theme';

export default function ResponsiveNavbar({ setPage, onLogin, onLogout, isLoggedIn, onShowLogin }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
    { label: 'Donate', page: 'donate' },
  ];
  if (isLoggedIn) navItems.push({ label: 'Live CCTV', page: 'livecctv' });

  function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }

  function handleLoginLogout(e) {
    blurActiveElement();
    setDrawerOpen(false); // Ensure drawer closes on login/logout
    if (isLoggedIn) {
      onLogout();
    } else {
      setPage('login', 'login');
    }
  }

  function handleNav(page, e) {
    blurActiveElement();
    setPage(page, page === 'login' ? 'login' : 'body');
    setDrawerOpen(false);
  }

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
          <Button key={item.page} color="primary" onClick={e => handleNav(item.page, e)} sx={{ mx: 1 }}>
            {item.label}
          </Button>
        ))}
        <IconButton color="secondary" onClick={handleLoginLogout} sx={{ ml: 2 }} aria-label={isLoggedIn ? 'Logout' : 'Login'}>
          {isLoggedIn ? <LogoutIcon /> : <LoginIcon />}
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220 }} role="presentation">
          <List>
            {navItems.map(item => (
              <ListItem button key={item.page} onClick={e => handleNav(item.page, e)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem button onClick={handleLoginLogout}>
              <ListItemText primary={isLoggedIn ? 'Logout' : 'Login'} />
              {isLoggedIn ? <LogoutIcon color="secondary" /> : <LoginIcon color="secondary" />}
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
