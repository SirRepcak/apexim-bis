import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery, Container } from "@mui/material";
import { RiTeamFill } from "react-icons/ri";
import { LuHistory } from "react-icons/lu";
import { TbPlugConnected, TbCertificate } from "react-icons/tb";
import {FaShieldAlt, FaBroom} from "react-icons/fa";

// Import your new or refactored components
import StatsCounter from "../../components/Counter/StatsCounter";
import ContentCard from "../../components/ContentCard/ContentCard";
import ImageTextCard from "../../components/ImageTextCard/ImageTextCard";

// Import Images
import cctvOperator from '../../assets/mainImgSecurity/cctvOperator.png';
import counterImage from '../../assets/mainImg/1.jpg';
import teamImage from '../../assets/mainImg/4.jpg';
import historyImage from '../../assets/mainImg/5.jpg';

const date = new Date().getFullYear();
const yearsOn = date-1996;
const About = () => {
    const companyStats = [
        { value: yearsOn, label: 'Lata na rynku' },
        { value: 175, label: 'Liczba klientów dla usługi ochrony', suffix: '+' },
        { value: 98, label: 'Zadowolonych Klientów', suffix: '%' },
        { value: 90, label: 'Liczba klientów dla sprzątania', suffix: '+' },
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
                    backgroundImage: `url(${cctvOperator})`,
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
                            icon={<FaShieldAlt/>}
                            title="Profesjonalna Ochrona i Bezpieczeństwo"
                            titleColor="#0591c6"
                        >
                            Od 1996 roku, jako licencjonowana agencja ochrony (koncesja MSWiA NR L-0602/00), zapewniamy bezpieczeństwo na terenie województwa lubuskiego. Naszą siłą jest doświadczony zespół specjalistów oraz połączenie niezawodnej ochrony fizycznej ze wsparciem zmotoryzowanych, uzbrojonych patroli interwencyjnych. Uzupełniamy nasze działania o zaawansowane systemy techniczne, takie jak monitoring CCTV czy systemy alarmowe, gwarantując kompleksową ochronę osób i mienia.</ContentCard>
                    </Grid>

                    {/* Card 2 is wrapped in another Grid item that takes the other half */}
                    <Grid  size={{xs:12, md:6}}>
                        <ContentCard
                            icon={<FaBroom />}
                            title=" Kompleksowe Usługi Utrzymania Czystości"
                            titleColor="#0591c6"
                        >
                            Równie ważnym filarem naszej działalności są profesjonalne usługi porządkowe. Gwarantujemy najwyższy standard dzięki starannie dobranemu personelowi, nowoczesnym technologiom oraz atestowanym środkom czystości. Do każdego Klienta podchodzimy indywidualnie, tworząc harmonogram prac dopasowany do specyfiki obiektu. Nasza oferta obejmuje m.in. sprzątanie biur i hal, dezynfekcję sanitariatów oraz dbałość o tereny zewnętrzne, realizowane w sposób dyskretny i nieuciążliwy.</ContentCard>
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
                            Nasz zespół to połączenie rzetelnej pracy na miejscu i stałego nadzoru z naszego centrum. Na Państwa obiekcie nasi pracownicy ochrony dbają o bieżące bezpieczeństwo, opierając się na swoim doświadczeniu i znajomości terenu. Jednocześnie, operatorzy w naszym Centrum Monitorowania Alarmów (CMA) zapewniają im całodobowe wsparcie, analizując sygnały z systemów i koordynując dalsze działania w razie potrzeby. To połączenie gwarantuje, że każda sytuacja jest pod stałą, profesjonalną kontrolą.</ImageTextCard>
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
                            W odpowiedzi na rosnące oczekiwania naszych partnerów, naturalnie rozwinęliśmy nasze kompetencje. Zrozumieliśmy, że zaufanie, którym obdarzają nas Państwo w kwestii bezpieczeństwa, jest najlepszą podstawą do powierzenia nam również dbałości o porządek i estetykę obiektów. Dlatego dziś świadomie łączymy te dwa obszary, oferując spójną i zintegrowaną obsługę. Łączymy dyscyplinę i niezawodność znaną z branży ochrony z dbałością o szczegóły, która jest kluczowa w utrzymaniu czystości. </ImageTextCard>
                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default About;