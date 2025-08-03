// src/pages/About/About.js (Complete Demonstration with All Examples)

import React from "react";
import Header from '../../components/NavHeader/NavHeader';
import Footer from '../../components/NavFooter/NavFooter';
import './About.css';
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import FeatureGrid from "../../components/FeatureSection/FeatureGrid";
import StatsCounter from "../../components/Counter/StatsCounter";

// Import Icons
import {
  TbTimelineEventExclamation, TbLayoutDashboard,
  TbPlugConnected, TbBuildingFactory2, TbShieldCheck,
  TbAward, TbShieldCog, TbCertificate
} from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";

// Import Images
import teamImage from '../../assets/image-team.jpg';
import deskImage from '../../assets/image-desk.jpg';
import handShake from '../../assets/hand-shake.jpg';

const About = () => {
    const companyStats = [
        { value: 24, label: 'Lata na rynku'},
        { value: 150, label: 'Zrealizowanych projektów', suffix: '+' },
        { value: 98, label: 'Zadowolonych Klientów', suffix: '%' },
        { value: 24, label: 'Godziny wsparcia', suffix: '/7' },
    ]
  return (
    <>
      <Header />
      <div className="about-container">
        <FeatureSection
          variant="overlay"
          image={handShake}
          height="60vh"
          contentWidth="100%"
          title="Lata doświadczenia i profesjonalizm"
          fullWidth={true} // Spans the entire screen edge-to-edge
          backgroundColor="transparent"
          hasShadow={false}
          titleColor="#0591c6"
          iconColor="#3498db"
          contentAlign="center"
          contentBoxStyle="transparent"
        >

        </FeatureSection>
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
                <p>Doświadczenie, kompetencje i zaufanie… Patrząc wstecz na 24 lata naszej działalności, jesteśmy dumni z osiągnięć, które zdobyliśmy, ale to nie koniec naszej drogi. Każde zrealizowane projekty to dla nas krok w stronę nowych wyzwań i innowacji, które napędzają naszą pasję do ciągłego rozwoju. Z nieustającym zaangażowaniem dążymy do doskonałości, aby nie tylko spełniać, ale i przewyższać oczekiwania naszych klientów.</p>
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
                  <p>Nasze 19-letnie doświadczenie to fundament kompetencji i zaufania, z którego jesteśmy dumni. Nie spoczywamy jednak na laurach – każde zrealizowane zadanie jest dla nas motywacją do poszukiwania innowacyjnych rozwiązań i podejmowania nowych wyzwań. Zawsze dążymy do doskonałości, a naszym celem jest nie tylko spełniać, ale i przewyższać oczekiwania naszych Klientów, zapewniając niezawodność na lata.</p>
              </FeatureSection>
            ]
          ]}
        />
          <StatsCounter
              stats={companyStats}
              fullWidth={true}
              backgroundImage={teamImage}
              textColor="#ffffff"
          />

      <FeatureSection

          variant="side-by-side"
          direction="row"
          height="400px"
          contentWidth="50%"
          maxWidth={"1500px"}
          imagePosition="right"
          image={teamImage}
          icon={<RiTeamFill />}
          title="Nasz Zespół"
          titleColor="#0591c6"
          contentAlign={"center"}
      >
          <p>Wierzymy, że za sukcesem każdej realizacji stoją ludzie. Nasz zespół składa się z doświadczonych inżynierów, certyfikowanych techników i profesjonalnych doradców, którzy stale podnoszą swoje kwalifikacje. Dzięki ich wszechstronnym kompetencjom i partnerskiemu podejściu, jesteśmy w stanie sprostać najbardziej wymagającym projektom i zapewnić rozwiązania idealnie dopasowane do potrzeb Klienta.</p>

      </FeatureSection>

          <FeatureSection

              variant="side-by-side"
              direction="row"
              height="400px"
              contentWidth="50%"
              maxWidth={"1500px"}
              imagePosition="left"
              image={teamImage}
              icon={<LuHistory />}
              title="Historia Firmy"
              titleColor="#0591c6"
              contentAlign={"center"}
          >
              <p>Od 24 lat naszą misją jest zapewnianie kompleksowego bezpieczeństwa i komfortu. Fundamentem naszej działalności są trzy filary: profesjonalna ochrona mienia, niezawodny serwis systemów bezpieczeństwa oraz kompleksowe usługi utrzymania czystości. To dzięki nim zdobyliśmy zaufanie setek Klientów.</p>
              <p>Wraz z rozwojem rynku i rosnącymi potrzebami naszych partnerów, naturalnie poszerzaliśmy nasze kompetencje, realizując coraz więcej projektów inwestycyjnych. Dziś, aby sprostać największym wyzwaniom, otworzyliśmy nowy rozdział w naszej historii. Powołaliśmy dedykowany dział odpowiedzialny za kompleksową realizację dużych inwestycji – od projektu, przez wykonawstwo, aż po finalny odbiór. Łączymy dekady doświadczenia w bezpieczeństwie z nowoczesnym podejściem do zarządzania projektami.</p>
          </FeatureSection>
      </div>
      <Footer />
    </>
  );
};

export default About;