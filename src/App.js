import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
// MODIFICATION: Import all themes
import { lightTheme, securityLightTheme } from './Theme';
import './App.css';

// Import the layout
import MainLayout from './components/MainLayout/MainLayout';

// Import your pages
import LandingPage from "./pages/LandingPage/LandingPage";
import About from './pages/about/About';
import Offer from './pages/offer/Offer';
import Realizations from './pages/realizations/Realizations';
import Contact from './pages/contact/Contact';

// NEW: Import your security pages (assuming you'll create them)
import AboutSecurity from './pages/aboutSecurity/aboutSecurity';
import OfferSecurity from './pages/offerSecurity/OfferSecurity';
import ContactSecurity from './pages/contactSecurity/contactSecurity';


const App = () => (
    // The outermost ThemeProvider can provide a default theme
    <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
            <Routes>
                {/* Route for the Landing Page (doesn't use the main layout) */}
                <Route path="/" element={<LandingPage />} />

                {/* Parent route for the MAIN section (blue theme) */}
                <Route element={<MainLayout variant="main" />}>
                    <Route path="/about" element={<About />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/realizations" element={<Realizations />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                {/* NEW: Parent route for the SECURITY section (orange theme) */}
                <Route element={<MainLayout variant="security" />}>
                    {/* These paths should be unique */}
                    <Route path="/aboutSecurity" element={<AboutSecurity />} />
                    <Route path="/offerSecurity" element={<OfferSecurity />} />
                    <Route path="/contactSecurity" element={<ContactSecurity />} />
                    {/* Add other security routes here */}
                </Route>

            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;