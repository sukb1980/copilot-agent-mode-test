// ResponsiveNavbar.jsx
// Responsive navigation bar for the Akshay Kalash NGO website.
// Handles navigation, login/logout, and drawer menu for mobile.
// Follows accessible, modern, and empathetic design inspired by ABWU.

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Box, Divider, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar, Alert } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import theme from '../theme';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

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
 * ResponsiveNavbar component
 * Shows navigation links, login/logout, and a drawer menu for mobile.
 * @param {Object} props
 * @param {Function} props.onLogin - Callback for login
 * @param {Function} props.onLogout - Callback for logout
 * @param {boolean} props.isLoggedIn - User authentication state
 * @returns {JSX.Element} The rendered navigation bar
 */
export default function ResponsiveNavbar({ isLoggedIn, onLogin, onLogout }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [aboutAnchorEl, setAboutAnchorEl] = React.useState(null);
  const [createUserOpen, setCreateUserOpen] = useState(false);
  const [newUser, setNewUser] = useState({ username: '', password: '' });
  const [createUserMsg, setCreateUserMsg] = useState('');
  const [createUserError, setCreateUserError] = useState('');
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
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
      navigate('/login');
    }
  }

  const handleAboutMenuOpen = (event) => setAboutAnchorEl(event.currentTarget);
  const handleAboutMenuClose = () => setAboutAnchorEl(null);

  // Handle create user dialog open/close
  const handleOpenCreateUser = () => { setCreateUserOpen(true); setNewUser({ username: '', password: '' }); setCreateUserError(''); };
  const handleCloseCreateUser = () => setCreateUserOpen(false);

  // Handle create user form change
  const handleCreateUserChange = e => setNewUser({ ...newUser, [e.target.name]: e.target.value });

  // Handle create user submit
  const handleCreateUserSubmit = e => {
    e.preventDefault();
    if (!newUser.username || !newUser.password) {
      setCreateUserError('Username and password are required.');
      return;
    }
    // Store in localStorage (simulate server-side for this demo)
    let users = JSON.parse(localStorage.getItem('akshaykalash_users') || '{}');
    if (users[newUser.username]) {
      setCreateUserError('Username already exists.');
      return;
    }
    users[newUser.username] = newUser.password;
    localStorage.setItem('akshaykalash_users', JSON.stringify(users));
    setCreateUserMsg('User created successfully!');
    setCreateUserOpen(false);
  };

  return (
    <>
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
              {isLoggedIn && (
                <NavButton onClick={handleOpenCreateUser}>Create User</NavButton>
              )}
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
              {/* About Us submenu for mobile */}
              <ListItem
                button
                key="aboutus"
                onClick={() => setDrawerOpen(open => !open)}
                sx={{ pl: 2 }}
              >
                <ListItemText primary="About Us" primaryTypographyProps={{ sx: { fontFamily: 'Merriweather, serif', color: '#1b5e20', fontWeight: 600 } }} />
              </ListItem>
              {/* Render About Us submenus indented under About Us */}
              {drawerOpen && aboutMenuItems.map(item => (
                <ListItem
                  button
                  key={item.page}
                  component={RouterLink}
                  to={`/${item.page}`}
                  onClick={() => setDrawerOpen(false)}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={item.label} primaryTypographyProps={{ sx: { fontFamily: 'Merriweather, serif', color: '#388e3c', fontWeight: 600 } }} />
                </ListItem>
              ))}
              {/* Other nav items except About Us */}
              {navItems.filter(item => item.label !== 'About Us').map(item => (
                <ListItem 
                  button 
                  key={item.page} 
                  component={RouterLink} 
                  to={`/${item.page}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.label} primaryTypographyProps={{ sx: { fontFamily: 'Merriweather, serif', color: '#1b5e20', fontWeight: 600 } }} />
                </ListItem>
              ))}
              <Divider sx={{ my: 1 }} />
              <ListItem button onClick={handleLoginLogout}>
                <ListItemText primary={isLoggedIn ? 'Logout' : 'Login'} primaryTypographyProps={{ sx: { fontFamily: 'Merriweather, serif', color: '#bfa14a', fontWeight: 700 } }} />
                {isLoggedIn ? <LogoutIcon sx={{ color: '#bfa14a' }} /> : <LoginIcon sx={{ color: '#bfa14a' }} />}
              </ListItem>
              {isLoggedIn && (
                <ListItem button onClick={handleOpenCreateUser}>
                  <ListItemText primary="Create User" />
                </ListItem>
              )}
            </List>
          </Box>
        </Drawer>
      </StyledAppBar>
      {/* Create User Dialog */}
      <Dialog open={createUserOpen} onClose={handleCloseCreateUser}>
        <DialogTitle>Create New User</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleCreateUserSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField label="Username" name="username" value={newUser.username} onChange={handleCreateUserChange} required autoFocus />
            <TextField label="Password" name="password" type="password" value={newUser.password} onChange={handleCreateUserChange} required />
            {createUserError && <Alert severity="error">{createUserError}</Alert>}
            <DialogActions>
              <Button onClick={handleCloseCreateUser}>Cancel</Button>
              <Button type="submit" variant="contained">Create</Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
      <Snackbar open={!!createUserMsg} autoHideDuration={4000} onClose={() => setCreateUserMsg('')} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={() => setCreateUserMsg('')} severity="success" sx={{ width: '100%' }}>{createUserMsg}</Alert>
      </Snackbar>
    </>
  );
}
