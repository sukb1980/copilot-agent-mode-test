// App.jsx
// Main application component for the Akshay Kalash NGO website.
// Handles routing, authentication state, and renders the main layout and all feature pages.
// Uses Material-UI for styling and theming.

import React, { useState } from 'react';
import { ThemeProvider, Container, Box } from '@mui/material';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Navigate } from 'react-router-dom';
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
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import LatestProjects from './pages/LatestProjects';
import NewsRoom from './pages/NewsRoom';
import CaseHistory from './pages/CaseHistory';
import SuccessStory from './pages/SuccessStory';
import SupportUs from './pages/SupportUs';
import Location from './pages/Location';
import WhoWeAre from './pages/WhoWeAre';
import OurManifesto from './pages/OurManifesto';
import OurTeam from './pages/OurTeam';
import ChildProtection from './pages/ChildProtection';
import ChildEducation from './pages/ChildEducation';
import AfterCare from './pages/AfterCare';
import Swadhar from './pages/Swadhar';
import ElderlyCare from './pages/ElderlyCare';
import StaffList from './pages/StaffList';
import BeneficiaryDetails from './pages/BeneficiaryDetails';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import blogs from './pages/blogData';

/**
 * Main App component for the NGO website.
 * Handles navigation, login/logout, and renders all feature pages.
 */
function App() {
  // User authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // For BlogDetail routing
  function BlogDetailWrapper() {
    const { id } = useParams();
    const blog = blogs.find(b => b.id === parseInt(id, 10));
    const navigate = useNavigate();
    return <BlogDetail blog={blog} onBack={() => navigate('/blog')} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxWidth={false} disableGutters sx={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', px: { xs: 0, md: 0 } }}>
          <ResponsiveNavbar isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} onLogout={() => setIsLoggedIn(false)} />
          <Box tabIndex={-1} sx={{ outline: 'none' }}>
            <HeroBanner onDonateClick={() => window.location.assign('/donate')} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/whatwedo" element={<WhatWeDo />} />
              <Route path="/latestprojects" element={<LatestProjects />} />
              <Route path="/newsroom" element={<NewsRoom />} />
              <Route path="/casehistory" element={<CaseHistory />} />
              <Route path="/successstory" element={<SuccessStory />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/supportus" element={<SupportUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/location" element={<Location />} />
              <Route path="/donate" element={<DonationForm />} />
              <Route path="/livecctv" element={isLoggedIn ? <LiveCCTV /> : <Navigate to="/login" />} />
              <Route path="/whoweare" element={<WhoWeAre />} />
              <Route path="/ourmanifesto" element={<OurManifesto />} />
              <Route path="/ourteam" element={<OurTeam />} />
              <Route path="/childprotection" element={<ChildProtection />} />
              <Route path="/childeducation" element={<ChildEducation />} />
              <Route path="/aftercare" element={<AfterCare />} />
              <Route path="/swadhar" element={<Swadhar />} />
              <Route path="/elderlycare" element={<ElderlyCare />} />
              <Route path="/stafflist" element={<StaffList />} />
              <Route path="/beneficiarydetails" element={<BeneficiaryDetails />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetailWrapper />} />
              <Route path="/login" element={<LoginForm onLogin={() => setIsLoggedIn(true)} />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          {/* Footer */}
          <Box component="footer" sx={{
            bgcolor: '#bfa14a',
            color: '#fff',
            textAlign: 'center',
            py: 2,
            mt: 6,
            borderRadius: 0,
            fontFamily: 'Merriweather, serif',
            fontWeight: 600,
            fontSize: { xs: '1rem', md: '1.1rem' },
            letterSpacing: 0.5,
            boxShadow: '0 -2px 8px #bfa14a33',
          }}>
            89, Elliot Road, Kolkata - 700016, West Bengal, India &nbsp;|&nbsp;
            <a href="tel:+913322293292" style={{ color: '#fff', textDecoration: 'underline' }}>+91 33 2229 3292</a> &nbsp;|&nbsp;
            <a href="mailto:abwuallhome@yahoo.com" style={{ color: '#fff', textDecoration: 'underline' }}>abwuallhome@yahoo.com</a> &nbsp;|&nbsp;
            <a href="https://www.facebook.com/ABWUIndia" target="_blank" rel="noopener" style={{ color: '#fff', textDecoration: 'underline' }}>Facebook</a>
            <br />
            Copyright © 2020 ABWU - All Rights Reserved.
          </Box>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
