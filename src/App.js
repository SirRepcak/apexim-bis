import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './Theme';
import './App.css';

// Import the layout and pages
import MainLayout from './components/MainLayout/MainLayout';
import LandingPage from "./pages/LandingPage/LandingPage";
import About from './pages/about/About';
import Offer from './pages/offer/Offer';
import Realizations from './pages/realizations/Realizations';
import Contact from './pages/contact/Contact';
import AboutSecurity from './pages/aboutSecurity/aboutSecurity';
import OfferSecurity from './pages/offerSecurity/OfferSecurity';
import ContactSecurity from './pages/contactSecurity/contactSecurity';

// Import our new Banner
import CookieConsentBanner from './components/CookieConsentBanner/CookieConsentBanner';

// 1. Create a Context to share the consent state
export const CookieConsentContext = createContext(null);

// Helper functions to manage localStorage
const getConsentStatus = () => localStorage.getItem('cookie_consent');
const setConsentStatus = (status) => localStorage.setItem('cookie_consent', status);

const App = () => {
    // 2. State to hold the user's choice. 'pending' means they haven't chosen yet.
    const [consent, setConsent] = useState('pending');

    // 3. On initial load, check if a choice has already been saved in localStorage
    useEffect(() => {
        const savedStatus = getConsentStatus();
        if (savedStatus) {
            setConsent(savedStatus);
        }
    }, []);

    // 4. Functions to handle the user's decision
    const grantConsent = () => {
        setConsentStatus('granted');
        setConsent('granted');
    };

    const declineConsent = () => {
        setConsentStatus('denied');
        setConsent('denied');
    };

    return (
        <ThemeProvider theme={lightTheme}>
            {/* 5. Provide the consent status and grant function to all child components */}
            <CookieConsentContext.Provider value={{ consent, grantConsent }}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route element={<MainLayout variant="main" />}>
                            <Route path="/about" element={<About />} />
                            <Route path="/offer" element={<Offer />} />
                            <Route path="/realizations" element={<Realizations />} />
                            <Route path="/contact" element={<Contact />} />
                        </Route>
                        <Route element={<MainLayout variant="security" />}>
                            <Route path="/aboutSecurity" element={<AboutSecurity />} />
                            <Route path="/offerSecurity" element={<OfferSecurity />} />
                            <Route path="/contactSecurity" element={<ContactSecurity />} />
                        </Route>
                    </Routes>
                </BrowserRouter>

                {/* 6. If the user hasn't made a choice yet, show the banner */}
                {consent === 'pending' && (
                    <CookieConsentBanner onAccept={grantConsent} onDecline={declineConsent} />
                )}
            </CookieConsentContext.Provider>
        </ThemeProvider>
    );
};

export default App;