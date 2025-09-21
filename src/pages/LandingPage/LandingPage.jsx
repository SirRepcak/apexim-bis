import React from 'react';
import ChoiceCard from '../../components/ChoiceCard/ChoiceCard';

import logoSecurity from '../../assets/logo-sec-clean.png';
import logoInvestments from '../../assets/logo-Inv-Ser.png';
import mainLogo from '../../assets/landingLogo.png';
import securityBg from '../../assets/mainImg/10.jpg';
import investmentsBg from '../../assets/mainImg/11.jpg';

import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

const LandingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const splitDirection = isMobile ? 'column' : 'row';

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
                    flexDirection: splitDirection,
                    width: '100%',
                    height: '100%',
                }}
            >
                <ChoiceCard
                    to="/ochrona-czystosc"
                    title="Ochrona i Sprzątanie"
                    logo={logoSecurity}
                    backgroundImage={securityBg}
                    contentBg="rgba(255,156,0,0.77)"
                    hoverContentBg="rgba(230,141,0,0.92)"
                />
                <ChoiceCard
                    to="/About"
                    title="Inwestycje i Serwis"
                    logo={logoInvestments}
                    backgroundImage={investmentsBg}
                    contentBg="rgba(5,145,198,0.78)"
                    hoverContentBg="rgba(5,135,185,0.97)"
                />
            </Box>

            {/* Centered Frosted Header */}
            <Box
                sx={{
                    position: 'absolute',
                    top: isMobile ? '40%' : 48,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: isMobile ? '100vw' : 800,
                    minHeight: isMobile ? 120 : 150,
                    bgcolor: 'rgba(255,255,255,0.19)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderRadius: 30,
                    boxShadow: '0 12px 32px 0px rgba(0,0,0,0.13)',
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: isMobile ? 2 : 6,
                    py: isMobile ? 2 : 3,
                    textAlign: 'center',
                }}
            >

                <Typography
                    variant={isMobile ? 'h5' : 'h2'}
                    sx={{
                        fontFamily: "'externalFont', sans-serif",
                        fontWeight: 700,
                        letterSpacing: '0.07em',
                        mb: isMobile ? 0.5 : 1.5,
                        color: theme.palette.text.third,
                    }}
                >
                    Apexim BIS sp. z o.o.
                </Typography>
                <Typography
                    variant={isMobile ? 'subtitle1' : 'h6'}
                    sx={{
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
