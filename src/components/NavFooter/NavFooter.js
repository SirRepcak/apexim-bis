import React from 'react';
import { Button, Box, Grid, Typography, Link, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { TbPhone } from 'react-icons/tb';

// Import the social media icons
import SocialIcons from '../SocialIcons/SocialIcons'
import ContactButton from '../ContactButton/ContactButton';

const NavFooter = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));



    return (
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
                justifyContent={isMobile ? 'center' : 'space-between'}
                alignItems="center"
            >
                {/* --- Mobile View --- */}
                {isMobile && (
                    <Grid size={{xs:12}} sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            Apexim BIS sp. z o.o.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                            ul. Lwowska 25, 65-225 Zielona Góra
                        </Typography>
                        {/* Call the function to render the icons */}
                        <SocialIcons sx={{ mt: 2 }} />
                    </Grid>
                )}

                {/* --- Desktop View --- */}
                {!isMobile && (
                    <>
                        <Grid size={{xs:12, md:4}} sx={{ textAlign: 'left' }}>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                Apexim BIS sp. z o.o.
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 0.5 }}>
                                ul. Lwowska 25, 65-225 Zielona Góra
                            </Typography>
                        </Grid>
                        <Grid size={{xs:12, md:4}} sx={{ textAlign: 'center' }}>
                            <Typography variant="body2">
                                © {new Date().getFullYear()} Apexim BIS. All rights reserved.
                            </Typography>
                        </Grid>
                        <Grid size={{xs:12, md:4}}>
                            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-end'}}>
                                <ContactButton/>
                                <SocialIcons sx={{ mr: 2 }} />
                                {/* Call the function to render the icons */}
                            </Box>
                        </Grid>
                    </>
                )}
            </Grid>
        </Box>
    );
};
export default NavFooter;