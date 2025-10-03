// src/components/NavFooter/NavFooter.js

import React from 'react';
import { Box, Grid, Typography, Paper, useTheme } from '@mui/material';

import SocialIcons from '../SocialIcons/SocialIcons';
import ContactButton from '../ContactButton/ContactButton';

// The component now accepts a 'variant' prop
const NavFooter = ({ variant = 'main' }) => {
    const theme = useTheme();

    // You can define variant-specific content here if needed
    const companyName = variant === 'security' ? "Apexim BIS sp. z o.o." : "Apexim BIS sp. z o.o.";
    const address = variant === 'security' ? "ul. Lwowska 25, 65-225 Zielona Góra" : "ul. Lwowska 25, 65-225 Zielona Góra";


    return (
        <Paper elevation={10}>
            <Box
                component="footer"
                sx={{
                    // NO CHANGES NEEDED HERE: These values are taken directly
                    // from the correct theme (light/dark/securityLight/etc.)
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    py: 5,
                    px: 3,
                }}
            >
                <Grid
                    container
                    spacing={2}
                    justifyContent={{ xs: 'center', md: 'space-between' }}
                    alignItems="center"
                    textAlign={{ xs: 'center', md: 'left' }}
                >
                    {/* --- Left Column: Info --- */}
                    <Grid size={{xs:12, md:4}}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 550,
                                fontSize: { xs: '1.4rem', sm: '1.5rem' }
                            }}
                        >
                            {companyName} {/* Use dynamic company name */}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                            {address} {/* Use dynamic address */}
                        </Typography>
                        <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 2 }}>
                            <SocialIcons />
                        </Box>
                    </Grid>

                    {/* --- Center Column: Copyright (Desktop only) --- */}
                    <Grid
                        size={{xs:12, md:4}}
                        sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}
                    >
                        <Typography variant="body2">
                            © {new Date().getFullYear()} {companyName}. All rights reserved.
                        </Typography>
                    </Grid>

                    {/* --- Right Column: Contact (Desktop only) --- */}
                    <Grid
                        size={{xs:12, md:4}}
                        sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
                    >
                        <ContactButton />
                        <SocialIcons sx={{ ml: 2 }} />
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default NavFooter;