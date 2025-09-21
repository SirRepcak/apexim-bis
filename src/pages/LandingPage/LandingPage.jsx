import React from 'react';
import ChoiceCard from '../../components/ChoiceCard/ChoiceCard';

import logoSecurity from '../../assets/logo-sec-clean.png';
import logoInvestments from '../../assets/logo-Inv-Ser.png';
import securityBg from '../../assets/mainImg/10.jpg';
import investmentsBg from '../../assets/mainImg/11.jpg';

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
                    to="/ochrona-czystosc"
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

            {/* Centered Frosted Header */}
            <Box
                sx={{
                    position: 'absolute',
                    top: { xs: '40%', md: 48 },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: 'calc(100% - 32px)', sm: '85%', md: 800 },
                    minHeight: { xs: 120, md: 150 },
                    px: { xs: 2, md: 6 },
                    py: { xs: 2, md: 3 },
                    bgcolor: theme.palette.glass.background,
                    boxShadow: theme.shadows[24],
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: 30,
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '3.75rem' },
                        mb: { xs: 0.5, md: 1.5 },
                        fontWeight: 700,
                        letterSpacing: '0.07em',
                        color: theme.palette.text.third,
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
                    }}
                >
                    Wybierz, interesujący cię dział
                </Typography>
            </Box>
        </Box>
    );
};

export default LandingPage;