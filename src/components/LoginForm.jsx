// LoginForm.jsx
// Login form for the Akshay Kalash NGO website.
// Handles user login with email and password validation.

import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

/**
 * LoginForm component.
 * Handles user login with email and password fields.
 * - Auto-focuses email field on mount
 * - Validates email and password
 * - Calls onLogin on success, onBack to cancel
 * @param {function} onBack - Callback for Back button
 * @param {function} onLogin - Callback for successful login
 */
export default function LoginForm({ onBack, onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const emailRef = useRef(null);

  useEffect(() => {
    // Blur any active element before focusing email
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
    setTimeout(() => {
      if (emailRef.current) {
        emailRef.current.focus();
      }
    }, 100);
  }, []);

  // Handle input changes
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (emailValid && form.password) {
      onLogin();
    } else {
      setError('Please enter a valid email and password.');
    }
  }

  return (
    <Box sx={{ bgcolor: 'background.paper', borderRadius: 3, boxShadow: 2, p: { xs: 2, md: 4 }, maxWidth: 400, mx: 'auto', my: 6 }}>
      <Typography variant="h4" mb={2}>User Login</Typography>
      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField
          name="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
          inputRef={emailRef}
        />
        <TextField name="password" label="Password" type="password" value={form.password} onChange={handleChange} required fullWidth />
        {error && <Typography color="error" textAlign="center">{error}</Typography>}
        <Box display="flex" gap={2} justifyContent="center">
          <Button type="submit" variant="contained" color="primary">Login</Button>
          <Button type="button" variant="outlined" color="secondary" onClick={onBack}>Back</Button>
        </Box>
      </Box>
    </Box>
  );
}
