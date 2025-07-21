// src/pages/LandingPage/LandingPage.js

import React from 'react';
import ChoiceCard from '../../components/ChoiceCard/ChoiceCard';
import './LandingPage.css'; // Importujemy plik CSS dla tej strony

// Zaimportuj swoje logotypy i tła
import logoSecurity from '../../assets/logo-sec-clean.png';
import logoInvestments from '../../assets/logo-Inv-Ser.png';
import mainLogo from '../../assets/logo.png';
import securityBg from '../../assets/image-team.jpg';
import investmentsBg from '../../assets/image-team.jpg';

const LandingPage = () => {
    return (
        <div className="landing-page-container">
            {/* Nagłówek jest teraz warstwą nałożoną na tło */}
            <header className="landing-page-header">

                <h1 className="landing-title">Apexim BIS sp. z o.o.</h1>
                <p className="landing-subtitle">
                    Wybierz obszar, który Cię interesuje, aby zobaczyć dedykowaną ofertę.
                </p>
            </header>

            {/* Dwie główne opcje wyboru zajmują całą przestrzeń */}
            <main className="landing-choice-wrapper">
                <ChoiceCard
                    to="http://www.apexim-bis.com.pl/"
                    backgroundImage={securityBg}
                    logo={logoSecurity}
                    title="Ochrona i Utrzymanie Czystości"
                    // Dodajemy niestandardową klasę do zmiany koloru
                    customClassName="security-choice"
                />
                <ChoiceCard
                    to="/About"
                    backgroundImage={investmentsBg}
                    logo={logoInvestments}
                    title="Inwestycje i Serwis Techniczny"
                />
            </main>
        </div>
    );
};

export default LandingPage;