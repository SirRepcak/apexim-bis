// src/pages/Offer/Offer.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { FaCertificate, FaWrench } from "react-icons/fa";
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
    TbVideo,
} from "react-icons/tb";

// Komponenty
import ExpandableContentCard from "../../components/ExpandableContentCard/ExpandableContentCard";
import ContentCard from "../../components/ContentCard/ContentCard";
import ImageTextCard from "../../components/ImageTextCard/ImageTextCard";
import PromoLinkCard from "../../components/PromoLinkCard/PromoLinkCard";
import OfferNavigation from "../../components/OfferNavigation/OfferNavigation";
import offerTexts from "./offerTexts";

// Zasoby
import investmentsImage from "../../assets/mainImg/3.jpg";
import designImage from "../../assets/mainImg/7.jpg";
import serviceImage from "../../assets/mainImg/8.jpg";
import permissionsImage from "../../assets/mainImg/9.jpg";
import consultingImage from "../../assets/mainImg/2.jpg";
import logoImageSecurity from "../../assets/logo-security.png";
import logoImageCleaning from "../../assets/logo-cleaning.png";

// === SEKCJA SZCZEGÓŁÓW INWESTYCJI ===
const InvestmentsDetails = ({ onPermissionsClick }) => {
    const icons = [<TbBulb />, <TbShieldCheck />, <TbVideo />, <TbNetwork />];
    return (
        <Box>
            <ContentCard title={offerTexts.investments.title} icon={<TbClipboardCheck />}>
                {offerTexts.investments.description}
            </ContentCard>
            <Typography variant="h5" sx={{ textAlign: "center", mt: 5, mb: 3 }}>
                {offerTexts.investments.competenciesTitle}
            </Typography>
            <Grid container spacing={4}>
                {offerTexts.investments.features.map((feature, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                        <ContentCard title={feature.title} icon={icons[index]}>
                            {feature.content}
                        </ContentCard>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                <Button variant="outlined" onClick={onPermissionsClick} startIcon={<FaCertificate />}>
                    {offerTexts.investments.buttons.permissions}
                </Button>
                <Button component={Link} to="/contact?open=3" variant="contained" startIcon={<TbMail />}>
                    {offerTexts.investments.buttons.ask}
                </Button>
            </Box>
        </Box>
    );
};

// === SEKCJA SZCZEGÓŁÓW SERWISU ===
const ServiceDetails = ({ onPermissionsClick }) => {
    return (
        <Box>
            <ContentCard title={offerTexts.service.title} icon={<FaWrench />}>
                {offerTexts.service.description}
            </ContentCard>
            <Typography variant="h5" sx={{ textAlign: "center", mt: 5, mb: 3 }}>
                {offerTexts.service.scopeTitle}
            </Typography>
            <Grid container spacing={4} alignItems="stretch">
                {offerTexts.service.features.map((feature, idx) => (
                    <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                        <ContentCard title={feature.title} icon={[<TbShieldCheck />, <TbBulb />][idx]}>
                            {feature.content}
                        </ContentCard>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ mt: 4 }}>
                <ContentCard title={offerTexts.service.responseTitle} icon={<TbClockHour4 />}>
                    {offerTexts.service.responseText}
                </ContentCard>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                <Button variant="outlined" onClick={onPermissionsClick} startIcon={<FaCertificate />}>
                    {offerTexts.service.buttons.permissions}
                </Button>
                <Button component={Link} to="/contact?open=4" variant="contained" startIcon={<TbMail />}>
                    {offerTexts.service.buttons.ask}
                </Button>
            </Box>
        </Box>
    );
};

// === SEKCJA SZCZEGÓŁÓW UPRAWNIEŃ ===
const PermissionsDetails = () => {
    const icons = [<TbLicense />, <TbShieldCheck />, <TbFileCertificate />, <TbDeviceDesktopCheck />, <TbUserShield />, <TbLockAccess />];
    return (
        <Grid container spacing={4} alignItems="stretch">
            {offerTexts.permissions.features.map((feature, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={feature.title}>
                    <ContentCard
                        title={feature.title}
                        icon={icons[index]}
                        contentAlign="center"
                    >
                        {feature.content}
                    </ContentCard>
                </Grid>
            ))}
        </Grid>
    );
};


// === GŁÓWNA STRONA OFERTY ===
const Offer = () => {
    const [isPermissionsExpanded, setPermissionsExpanded] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handlePermissionsClick = () => {
        const permissionsSection = document.getElementById('permissions');
        if (permissionsSection) {
            permissionsSection.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                setPermissionsExpanded(true);
            }, 300);
        }
    };

    return (
        <Box sx={{ pt: { xs: 8, md: 12 } }}>
            <OfferNavigation />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 }, px: { xs: 1, sm: 2, md: 3 }, mt: 5 }}>
                {/* === Inwestycje === */}
                <Box id="investments" sx={{ scrollMarginTop: "100px" }}>
                    <ExpandableContentCard
                        title={offerTexts.investments.sectionTitle}
                        icon={<TbClipboardCheck />}
                        image={investmentsImage}
                        imagePosition="right"
                        expandContent={<InvestmentsDetails onPermissionsClick={handlePermissionsClick} />}
                    >
                        {offerTexts.investments.sectionParagraph}
                    </ExpandableContentCard>
                </Box>

                {/* === Serwis === */}
                <Box id="service" sx={{ scrollMarginTop: "100px" }}>
                    <ExpandableContentCard
                        title={offerTexts.service.sectionTitle}
                        icon={<FaWrench />}
                        image={serviceImage}
                        imagePosition="left"
                        expandContent={<ServiceDetails onPermissionsClick={handlePermissionsClick} />}
                    >
                        {offerTexts.service.sectionParagraph}
                    </ExpandableContentCard>
                </Box>

                {/* === Doradztwo === */}
                <Box id="consulting" sx={{ scrollMarginTop: "100px" }}>
                    <ImageTextCard title={offerTexts.consulting.title} icon={<TbBrain />} image={consultingImage} imagePosition="right">
                        {/* Wewnętrzny kontener flexbox do pozycjonowania przycisku */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <Box sx={{ flexGrow: 1 }}> {/* Ten Box "rozpycha" się, aby wypchnąć przycisk */}
                                {offerTexts.consulting.paragraph1}
                                {offerTexts.consulting.paragraph2}
                            </Box>
                            <Box sx={{ pt: 3, textAlign: 'center' }}>
                                <Button component={Link} to="/contact?open=3" variant="contained" startIcon={<TbMail />} fullWidth={isMobile}>
                                    {offerTexts.consulting.button}
                                </Button>
                            </Box>
                        </Box>
                    </ImageTextCard>
                </Box>

                {/* === Projekty === */}
                <Box id="project" sx={{ scrollMarginTop: "100px" }}>
                    <ImageTextCard title={offerTexts.project.title} icon={<TbRulerMeasure />} image={designImage} imagePosition="left">
                        {/* Wewnętrzny kontener flexbox do pozycjonowania przycisku */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <Box sx={{ flexGrow: 1 }}> {/* Ten Box "rozpycha" się, aby wypchnąć przycisk */}
                                {offerTexts.project.paragraph1}
                                {offerTexts.project.paragraph2}
                                {offerTexts.project.paragraph3}
                            </Box>
                            <Box sx={{ pt: 3, textAlign: 'center' }}>
                                <Button component={Link} to="/contact?open=5" variant="contained" startIcon={<TbMail />} fullWidth={isMobile}>
                                    {offerTexts.project.button}
                                </Button>
                            </Box>
                        </Box>
                    </ImageTextCard>
                </Box>

                {/* === Uprawnienia === */}
                <Box id="permissions" sx={{ scrollMarginTop: "100px" }}>
                    <ExpandableContentCard
                        title={offerTexts.permissions.title}
                        icon={<FaCertificate />}
                        image={permissionsImage}
                        imagePosition="right"
                        isInitiallyExpanded={isPermissionsExpanded}
                        onToggle={setPermissionsExpanded}
                        expandContent={<PermissionsDetails />}
                    >
                        {offerTexts.permissions.description}
                    </ExpandableContentCard>
                </Box>

                {/* === Usługi dodatkowe === */}
                <Box sx={{ scrollMarginTop: "100px", textAlign: 'center' }}>
                    <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
                        {offerTexts.additional.heading}
                    </Typography>
                    <Grid container spacing={4} sx={{mb:4}}>
                        <Grid size={{ xs: 12, md: 6}}>
                            <PromoLinkCard
                                title={offerTexts.additional.features[0].title}
                                image={logoImageSecurity}
                                href={offerTexts.additional.features[0].url}
                                titleColor="#ea6c1e"
                                animationDirection="right"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6}}>
                            <PromoLinkCard
                                title={offerTexts.additional.features[1].title}
                                image={logoImageCleaning}
                                href={offerTexts.additional.features[1].url}
                                titleColor="#ea6c1e"
                                // ZMIANA: Karta po prawej wjeżdża z prawej strony
                                animationDirection="left"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Offer;