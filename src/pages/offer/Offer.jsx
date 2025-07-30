// src/pages/Offer/Offer.js
import React, {useState} from 'react';
// =======================================================
// === STEP 1: ADD THIS IMPORT ===
// =======================================================
import {Link} from 'react-router-dom';
// =======================================================
import Header from '../../components/NavHeader/NavHeader';
import Footer from '../../components/NavFooter/NavFooter';
import './Offer.css';
import ExpandableFeatureSection from '../../components/FeatureSection/ExpandableFeatureSection';
import OfferNavigation from '../../components/OfferNavigation/OfferNavigation';
import FeatureGrid from "../../components/FeatureSection/FeatureGrid";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Ikony
import {FaCertificate, FaWrench} from 'react-icons/fa';
import {
    TbBrain,
    TbBulb,
    TbClipboardCheck,
    TbClockHour4,
    TbDeviceDesktopCheck,
    TbFileCertificate,
    TbLicense,
    TbLockAccess,
    TbMail,
    TbNetwork,
    TbRulerMeasure,
    TbShieldCheck,
    TbUserShield,
    TbVideo
} from "react-icons/tb";

// Obrazki (upewnij się, że ścieżki są poprawne)
import investmentsImage from '../../assets/image-desk.jpg';
import designImage from '../../assets/image-desk.jpg';
import serviceImage from '../../assets/image-team.jpg';
import permissionsImage from '../../assets/image-team.jpg';
import consultingImage from '../../assets/hand-shake.jpg';
import logoImageSecurity from '../../assets/logo-security.png';
import logoImageCleaning from '../../assets/logo-cleaning.png';

