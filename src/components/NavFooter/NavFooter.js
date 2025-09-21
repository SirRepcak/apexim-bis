import React from 'react';
import { Box, Grid, Typography, Paper, useTheme } from '@mui/material';

import SocialIcons from '../SocialIcons/SocialIcons';
import ContactButton from '../ContactButton/ContactButton';

const NavFooter = () => {
    const theme = useTheme();

    return (
        <Paper elevation={10}>
        <Box
            component="footer"
            sx={{
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                py: 5,
                px: 3,
            }}
        >
            <Grid
                container
                spacing={2}
                // MODIFICATION: Justify content based on screen size
                justifyContent={{ xs: 'center', md: 'space-between' }}
                alignItems="center"
                // MODIFICATION: Center text on mobile
                textAlign={{ xs: 'center', md: 'left' }}
            >
                {/* --- Left Column: Info --- */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 550,
                            // MODIFICATION: Responsive font size
                            fontSize: { xs: '1.4rem', sm: '1.5rem' }
                        }}
                    >
                        Apexim BIS sp. z o.o.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                        ul. Lwowska 25, 65-225 Zielona Góra
                    </Typography>
                    {/* MODIFICATION: Show SocialIcons here only on mobile */}
                    <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 2 }}>
                        <SocialIcons />
                    </Box>
                </Grid>

                {/* --- Center Column: Copyright (Desktop only) --- */}
                <Grid
                    size={{ xs: 12, md: 4 }}
                    // MODIFICATION: Hide on mobile, show on desktop
                    sx={{ display: { xs: 'none', md: 'block' }, textAlign: 'center' }}
                >
                    <Typography variant="body2">
                        © {new Date().getFullYear()} Apexim BIS. All rights reserved.
                    </Typography>
                </Grid>

                {/* --- Right Column: Contact (Desktop only) --- */}
                <Grid
                    size={{ xs: 12, md: 4 }}
                    // MODIFICATION: Hide on mobile, show on desktop
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