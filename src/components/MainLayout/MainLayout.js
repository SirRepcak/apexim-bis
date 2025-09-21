import React, { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../NavHeader/NavHeader';
import Footer from '../NavFooter/NavFooter';
import { Box, Container } from '@mui/material';

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

const MainLayout = () => {

    useLayoutEffect(() => {
        if (window.history.scrollRestoration) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ScrollToTop />
            <Header />

            <Container component="main" sx={{ flexGrow: 1 }} maxWidth="xl">
                <Outlet />
            </Container>

            <Footer />
        </Box>
    );
};

export default MainLayout;