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
            <header className="landing-page-header">
                {/* Dodajemy klasę animacji do kontenera z logo */}
                <div className="logo-container animate-entry">
                    <img src={mainLogo} alt="Logo Firmy" className="landing-main-logo" />
                </div>
                {/* Dodajemy klasy animacji i opóźnienia do tekstów */}
                <h1 className="landing-title animate-entry delay-1">Apexim BIS sp. z o.o.</h1>
                <p className="landing-subtitle animate-entry delay-2">
                    Wybierz obszar, który Cię interesuje, aby zobaczyć dedykowaną ofertę.
                </p>
            </header>

            <main className="landing-choice-wrapper">
                {/* Opakowujemy każdą kartę w div, aby móc ją animować */}
                <div className="choice-card-wrapper left animate-entry delay-3">
                    <ChoiceCard
                        to="http://www.apexim-bis.com.pl/"
                        backgroundImage={securityBg}
                        logo={logoSecurity}
                        title="Ochrona i Utrzymanie Czystości"
                        customClassName="security-choice"
                    />
                </div>
                <div className="choice-card-wrapper right animate-entry delay-3">
                    <ChoiceCard
                        to="/About"
                        backgroundImage={investmentsBg}
                        logo={logoInvestments}
                        title="Inwestycje i Serwis Techniczny"
                    />
                </div>
            </main>
        </div>
    );
};

export default LandingPage;