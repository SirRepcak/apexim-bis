// src/components/NavFooter/NavFooter.js

import React from 'react';
import { Box, Typography, Paper, useTheme } from '@mui/material';
// Using MUI Grid v2 as requested
import Grid from '@mui/material/Grid';

import SocialIcons from '../SocialIcons/SocialIcons';
import ContactButton from '../ContactButton/ContactButton';
import PersonalData from '../PersonalData/PersonalData';

const NavFooter = ({ variant = 'main' }) => {
    const theme = useTheme();

    const companyName = variant === 'security' ? "Apexim BIS sp. z o.o." : "Apexim BIS sp. z o.o.";
    const address = variant === 'security' ? "ul. Lwowska 25, 65-225 Zielona Góra" : "ul. Lwowska 25, 65-225 Zielona Góra";

    return (
        <Paper elevation={10} component="footer">
            <Box
                sx={{
                    bgcolor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    py: 5,
                    px: 3,
                }}
            >
                <Grid
                    container
                    spacing={3}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    {/* --- Left Column: Company Info & Mobile Actions --- */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 550,
                                fontSize: { xs: '1.4rem', sm: '1.5rem' }
                            }}
                        >
                            {companyName}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                            {address}
                        </Typography>

                        {/* Mobile: Action buttons are grouped together for clarity */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center', gap: 2, mt: 3 }}>
                            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', justifyContent: 'center' }}>
                                <PersonalData />
                                <ContactButton />
                            </Box>
                            <SocialIcons />
                        </Box>
                    </Grid>

                    {/* --- Center Column: Copyright and RODO Button (Desktop only) --- */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="body2">
                                © {new Date().getFullYear()} {companyName}. All rights reserved.
                            </Typography>
                            {/* THE FIX: RODO button is now here on desktop */}
                            <PersonalData sx={{ mt: 1.5 }} />
                        </Box>
                    </Grid>

                    {/* --- Right Column: Contact & Socials (Desktop only) --- */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2
                        }}>
                            <ContactButton />
                            <SocialIcons />
                        </Box>
                    </Grid>
                </Grid>

                {/* Mobile Copyright at the very bottom (as it was in the original structure) */}
                <Typography variant="caption" display="block" sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', mt: 4, opacity: 0.8 }}>
                    © {new Date().getFullYear()} {companyName}. All rights reserved.
                </Typography>
            </Box>
        </Paper>
    );
};

export default NavFooter;