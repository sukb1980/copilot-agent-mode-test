// ResponsiveNavbar.jsx
// Responsive navigation bar for the Akshay Kalash NGO website.
// Handles navigation, login/logout, and drawer menu for mobile.

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Box, Divider, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import theme from '../theme';
import { Link as RouterLink } from 'react-router-dom';

// Styled components for ABWU-like look
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, #fffbe6 0%, #f6f9f4 100%)',
  borderBottom: '3px solid #bfa14a',
  boxShadow: '0 2px 12px #bfa14a22',
}));
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
const NavButton = styled(Button)(({ theme }) => ({
  fontFamily: 'Merriweather, serif',
  fontWeight: 600,
  fontSize: '1.05rem',
  color: '#1b5e20',
  background: 'none',
  borderRadius: 8,
  padding: '8px 18px',
  margin: '0 2px',
  textTransform: 'none',
  letterSpacing: 0.5,
  '&:hover': {
    background: '#fffde7',
    color: '#bfa14a',
    boxShadow: '0 2px 8px #bfa14a33',
  },
}));
const Brand = styled(Typography)(({ theme }) => ({
  fontFamily: 'Merriweather, serif',
  fontWeight: 900,
  fontSize: '2rem',
  color: '#bfa14a',
  letterSpacing: 1,
  textShadow: '1px 1px 0 #fff, 0 2px 8px #bfa14a33',
  flexGrow: 1,
  cursor: 'pointer',
}));

const aboutMenuItems = [
  { label: 'Who We Are', page: 'whoweare' },
  { label: 'Our Manifesto', page: 'ourmanifesto' },
  { label: 'Our Team', page: 'ourteam' },
];

/**
 * ResponsiveNavbar component.
 * Shows navigation links, login/logout, and a drawer menu for mobile.
 * @param {function} onLogin - Callback for login
 * @param {function} onLogout - Callback for logout
 * @param {boolean} isLoggedIn - User authentication state
 * @param {function} onShowLogin - Callback to show login form
 */
export default function ResponsiveNavbar({ isLoggedIn, onLogin, onLogout }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navItems = [
    { label: 'About Us', page: 'aboutus' },
    { label: 'What We Do', page: 'whatwedo' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'News Room', page: 'newsroom' },
    { label: 'Case History', page: 'casehistory' },
    { label: 'Blog', page: 'blog' },
    { label: 'Support Us', page: 'donate' }, // Change Donate to Support Us
    { label: 'Contact', page: 'contact' },
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

  const handleAboutMenuOpen = (event) => setAboutAnchorEl(event.currentTarget);
  const handleAboutMenuClose = () => setAboutAnchorEl(null);

  return (
    <StyledAppBar position="static" elevation={2}>
      <StyledToolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(true)}>
            <MenuIcon sx={{ color: '#bfa14a', fontSize: 32 }} />
          </IconButton>
        )}
        <Brand component={RouterLink} to="/">ABWU</Brand>
        {!isMobile && (
          <>
            <NavButton
              aria-controls={aboutAnchorEl ? 'about-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={aboutAnchorEl ? 'true' : undefined}
              onClick={handleAboutMenuOpen}
              endIcon={<ArrowDropDownIcon />}
            >
              About Us
            </NavButton>
            <Menu
              id="about-menu"
              anchorEl={aboutAnchorEl}
              open={Boolean(aboutAnchorEl)}
              onClose={handleAboutMenuClose}
              MenuListProps={{ 'aria-labelledby': 'about-menu-button' }}
              sx={{ mt: 1 }}
            >
              {aboutMenuItems.map((item) => (
                <MenuItem
                  key={item.page}
                  component={RouterLink}
                  to={`/${item.page}`}
                  onClick={handleAboutMenuClose}
                  sx={{ fontFamily: 'Merriweather, serif', color: '#1b5e20', fontWeight: 600 }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
            {navItems.filter(item => item.label !== 'About Us').map(item => (
              <NavButton key={item.page} component={RouterLink} to={`/${item.page}`}>{item.label}</NavButton>
            ))}
          </>
        )}
        <IconButton color="inherit" onClick={handleLoginLogout} sx={{ ml: 2 }} aria-label={isLoggedIn ? 'Logout' : 'Login'}>
          {isLoggedIn ? <LogoutIcon sx={{ color: '#bfa14a' }} /> : <LoginIcon sx={{ color: '#bfa14a' }} />}
        </IconButton>
      </StyledToolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, bgcolor: '#fffbe6', height: '100%' }} role="presentation">
          <Box sx={{ p: 2, bgcolor: '#bfa14a', color: '#fff', textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Merriweather, serif', fontWeight: 700 }}>ABWU Menu</Typography>
          </Box>
          <Divider />
          <List>
            {navItems.map(item => (
              <ListItem button key={item.page} component={RouterLink} to={`/${item.page}`}>
                <ListItemText primary={item.label} primaryTypographyProps={{ sx: { fontFamily: 'Merriweather, serif', color: '#1b5e20', fontWeight: 600 } }} />
              </ListItem>
            ))}
            <Divider sx={{ my: 1 }} />
            <ListItem button onClick={handleLoginLogout}>
              <ListItemText primary={isLoggedIn ? 'Logout' : 'Login'} primaryTypographyProps={{ sx: { fontFamily: 'Merriweather, serif', color: '#bfa14a', fontWeight: 700 } }} />
              {isLoggedIn ? <LogoutIcon sx={{ color: '#bfa14a' }} /> : <LoginIcon sx={{ color: '#bfa14a' }} />}
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </StyledAppBar>
  );
}
