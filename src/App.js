import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './Theme';

// Import the new layout
import MainLayout from './components/MainLayout/MainLayout';

// Import your pages
import LandingPage from "./pages/LandingPage/LandingPage";
import About from './pages/about/About';
import Offer from './pages/offer/Offer';
import Realizations from './pages/realizations/Realizations';
import Contact from './pages/contact/Contact';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => (
    <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Route for the Landing Page (doesn't use the main layout) */}
                <Route path="/" element={<LandingPage />} />

                {/* Parent route that uses MainLayout */}
                <Route element={<MainLayout />}>
                    {/* Child routes that will be rendered inside MainLayout's <Outlet /> */}
                    <Route path="/about" element={<About />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/realizations" element={<Realizations />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                {/* You can add other routes that don't use the layout here */}
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);

export default App;