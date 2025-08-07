// src/pages/LandingPage/LandingPage.js

import React from 'react';
import ChoiceCard from '../../components/ChoiceCard/ChoiceCard';
import './LandingPage.css'; // Importujemy plik CSS dla tej strony
// Zaimportuj swoje logotypy i tła
import logoSecurity from '../../assets/logo-sec-clean.png';
import logoInvestments from '../../assets/logo-Inv-Ser.png';
import mainLogo from '../../assets/landingLogo.png';
import securityBg from '../../assets/mainImg/10.jpg';
import investmentsBg from '../../assets/mainImg/11.jpg';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const LandingPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const headerSx = isMobile ? {
        position: 'absolute',
        top: '40%',
        left: '50%',
        zIndex: 20,
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: '90%',
    } : {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '900px',
        zIndex: '20',
        textAlign: 'center',
        padding: '4vh 20px 0',
        pointerEvents: 'none'
    }

    return (
        <Box
            className="landing-page-container"
            sx={{
                minHeight: '100vh',
                height: {xs: '100vh', sm: '100vh', md: 'auto'},
                overflow: 'hidden',
            }}
        >
            <Box sx={headerSx}>
                <header className="landing-page-header">
                    {!isMobile && (
                        <div className="logo-container animate-entry">
                            <img src={mainLogo} alt="Logo Firmy" className="landing-main-logo"/>
                        </div>
                    )}
                    <h1 className="landing-title animate-entry delay-1">Apexim BIS sp. z o.o.</h1>
                    <p className="landing-subtitle animate-entry delay-2">
                        Wybierz obszar, który Cię interesuje, aby zobaczyć dedykowaną ofertę.
                    </p>
                </header>
            </Box>

            <Grid container
                  size={{xs: 12}}
                  sx={{
                      width: '100%',
                  }}
            >
                <Grid size={{sm: 12, md: 6}} width={isMobile ? '100%' : 'unset'} height={isMobile ? '50%' : 'unset'}>
                    <ChoiceCard
                        to="http://www.apexim-bis.com.pl/"
                        backgroundImage={securityBg}
                        logo={logoSecurity}
                        title="Ochrona i Utrzymanie Czystości"
                        customClassName="security-choice"
                    />
                </Grid>
                <Grid size={{sm: 12, md: 6}} width={isMobile ? '100%' : 'unset'} height={isMobile ? '50%' : 'unset'}>
                    <ChoiceCard
                        to="/About"
                        backgroundImage={investmentsBg}
                        logo={logoInvestments}
                        title="Inwestycje i Serwis Techniczny"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default LandingPage;