import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery, Container } from "@mui/material";
import { RiTeamFill } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";
import { TbPlugConnected, TbCertificate } from "react-icons/tb";

// Import your new or refactored components
import StatsCounter from "../../components/Counter/StatsCounter";
import ContentCard from "../../components/ContentCard/ContentCard";
import ImageTextCard from "../../components/ImageTextCard/ImageTextCard";

// Import Images
import handShake from '../../assets/mainImg/6.webp';
import counterImage from '../../assets/mainImg/1.webp';
import teamImage from '../../assets/mainImg/4.webp';
import historyImage from '../../assets/mainImg/5.webp';

const date = new Date().getFullYear();
const yearsOn = date-1996;
const About = () => {
    const companyStats = [
        { value: yearsOn, label: 'Lata na rynku' },
        { value: 150, label: 'Zrealizowanych projektów', suffix: '+' },
        { value: 98, label: 'Zadowolonych Klientów', suffix: '%' },
        { value: 24, label: 'Godziny wsparcia', suffix: '/7' },
    ];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            {/* 1. HERO/OVERLAY SECTION - Now a simple Box */}
            <Box
                sx={{
                    height: '60vh',
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundImage: `url(${handShake})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* 2. MAIN CONTENT AREA */}
            <Box sx={{ my: 6 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    textAlign="center"
                    sx={{
                        mb: 5,
                        fontWeight: 'bold',
                        color: 'primary.main',
                        fontSize: { xs: '2.5rem', md: '3rem' }
                    }}
                >
                    Lata doświadczenia i profesjonalizm
                </Typography>

                {/* THIS IS THE FIX - The Grid container makes the cards sit side-by-side */}
                <Grid container spacing={4} alignItems="stretch">

                    {/* Card 1 is wrapped in a Grid item that takes half the width on desktop */}
                    <Grid size={{xs:12, md:6}}>
                        <ContentCard
                            icon={<TbCertificate />}
                            title="NASZE DOŚWIADCZENIE"
                            titleColor="#0591c6"
                        >
                            Nasze {yearsOn}-letnie doświadczenie to fundament kompetencji i zaufania. Patrząc wstecz na te {yearsOn} lata naszej działalności, jesteśmy dumni z osiągnięć, które zdobyliśmy, ale to nie koniec naszej drogi. Każdy zrealizowany projekt to dla nas krok w stronę nowych wyzwań i innowacji, które napędzają naszą pasję do ciągłego rozwoju. Z nieustającym zaangażowaniem dążymy do doskonałości, aby nie tylko spełniać, ale i przewyższać oczekiwania naszych klientów.
                        </ContentCard>
                    </Grid>

                    {/* Card 2 is wrapped in another Grid item that takes the other half */}
                    <Grid  size={{xs:12, md:6}}>
                        <ContentCard
                            icon={<TbPlugConnected />}
                            title="CZYM SIĘ ZAJMUJEMY?"
                            titleColor="#0591c6"
                        >
                            Spółka Apexim Bis Sp. z o.o. prowadzi działalność w zakresie robót budowlano-montażowych, projektowych i konserwacyjnych - instalacji niskoprądowych (teleinformatycznych) i elektrycznych do 1000 V - szczególnie specjalizuje się w systemach alarmowych włamania i napadu, kontroli dostępu, systemach telewizji przemysłowej, sieciach komputerowych, systemach ppoż. i dźwiękowych systemach ostrzegawczych, systemach multimedialnych, instalacjach domofonowych i przywoławczych, instalacjach nagłośnienia, systemach automatyki i zarządzania budynkiem. Wykonujemy instalacje elektryczne w obiektach prywatnych, przemysłowych, wielkogabarytowych.
                        </ContentCard>
                    </Grid>

                </Grid>
            </Box>


            {/* 3. PARALLAX STATS COUNTER SECTION */}
            <Box
                sx={{
                    py: 10,
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#ffffff',
                    // Parallax Background
                    backgroundImage: `url(${counterImage})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    // Dark Overlay
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    },
                    // Ensure content is above the overlay
                    '& > *': {
                        position: 'relative',
                        zIndex: 2,
                    },
                }}
            >
                <Container maxWidth="lg">
                    <StatsCounter stats={companyStats} />
                </Container>
            </Box>

            {/* 4. MORE CONTENT SECTIONS */}
            <Box sx={{ my: 6 }}>
                {/* Use a Grid container with alignItems="stretch" to make children equal height */}
                <Grid container spacing={6} alignItems="stretch">

                    {/* "Nasz Zespół" Section */}
                    <Grid size={{xs:12}}> {/* Each card is a full-width item in the stacking column */}
                        <ImageTextCard
                            // NO height prop needed!
                            image={teamImage}
                            imagePosition="right"
                            icon={<RiTeamFill />}
                            title="NASZ ZESPÓŁ"
                        >
                            Wierzymy, że za sukcesem każdej realizacji stoją ludzie. Nasz zespół składa się z doświadczonych inżynierów, certyfikowanych techników i profesjonalnych doradców, którzy stale podnoszą swoje kwalifikacje. Dzięki ich wszechstronnym kompetencjom i partnerskiemu podejściu, jesteśmy w stanie sprostać najbardziej wymagającym projektom i zapewnić rozwiązania idealnie dopasowane do potrzeb Klienta.
                        </ImageTextCard>
                    </Grid>

                    {/* "Historia Firmy" Section */}
                    <Grid size={{xs:12}}>
                        <ImageTextCard
                            // NO height prop needed!
                            image={historyImage}
                            imagePosition="left"
                            icon={<LuHistory />}
                            title="HISTORIA FIRMY"
                        >
                            Od {yearsOn} lat naszą misją jest zapewnianie kompleksowego bezpieczeństwa i komfortu. Fundamentem naszej działalności są trzy filary: profesjonalna ochrona mienia, niezawodny serwis systemów bezpieczeństwa oraz kompleksowe usługi utrzymania czystości. To dzięki nim zdobyliśmy zaufanie setek Klientów.
                            <br/><br/>
                            Wraz z rozwojem rynku i rosnącymi potrzebami naszych partnerów, naturalnie poszerzaliśmy nasze kompetencje, realizując coraz więcej projektów inwestycyjnych. Dziś, aby sprostać największym wyzwaniom, otworzyliśmy nowy rozdział w naszej historii. Powołaliśmy dedykowany dział odpowiedzialny za kompleksową realizację dużych inwestycji – od projektu, przez wykonawstwo, aż po finalny odbiór. Łączymy dekady doświadczenia w bezpieczeństwie z nowoczesnym podejściem do zarządzania projektami.
                        </ImageTextCard>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default About;