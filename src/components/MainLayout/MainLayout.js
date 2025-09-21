import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../NavHeader/NavHeader';
import Footer from '../NavFooter/NavFooter';
import { Box, Container, Paper } from '@mui/material';

const MainLayout = () => {
    return (

        // This outer Box remains full-width
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            {/*
        This Container will wrap your page content.
        It centers itself and applies a max-width, but leaves the Header and Footer unaffected.
      */}

            <Container component="main" sx={{ flexGrow: 1 }} maxWidth="xl">
                <Outlet />
            </Container>

            <Footer />
        </Box>
    );
};

export default MainLayout;