// ResponsiveNavbar.jsx
// Responsive navigation bar for the Akshay Kalash NGO website.
// Handles navigation, login/logout, and drawer menu for mobile.

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from '../theme';

/**
 * ResponsiveNavbar component.
 * Shows navigation links, login/logout, and a drawer menu for mobile.
 * @param {function} setPage - Callback to set the current page
 * @param {function} onLogin - Callback for login
 * @param {function} onLogout - Callback for logout
 * @param {boolean} isLoggedIn - User authentication state
 * @param {function} onShowLogin - Callback to show login form
 */
export default function ResponsiveNavbar({ setPage, onLogin, onLogout, isLoggedIn, onShowLogin }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
    { label: 'Donate', page: 'donate' },
  ];
  if (isLoggedIn) navItems.push({ label: 'Live CCTV', page: 'livecctv' });

  // Blur active element for accessibility
  function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  }

  // Handle login/logout button
  function handleLoginLogout(e) {
    blurActiveElement();
    setDrawerOpen(false); // Ensure drawer closes on login/logout
    if (isLoggedIn) {
      onLogout();
    } else {
      setPage('login', 'login');
    }
  }

  // Handle navigation
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
