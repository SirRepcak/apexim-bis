import React, { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../NavHeader/NavHeader';
import Footer from '../NavFooter/NavFooter';
import { Box, Container, ThemeProvider } from '@mui/material'; // MODIFICATION: Import ThemeProvider
import { lightTheme, securityLightTheme } from '../../Theme';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [pathname]);

    return null;
}

const MainLayout = ({ variant = 'main' }) => {

    useLayoutEffect(() => {
        if (window.history.scrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    // NEW: Select the theme based on the variant prop
    const theme = variant === 'security' ? securityLightTheme : lightTheme;

    return (
        // NEW: Wrap the entire layout in a ThemeProvider with the chosen theme
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
                <ScrollToTop />
                {/* MODIFICATION: Pass the variant to the Header */}
                <Header variant={variant} />

                <Container component="main" sx={{ flexGrow: 1 }} maxWidth="xl">
                    <Outlet />
                </Container>

                {/* You might want to pass the variant to the Footer too */}
                <Footer variant={variant} />
            </Box>
        </ThemeProvider>
    );
};

export default MainLayout;