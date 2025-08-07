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
import teammImage from '../../assets/image-team.jpg';
import deskImage from '../../assets/image-desk.jpg';
import handShake from '../../assets/mainImg/6.jpg';
import counterImage from '../../assets/mainImg/1.jpg';
import teamImage from '../../assets/mainImg/4.jpg';
import historyImage from '../../assets/mainImg/5.jpg'
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const About = () => {
    const companyStats = [
        { value: 24, label: 'Lata na rynku'},
        { value: 150, label: 'Zrealizowanych projektów', suffix: '+' },
        { value: 98, label: 'Zadowolonych Klientów', suffix: '%' },
        { value: 24, label: 'Godziny wsparcia', suffix: '/7' },
    ]

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          fullWidth={true}
          backgroundColor="transparent"
          hasShadow={false}
          titleColor="#0591c6"
          iconColor="#3498db"
          contentAlign="center"
          contentBoxStyle="transparent"
          showImg={false}
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
                contentAlign={'justify'}
              >
                  <p>Nasze 24-letnie doświadczenie to fundament kompetencji i zaufania. Patrząc wstecz na te 24 lata
                      naszej działalności, jesteśmy dumni z osiągnięć, które zdobyliśmy, ale to nie koniec naszej drogi.
                      Każdy zrealizowany projekt to dla nas krok w stronę nowych wyzwań i innowacji, które napędzają
                      naszą pasję do ciągłego rozwoju. Z nieustającym zaangażowaniem dążymy do doskonałości, aby nie
                      tylko spełniać, ale i przewyższać oczekiwania naszych klientów. </p>
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
                contentAlign={'justify'}
              >
                  <p>Spółka Apexim Bis Sp. z o.o. prowadzi działalność w zakresie robót budowlano-montażowych, projektowych i konserwacyjnych - instalacji niskoprądowych (teleinformatycznych) i elektrycznych do 1000 V - szczególnie specjalizuje się w systemach alarmowych włamania i napadu, kontroli dostępu, systemach telewizji przemysłowej, sieciach komputerowych, systemach ppoż. i dźwiękowych systemach ostrzegawczych, systemach multimedialnych, instalacjach domofonowych i przywoławczych, instalacjach nagłośnienia, systemach automatyki i zarządzania budynkiem. Wykonujemy instalacje elektryczne w obiektach prywatnych, przemysłowych, wielkogabarytowych.</p>
              </FeatureSection>
            ]
          ]}
        />
          <StatsCounter
              stats={companyStats}
              fullWidth={true}
              backgroundImage={counterImage}
              textColor="#ffffff"
          />

      <FeatureSection
          variant="side-by-side"
          height={isMobile ? 'unset' : '400px'}
          contentWidth="50%"
          maxWidth={"1500px"}
          imagePosition="right"
          image={teamImage}
          icon={<RiTeamFill />}
          title="Nasz Zespół"
          titleColor="#0591c6"
          contentAlign={'justify'}
          direction={isMobile ? 'column' : 'row'}
      >
          <p>Wierzymy, że za sukcesem każdej realizacji stoją ludzie. Nasz zespół składa się z doświadczonych inżynierów, certyfikowanych techników i profesjonalnych doradców, którzy stale podnoszą swoje kwalifikacje. Dzięki ich wszechstronnym kompetencjom i partnerskiemu podejściu, jesteśmy w stanie sprostać najbardziej wymagającym projektom i zapewnić rozwiązania idealnie dopasowane do potrzeb Klienta.</p>

      </FeatureSection>

          <FeatureSection
              variant="side-by-side"
              direction={isMobile ? 'column' : 'row'}
              height={isMobile ? 'unset' : '400px'}
              contentWidth="50%"
              maxWidth={"1500px"}
              imagePosition="left"
              image={historyImage}
              icon={<LuHistory />}
              title="Historia Firmy"
              titleColor="#0591c6"
              contentAlign={'justify'}
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