import React from 'react';
import ChoiceCard from '../../components/ChoiceCard/ChoiceCard';

import logoSecurity from '../../assets/logo-sec-clean.webp';
import logoInvestments from '../../assets/logo-Inv-Ser.webp';
import securityBg from '../../assets/mainImg/10.webp';
import investmentsBg from '../../assets/mainImg/11.webp';
import landingLogo from '../../assets/landingLogo.webp'; // IMPORT THE NEW LOGO

// MODIFICATION: Import useMediaQuery to check screen size
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const LandingPage = () => {
    const theme = useTheme();
    // MODIFICATION: Check if the viewport is 'md' or wider. Returns true for desktop, false for mobile.
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            bgcolor: 'background.default',
        }}>
            {/* Choice cards split */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    width: '100%',
                    height: '100%',
                }}
            >
                <ChoiceCard
                    to="/aboutSecurity"
                    title="Ochrona i Sprzatanie"
                    logo={logoSecurity}
                    backgroundImage={securityBg}
                    contentBg={theme.palette.secondary.translucent}
                    hoverContentBg={theme.palette.secondary.translucentHover}
                    slideDirection={isDesktop ? 'right' : 'down'}
                />
                <ChoiceCard
                    to="/About"
                    title="Inwestycje i Serwis"
                    logo={logoInvestments}
                    backgroundImage={investmentsBg}
                    contentBg={theme.palette.primary.translucent}
                    hoverContentBg={theme.palette.primary.translucentHover}
                    slideDirection={isDesktop ? 'left' : 'up'}
                />
            </Box>

            {/* MODIFIED: Header with responsive positioning and hidden mobile logo */}
            <Box
                sx={{
                    position: 'absolute',
                    // On mobile (xs), center it. On desktop (md), position it closer to the top.
                    top: { xs: '50%', md: 32 },
                    left: '50%',
                    transform: {
                        xs: 'translate(-50%, -50%)',
                        md: 'translateX(-50%)'
                    },
                    width: { xs: 'calc(100% - 32px)', sm: '85%' },
                    maxWidth: 700, // Reduced max width
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 3 },
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                {/* MODIFIED: White circle is now smaller and hidden on mobile */}
                <Box
                    sx={{
                        // Hide on mobile (xs), display as flex on desktop (md)
                        display: { xs: 'none', md: 'flex' },
                        width: 150, // Smaller fixed size
                        height: 150,
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 18px rgba(0,0,0,0.13)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2, // Adjusted margin bottom
                    }}
                >
                    <Box
                        component="img"
                        src={landingLogo}
                        alt="Apexim BIS Logo"
                        sx={{
                            maxWidth: '70%',
                            maxHeight: '70%',
                            objectFit: 'contain',
                        }}
                    />
                </Box>
                <Typography
                    variant="h5"
                    sx={{
                        // MODIFIED: Reduced desktop font size
                        fontSize: { xs: '1.75rem', md: '3rem' },
                        mb: { xs: 0.5, md: 1.5 },
                        fontWeight: 700,
                        letterSpacing: '0.07em',
                        color: theme.palette.text.third,
                        textShadow: '1px 1px 5px rgba(0,0,0,0.25)',
                    }}
                >
                    Apexim BIS sp. z o.o.
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 400,
                        color: theme.palette.text.third,
                        textShadow: '1px 1px 4px rgba(0,0,0,0.35)',
                    }}
                >
                    Wybierz, interesujący cię dział
                </Typography>
            </Box>
        </Box>
    );
};

export default LandingPage;