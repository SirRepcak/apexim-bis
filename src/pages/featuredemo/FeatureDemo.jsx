// src/pages/About/About.js (Complete Demonstration with All Examples and Alignment)

import React from "react";
import Header from '../../components/NavHeader/NavHeader';
import Footer from '../../components/NavFooter/NavFooter';
import './FeatureDemo.css';
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import FeatureGrid from "../../components/FeatureSection/FeatureGrid";
import handShake from "../../assets/hand-shake.jpg"


// Import Icons
import {
    TbPlugConnected,
    TbBuildingFactory2,
    TbShieldCheck,
    TbAlignLeft,
    TbAlignCenter,
    TbAlignRight,
    TbCertificate,
    TbExternalLink, // New icon for the demo
    TbArrowDownCircle
} from "react-icons/tb";

// Import Images
import teamImage from '../../assets/image-team.jpg';
import deskImage from '../../assets/image-desk.jpg';
import StatsCounter from "../../components/Counter/StatsCounter";

const FeatureDemo = () => {

    const companyStats = [
        { value: 19, label: 'Lat na rynku', suffix: '+' },
        { value: 450, label: 'Zrealizowanych projektów', suffix: '+' },
        { value: 98, label: 'Zadowolonych Klientów', suffix: '%' },
        { value: 24, label: 'Godziny wsparcia', suffix: '/7' },
    ];

    return (
        <div className="about-container">
            <Header />

            <h1>Component System Demonstration</h1>

            {/* --- Overlay Variants --- */}
            <h2 className="demo-heading">Overlay Variant (Full Width)</h2>
            <FeatureSection
                variant="overlay"
                image={deskImage}
                height="60vh"
                contentWidth="550px"
                icon={<TbBuildingFactory2 />}
                title="Full-Bleed Width"
                fullWidth={true}
                backgroundColor="rgba(44, 62, 80, 0.8)"
                textColor="#ecf0f1"
                iconColor="#3498db"
                contentAlign="right"
            >
                <p>This section breaks out of the container to span the full edge-to-edge width of the screen.</p>
            </FeatureSection>

            <h2 className="demo-heading">Overlay Variant (Constrained)</h2>
            <FeatureSection
                variant="overlay"
                image={deskImage}
                height="50vh"
                contentWidth="550px"
                maxWidth="1400px"
                icon={<TbPlugConnected />}
                title="Standard Constrained Width"
                backgroundColor="#2c3e50"
                textColor="#ecf0f1"
                iconColor="#3498db"
            >
                <p>This component respects the container's padding and has a max-width.</p>
            </FeatureSection>

            {/* --- Side-by-Side Variants --- */}
            <h2 className="demo-heading">Side-by-Side Variant (with default shadow)</h2>
            <FeatureSection
                variant="side-by-side"
                direction="row"
                height="400px"
                contentWidth="60%"
                imagePosition="right"
                image={teamImage}
                icon={<TbBuildingFactory2 />}
                title="Zaprojektuj i Wybuduj"
            >
                <p>A classic side-by-side layout for detailed features, with the shadow applied by default.</p>
            </FeatureSection>

            <h2 className="demo-heading">Side-by-Side Variant (NO SHADOW)</h2>
            <FeatureSection
                variant="side-by-side"
                direction="row"
                height="400px"
                contentWidth="60%"
                imagePosition="left"
                image={teamImage}
                icon={<TbBuildingFactory2 />}
                title="Pełna Kontrola (Bez Cienia)"
                backgroundColor="#f9f9f9"
                hasShadow={false}
            >
                <p>This component is flat against the background because `hasShadow` is false.</p>
            </FeatureSection>

            {/* --- Content Alignment Demonstration --- */}
            <h2 className="demo-heading">Content Alignment</h2>
            <FeatureGrid
                gap="30px"
                maxWidth="1400px"
                columnsData={[
                    // Column 1: Left Aligned
                    [
                        <FeatureSection
                            icon={<TbAlignLeft />}
                            title="Left Aligned"
                            contentAlign="left" // Default, but explicit for demo
                            backgroundColor="#f8f9fa"
                        >
                            <p>This is the default alignment. The icon, title, and text are all aligned to the left.</p>
                        </FeatureSection>
                    ],
                    // Column 2: Center Aligned
                    [
                        <FeatureSection
                            icon={<TbAlignCenter />}
                            title="Center Aligned"
                            contentAlign="center"
                            backgroundColor="#f8f9fa"
                        >
                            <p>Using `contentAlign="center"` will center the icon, title, and paragraph text.</p>
                        </FeatureSection>
                    ],
                    // Column 3: Right Aligned
                    [
                        <FeatureSection
                            icon={<TbAlignRight />}
                            title="Right Aligned"
                            contentAlign="right"
                            backgroundColor="#f8f9fa"
                        >
                            <p>Using `contentAlign="right"` aligns all content within the box to the right.</p>
                        </FeatureSection>
                    ]
                ]}
            />

            {/* --- MODIFIED SECTION: Clickable Feature Demonstration --- */}
            <h2 className="demo-heading">Clickable Sections (with new "Lift" Hover Effect)</h2>
            <FeatureGrid
                gap="30px"
                maxWidth="1400px"
                columnsData={[
                    [ // Internal Link
                        <FeatureSection
                            icon={<TbCertificate />}
                            title="Navigate to Our Services"
                            image={teamImage}
                            contentAlign="center"
                            backgroundColor="#eef2ff"
                            clickable="/services"
                        >
                            <p>This card links to an internal page (`/services`). Hover over it to see the new lift effect.</p>
                        </FeatureSection>
                    ],
                    [ // In-Page Anchor Link
                        <FeatureSection
                            icon={<TbArrowDownCircle />}
                            title="Scroll to Target Section"
                            image={handShake}
                            contentAlign="center"
                            backgroundColor="#fefce8"
                            clickable="#in-page-target-section"
                        >
                            <p>This card is an anchor link. Clicking it will smoothly scroll down to the target section on this same page.</p>
                        </FeatureSection>
                    ],
                    [ // External Link
                        <FeatureSection
                            icon={<TbExternalLink />}
                            title="Visit React's Website"
                            image={deskImage}
                            contentAlign="center"
                            backgroundColor="#f0fdf4"
                            clickable="https://react.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p>This card links to an external site and opens in a new tab, using `target="_blank"`.</p>
                        </FeatureSection>
                    ],
                ]}
            />

            {/* --- Stacked Column Variant --- */}
            <h2 className="demo-heading">Stacked Column Variant</h2>
            <FeatureSection
                variant="side-by-side"
                direction="column"
                imagePosition="left" // Image on top
                height="800px"
                image={deskImage}
                icon={<TbBuildingFactory2 />}
                title="Pełna Integracja Pionowa"
            >
                <p>This demonstrates the vertical column layout. The content and image are stacked against each other.</p>
            </FeatureSection>

            {/* --- Mirrored Layout --- */}
            <h2 className="demo-heading">Mirrored Layout in a Grid</h2>
            <FeatureGrid
                gap="30px"
                maxWidth="1400px"
                columnsData={[
                    [
                        <FeatureSection
                            variant="side-by-side"
                            imagePosition="right"
                            image={deskImage}
                            icon={<TbPlugConnected />}
                            title="Nasza Technologia"
                        >
                            <p>Wykorzystujemy najnowsze technologie, aby zapewnić niezawodność i wydajność.</p>
                        </FeatureSection>
                    ],
                    [
                        <FeatureSection
                            variant="side-by-side"
                            imagePosition="left"
                            image={teamImage}
                            icon={<TbBuildingFactory2 />}
                            title="Nasz Zespół"
                        >
                            <p>Nasi eksperci to wykwalifikowani specjaliści z wieloletnim doświadczeniem w branży.</p>
                        </FeatureSection>
                    ]
                ]}
            />
            <FeatureGrid
                gap="30px"
                maxWidth="1400px"
                columnsData={[
                    [
                        <FeatureSection
                            variant="side-by-side"
                            imagePosition="left"
                            image={deskImage}
                            icon={<TbPlugConnected />}
                            title="Nasza Technologia"
                        >
                            <p>Wykorzystujemy najnowsze technologie, aby zapewnić niezawodność i wydajność.</p>
                        </FeatureSection>
                    ],
                    [
                        <FeatureSection
                            variant="side-by-side"
                            imagePosition="right"
                            image={teamImage}
                            icon={<TbBuildingFactory2 />}
                            title="Nasz Zespół"
                        >
                            <p>Nasi eksperci to wykwalifikowani specjaliści z wieloletnim doświadczeniem w branży.</p>
                        </FeatureSection>
                    ]
                ]}
            />

            {/* --- Uniform Grid --- */}
            <h2 className="demo-heading">Uniform 2-Column Grid</h2>
            <FeatureGrid
                gap="30px"
                maxWidth="1200px"
                columnsData={[
                    [
                        <FeatureSection
                            variant="side-by-side"
                            direction="column"
                            imagePosition="left"
                            image={teamImage}
                            icon={<TbPlugConnected />}
                            title="Instalacje Elektryczne"
                        >
                            <p>Nowoczesne i bezpieczne instalacje dla Twojej firmy.</p>
                        </FeatureSection>
                    ],
                    [
                        <FeatureSection
                            variant="side-by-side"
                            direction="column"
                            imagePosition="left"
                            image={deskImage}
                            icon={<TbBuildingFactory2 />}
                            title="Automatyka Budynkowa"
                        >
                            <p>Inteligentne systemy zarządzania budynkiem.</p>
                        </FeatureSection>
                    ]
                ]}
            />
            <FeatureGrid
                gap="30px"
                maxWidth="1200px"
                columnsData={[
                    [
                        <FeatureSection
                            variant="side-by-side"
                            direction="column"
                            imagePosition="left"
                            image={teamImage}
                            icon={<TbPlugConnected />}
                            title="Instalacje Elektryczne"
                        >
                            <p>Nowoczesne i bezpieczne instalacje dla Twojej firmy.</p>
                        </FeatureSection>
                    ],
                    [
                        <FeatureSection
                            variant="side-by-side"
                            direction="column"
                            imagePosition="left"
                            image={deskImage}
                            icon={<TbBuildingFactory2 />}
                            title="Automatyka Budynkowa"
                        >
                            <p>Inteligentne systemy zarządzania budynkiem.</p>
                        </FeatureSection>
                    ]
                ]}
            />

            {/* --- No Image Variant --- */}
            <h2 className="demo-heading">Feature with No Image</h2>
            <FeatureSection
                variant="side-by-side"
                icon={<TbShieldCheck />}
                title="Gwarancja Jakości"
                maxWidth="800px"
            >
                <p>This component has no `image` prop, so it renders as a clean, text-and-icon-only block.</p>
            </FeatureSection>

            {/* --- Asymmetric Grid --- */}
            <h2 className="demo-heading">Asymmetric Grid Layout</h2>
            <FeatureGrid
                gap="30px"
                maxWidth="1400px"
                columnsData={[
                    [
                        <FeatureSection
                            variant="side-by-side"
                            direction="column"
                            image={deskImage}
                            icon={<TbPlugConnected />}
                            title="Główna Oferta"
                        >
                            <p>To jest główny, wysoki blok w pierwszej kolumnie.</p>
                        </FeatureSection>
                    ],
                    [
                        <FeatureSection
                            variant="side-by-side"
                            direction="column"
                            image={teamImage}
                            icon={<TbBuildingFactory2 />}
                            title="Usługi Dodatkowe"
                        >
                            <p>To jest drugi, równie ważny blok w drugiej kolumnie.</p>
                        </FeatureSection>
                    ],
                    [
                        <FeatureSection icon={<TbShieldCheck />} title="Punkt 1" hasShadow={false} backgroundColor="#f1f5f9">
                            <p>Mniejszy blok.</p>
                        </FeatureSection>,
                        <FeatureSection icon={<TbShieldCheck />} title="Punkt 2" hasShadow={false} backgroundColor="#f1f5f9">
                            <p>Drugi mniejszy blok.</p>
                        </FeatureSection>,
                        <FeatureSection icon={<TbShieldCheck />} title="Punkt 3" hasShadow={false} backgroundColor="#f1f5f9">
                            <p>Trzeci mniejszy blok.</p>
                        </FeatureSection>
                    ]
                ]}
            />
            <FeatureSection
                variant="overlay"
                image={handShake}
                height="60vh"
                contentWidth="100%"
                title="Lata doświadczenia i profesjonalizm"
                fullWidth={true}
                backgroundColor="transparent"
                hasShadow={false}
                titleColor="#0591c6"
                iconColor="#3498db"
                contentAlign="center"
                contentBoxStyle="transparent"
            >
                {/* You can leave this empty or add a subtitle */}
            </FeatureSection>

            <div id="in-page-target-section"></div>

            <FeatureGrid
                gap="40px"
                maxWidth="1200px"
                columnsData={[
                    [
                        <FeatureSection
                            variant="side-by-side"
                            direction="column"
                            imagePosition="left"
                            icon={<TbCertificate />}
                            title="Nasze doświadczenie"
                            titleColor="#0591c6"
                        >
                            <p>Doświadczenie, kompetencje i zaufanie… Patrząc wstecz na 19 lat naszej działalności, jesteśmy dumni z osiągnięć, które zdobyliśmy, ale to nie koniec naszej drogi. Każde zrealizowane projekty to dla nas krok w stronę nowych wyzwań i innowacji, które napędzają naszą pasję do ciągłego rozwoju. Z nieustającym zaangażowaniem dążymy do doskonałości, aby nie tylko spełniać, ale i przewyższać oczekiwania naszych klientów.</p>

                            {/* 3. EXAMPLE 1: NESTED USAGE */}
                            {/* The counter adapts to the FeatureSection styles thanks to our CSS. */}
                            <StatsCounter stats={companyStats} />

                        </FeatureSection>
                    ],
                    [
                        <FeatureSection
                            variant="side-by-side"
                            direction="column"
                            imagePosition="left"
                            hasShadow={true}
                            icon={<TbPlugConnected />}
                            title="Czym sie zajmujemy?"
                            titleColor="#0591c6"
                        >
                            <p>Specjalizujemy się w kompleksowej obsłudze systemów CCTV, alarmowych, przeciwpożarowych, LAN, kontroli dostępu i instalacji elektrycznych. Zajmujemy się wszystkim – od doradztwa i projektowania, przez realizację, aż po serwis. Powierzając nam swoje projekty, masz pewność, że każdy etap zostanie zrealizowany profesjonalnie i z dbałością o najwyższą jakość.</p>
                        </FeatureSection>
                    ]
                ]}
            />

            {/* 4. EXAMPLE 2: STANDALONE FULL-WIDTH USAGE */}
            <StatsCounter
                stats={companyStats}
                fullWidth={true}
                backgroundImage={teamImage}
                textColor="#ffffff"
            />

            <Footer />
        </div>
    );
};

export default FeatureDemo;