// Komponenty z treścią dla sekcji rozwijanych (bez zmian)
const InvestmentsDetails = ({ onPermissionsClick }) => (
    <>
        <FeatureSection
            title="Generalny Wykonawca Instalacji Niskoprądowych i Elektrycznych"
            titleColor="#0591c6"
            icon={<TbClipboardCheck />}
            backgroundColor="#e9f7ff"
            hasShadow={true}
            contentAlign="center"
        >
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                Bierzemy na siebie pełną odpowiedzialność za kluczowe systemy w Twoim obiekcie. Jako generalny wykonawca w tym zakresie, zdejmujemy z barków inwestora ciężar koordynacji wielu podwykonawców.
                <strong>
                    Dzięki posiadaniu własnych, wyspecjalizowanych zespołów elektryków i techników niskoprądowych,
                    zapewniamy płynny przebieg prac i bezproblemową współpracę z innymi wykonawcami na budowie.
                </strong>
            </p>
        </FeatureSection>
        <h3 style={{ textAlign: 'center', margin: '40px 0 20px' }}>Nasze Kluczowe Kompetencje:</h3>
        <FeatureGrid key="grid-details" gap="30px" columnsData={[
            [
                <FeatureSection
                    title="Instalacje Elektryczne i Odgromowe" titleColor="#0591c6" icon={<TbBulb/>}
                    backgroundColor="#f8f9fa" hasShadow={true} contentAlign="center"><p>Projektujemy i wykonujemy
                    kompletne
                    instalacje siłowe, oświetleniowe oraz certyfikowane systemy odgromowe, które stanowią krwiobieg i
                    tarczę
                    ochronną każdego obiektu.</p></FeatureSection>,
                <FeatureSection title="Systemy Ochrony Przeciwpożarowej" titleColor="#0591c6" icon={<TbShieldCheck/>}
                                backgroundColor="#f8f9fa" hasShadow={true} contentAlign="center"><p>Wdrażamy
                    zintegrowane Systemy Sygnalizacji Pożaru (SAP), które w połączeniu z systemami oddymiania i
                    dźwiękowymi systemami ostrzegawczymi (DSO) zapewniają najwyższy poziom bezpieczeństwa życia i
                    mienia.</p></FeatureSection>],
            [
                <FeatureSection
                    title="Systemy Bezpieczeństwa (Security)"
                    titleColor="#0591c6" icon={<TbVideo/>}
                    backgroundColor="#f8f9fa"
                    hasShadow={true}
                    contentAlign="center">
                    <p>Budujemy wielopoziomowe systemy
                        ochrony oparte na wczesnej detekcji (SSWiN), inteligentnej kontroli dostępu (KD) i zaawansowanym
                        monitoringu wizyjnym (CCTV).
                    </p>
                </FeatureSection>,
                <FeatureSection
                    title="Infrastruktura Teletechniczna"
                    titleColor="#0591c6"
                    icon={<TbNetwork/>}
                    backgroundColor="#f8f9fa"
                    hasShadow={true}
                    contentAlign="center">
                    <p>Tworzymy stabilne i
                        wydajne sieci komputerowe (LAN), które są fundamentem komunikacji i integracji wszystkich
                        systemów w
                        nowoczesnej firmie. <strong>Nasze okablowanie strukturalne to gwarancja niezawodności na
                            lata.</strong>
                    </p>
                </FeatureSection>
            ],
        ]}/>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <Button
                variant="outlined"
                href="#permissions" onClick={onPermissionsClick}
                startIcon={<FaCertificate/>} sx={{
                color: '#0591c6',
                borderColor: '#0591c6',
                '&:hover': {borderColor: '#0477a2', backgroundColor: 'rgba(5, 145, 198, 0.04)'}
            }}
            >
                Nasze Uprawnienia
            </Button>
            {/* ======================= ZMIANA TUTAJ ======================= */}
            <Button
                component={Link} to="/contact?open=3"
                variant="contained"
                startIcon={<TbMail/>}
                sx={{
                    backgroundColor: '#0591c6',
                    '&:hover': {backgroundColor: '#0477a2'}
                }}
            >
                Zapytaj o Ofertę
            </Button>
        </Box>
    </>
);
const ServiceDetails = ({ onPermissionsClick }) => (
    <>
        <FeatureSection
            title="Opieka nad Twoją Inwestycją"
            titleColor="#0591c6" icon={<FaWrench/>}
            backgroundColor="#e9f7ff" hasShadow={true}
            contentAlign="center">
            <p style={{fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto'}}>
                Instalacja to dopiero początek. Zapewniamy profesjonalną opiekę serwisową dla wszystkich systemów, które
                wdrażamy, jak i tych już istniejących w Twoim obiekcie. Naszym celem jest zapewnienie ich bezawaryjnej
                pracy, maksymalnej wydajności i zgodności z przepisami przez cały cykl życia.
            </p>
        </FeatureSection>
        <h3 style={{textAlign: 'center', margin: '40px 0 20px'}}>
            Zakres Usług Serwisowych:
        </h3>
        <FeatureGrid key="grid-service"
                     gap="30px"
                     columnsData={[
                         [
                             <FeatureSection
                                 title="Przeglądy i Konserwacja Systemów Security"
                                 titleColor="#0591c6"
                                 icon={<TbShieldCheck/>}
                                 backgroundColor="#f8f9fa"
                                 hasShadow={true}
                                 contentAlign="center">
                                 <p>
                                     Regularne przeglądy i testy systemów <strong>SSWiN, KD i CCTV</strong> w celu
                                     weryfikacji poprawności działania, aktualizacji oprogramowania i utrzymania pełnej
                                     sprawności.
                                 </p>
                             </FeatureSection>
                         ],
                         [
                             <FeatureSection
                                 title="Serwis Systemów PPOŻ i Elektrycznych"
                                 titleColor="#0591c6"
                                 icon={<TbBulb/>}
                                 backgroundColor="#f8f9fa"
                                 hasShadow={true}
                                 contentAlign="center">
                                 <p>
                                     Kluczowe dla bezpieczeństwa przeglądy systemów <strong>SAP i instalacji
                                     odgromowych</strong>, a
                                     także diagnostyka instalacji elektrycznych i oświetleniowych.
                                 </p>
                             </FeatureSection>
                         ]
                     ]}/>
        <Box sx={{mt: 4}}>
            <FeatureSection
                key="section-service-react"
                title="Dostępność i Szybki Czas Reakcji"
                titleColor="#0591c6" backgroundColor="#f8f9fa"
                icon={<TbClockHour4/>}
                contentAlign="center">
                <p>
                    Rozumiemy, jak ważna jest ciągłość działania Twojego biznesu. Oferujemy elastyczne umowy serwisowe i
                    gwarantujemy szybki czas reakcji naszego zespołu technicznego w przypadku awarii.
                </p>
            </FeatureSection>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <Button
                variant="outlined"
                href="#permissions"
                onClick={onPermissionsClick}
                startIcon={<FaCertificate/>}
                sx={{
                    color: '#0591c6',
                    borderColor: '#0591c6',
                    '&:hover': {borderColor: '#0477a2', backgroundColor: 'rgba(5, 145, 198, 0.04)'}
                }}
            >
                Nasze Uprawnienia
            </Button>
            {/* ======================= ZMIANA TUTAJ ======================= */}
            <Button
                component={Link}
                to="/contact?open=4"
                variant="contained"
                startIcon={<TbMail/>}
                sx={{backgroundColor: '#0591c6', '&:hover': {backgroundColor: '#0477a2'}}}
            >
                Zapytaj o Ofertę
            </Button>
        </Box>
    </>
);
const PermissionsDetails = () => (
    <FeatureGrid key="grid-permissions" equalHeight={true} columnsData={[
        [
            <FeatureSection
                title="Koncesja MSWiA"
                titleColor="#0591c6"
                icon={<TbLicense/>}
                backgroundColor="#f8f9fa"
                hasShadow={true}
                contentAlign="center">
                <p>
                    Posiadamy koncesję (nr L-0602/00) uprawniającą do prowadzenia działalności gospodarczej w zakresie
                    profesjonalnego zabezpieczenia technicznego.
                </p>
            </FeatureSection>,
            <FeatureSection
                title="Kancelaria Niejawna"
                titleColor="#0591c6"
                icon={<TbFileCertificate/>}
                backgroundColor="#f8f9fa"
                hasShadow={true}
                contentAlign="center">
                <p>
                    Dysponujemy kancelarią do przetwarzania materiałów o klauzuli „Zastrzeżone”, zapewniając pełne
                    bezpieczeństwo proceduralne.
                </p>
            </FeatureSection>
        ],
        [
            <FeatureSection
                title="Świadectwo Bezpieczeństwa ABW"
                titleColor="#0591c6"
                icon={<TbShieldCheck/>}
                backgroundColor="#f8f9fa"
                hasShadow={true}
                contentAlign="center">
                <p>
                    Poświadcza naszą wiarygodność i zdolność do ochrony informacji niejawnych, gwarantując zachowanie
                    tajemnicy i poufności.
                </p>
            </FeatureSection>,
            <FeatureSection
                title="Akredytowany Sprzęt IT"
                titleColor="#0591c6"
                icon={<TbDeviceDesktopCheck/>}
                backgroundColor="#f8f9fa"
                hasShadow={true}
                contentAlign="center">
                <p>
                    Nasz sprzęt posiada akredytację bezpieczeństwa teleinformatycznego, co pozwala na bezpieczne
                    przetwarzanie informacji niejawnych.
                </p>
            </FeatureSection>
        ],
        [
            <FeatureSection
                title="Pełnomocnik ds. Ochrony"
                titleColor="#0591c6"
                icon={<TbUserShield/>}
                backgroundColor="#f8f9fa"
                hasShadow={true}
                contentAlign="center">
                <p>
                    Zatrudniamy pełnomocnika ds. ochrony informacji niejawnych, który nadzoruje i zarządza
                    bezpieczeństwem danych w naszej firmie.
                </p>
            </FeatureSection>,
            <FeatureSection
                title="Inspektor Bezpieczeństwa IT"
                titleColor="#0591c6" icon={<TbLockAccess/>}
                backgroundColor="#f8f9fa"
                hasShadow={true}
                contentAlign="center">
                <p>
                    Nasz zespół uzupełnia
                    inspektor bezpieczeństwa teleinformatycznego (IBTI), który administruje i chroni nasze systemy
                    informatyczne.
                </p>
            </FeatureSection>
        ],
    ]} gap="30px" />
);


const Offer = () => {
    const [isPermissionsExpanded, setPermissionsExpanded] = useState(false);
    const handlePermissionsClick = () => { setTimeout(() => { setPermissionsExpanded(true); }, 300); };

    return (
        <div className="app">
            <Header/>
            <div className="blank-divider"></div>

            <OfferNavigation />

            <div className="main-content-wrapper">
                <div id="investments" className="content-section-anchor">
                    <ExpandableFeatureSection
                        title="Budujemy Bezpieczeństwo od Podstaw"
                        titleColor="#0591c6"
                        icon={<TbClipboardCheck/>}
                        image={investmentsImage}
                        imagePosition="right"
                        expandContent={<InvestmentsDetails onPermissionsClick={handlePermissionsClick}/>}
                    >
                        <p>
                            Realizacja inwestycji to dla nas proces tworzenia. Przekształcamy koncepcje w działające,
                            zintegrowane systemy, które stają się fundamentem bezpieczeństwa i funkcjonalności Twojego
                            obiektu. <strong>Od projektu, przez wykonawstwo, aż po finalny odbiór</strong> – zarządzamy
                            każdym etapem.
                        </p>
                    </ExpandableFeatureSection>
                </div>

                <div id="service" className="content-section-anchor">
                    <ExpandableFeatureSection
                        title="Dbamy o Ciągłość Twojego Biznesu"
                        titleColor="#0591c6"
                        icon={<FaWrench/>}
                        image={serviceImage}
                        imagePosition="left"
                        expandContent={<ServiceDetails onPermissionsClick={handlePermissionsClick}/>}
                    >
                        <p>
                            Nasz serwis to gwarancja, że Twoje instalacje działają z maksymalną sprawnością. Nie tylko
                            naprawiamy – <strong>zapobiegamy problemom, zanim się pojawią</strong>, poprzez regularne
                            przeglądy, diagnostykę i proaktywne działania.
                        </p>
                    </ExpandableFeatureSection>
                </div>

                <div id="consulting" className="content-section-anchor">
                    <FeatureSection
                        title="Profesjonalne Doradztwo Techniczne"
                        titleColor="#0591c6"
                        icon={<TbBrain/>}
                        iconColor="#0591c6"
                        image={consultingImage}
                        imagePosition="right"
                        contentWidth="50%"
                    >
                        <p>
                            Fundamentem każdej udanej inwestycji jest trafna diagnoza potrzeb i precyzyjny dobór
                            technologii. Nasz proces doradczy to nie tylko rozmowa, ale kompleksowy audyt, który pozwala
                            zrozumieć Państwa cele biznesowe i specyfikę obiektu.
                        </p>
                        <p>
                            Na podstawie analizy ryzyka i Państwa oczekiwań, tworzymy <strong>szczegółową koncepcję
                            systemu</strong>. Rekomendujemy rozwiązania, które są nie tylko skuteczne, ale również
                            skalowalne i zoptymalizowane kosztowo. Zapewniamy pełną jasność co do możliwości i
                            funkcjonalności, aby mogli Państwo podjąć najlepszą decyzję.
                        </p>
                        {/* ======================= ZMIANA TUTAJ ======================= */}
                        <Box sx={{mt: 3}}>
                            <Button
                                component={Link}
                                to="/contact?open=3"
                                variant="contained"
                                startIcon={<TbMail/>}
                                sx={{backgroundColor: '#0591c6', '&:hover': {backgroundColor: '#0477a2'}}}
                            >
                                Skonsultuj
                                swój pomysł
                            </Button>
                        </Box>
                    </FeatureSection>
                </div>

                <div id="project" className="content-section-anchor">
                    <FeatureSection
                        title="Zarządzanie Procesem Projektowym"
                        titleColor="#0591c6"
                        icon={<TbRulerMeasure/>}
                        iconColor="#0591c6"
                        image={designImage}
                        imagePosition="left"
                        contentWidth="50%">
                        <p>
                            Zdajemy sobie sprawę, że kluczem do sukcesu inwestycji jest profesjonalny i spójny projekt.
                            Dlatego oferujemy <strong>kompleksowe zarządzanie całym procesem projektowym</strong>, od
                            koncepcji po gotową dokumentację wykonawczą.
                        </p>
                        <p>
                            Współpracujemy z zaufanymi biurami projektowymi i specjalistami branżowymi, aby dostarczyć
                            kompletne opracowania, idealnie dopasowane do potrzeb Twojej inwestycji. Naszą główną
                            specjalizacją jest koordynacja projektów <strong>systemów teletechnicznych</strong>, ale w
                            ramach kompleksowej obsługi zapewniamy również <strong>pełną dokumentację dla instalacji
                            elektrycznych</strong>.
                        </p>
                        <p>
                            Dzięki temu inwestor otrzymuje jeden, spójny i gotowy do realizacji projekt, bez
                            konieczności angażowania się w skomplikowane uzgodnienia międzybranżowe. <strong>To my
                            bierzemy na siebie całą komunikację i odpowiedzialność.</strong>
                        </p>
                        {/* ======================= ZMIANA TUTAJ ======================= */}
                        <Box sx={{mt: 3}}>
                            <Button
                                component={Link}
                                to="/contact?open=5"
                                variant="contained"
                                startIcon={<TbMail/>}
                                sx={{backgroundColor: '#0591c6', '&:hover': {backgroundColor: '#0477a2'}}}
                            >
                                Omów swój projekt
                            </Button>
                        </Box>
                    </FeatureSection>
                </div>

                <div id="permissions" className="content-section-anchor">
                    <ExpandableFeatureSection
                        title="Uprawnienia i Certyfikaty – Gwarancja Bezpieczeństwa"
                        titleColor="#0591c6"
                        icon={<FaCertificate/>}
                        image={permissionsImage}
                        imagePosition="right"
                        isInitiallyExpanded={isPermissionsExpanded}
                        onToggle={setPermissionsExpanded}
                        expandContent={<PermissionsDetails/>}
                    >
                        <p>
                            Nasza działalność opiera się na solidnych fundamentach prawnych i certyfikowanych
                            kompetencjach. Posiadamy wszelkie niezbędne uprawnienia, które gwarantują naszym Klientom
                            najwyższy standard usług oraz pełne bezpieczeństwo i poufność powierzonych informacji.
                        </p>
                    </ExpandableFeatureSection>
                </div>

                <div className="content-section-anchor">
                    <h2 style={{textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#1a2b48'}}>Poznaj Nasze Pozostałe Usługi</h2>
                    <FeatureGrid
                        gap="30px"
                        columnsData={[
                            [
                                <FeatureSection
                                    title="Profesjonalna Ochrona Mienia"
                                    titleColor="#0591c6"
                                    image={logoImageSecurity}
                                    imageClassName="fs-logo-image"
                                    imagePosition="left"
                                    contentAlign="center"
                                    backgroundColor="white"
                                    hasShadow={true}
                                    clickable="http://www.apexim-bis.com.pl/dzialalnosc/ochrona-fizyczna"
                                />
                            ],
                            [
                                <FeatureSection
                                    title="Utrzymanie Czystości"
                                    titleColor="#0591c6"
                                    image={logoImageCleaning}
                                    imageClassName="fs-logo-image"
                                    imagePosition="right"
                                    contentAlign="center"
                                    backgroundColor="white"
                                    hasShadow={true}
                                    clickable="http://www.apexim-bis.com.pl/dzialalnosc/uslugi-porzadkowe"
                                />
                            ]
                        ]}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Offer;