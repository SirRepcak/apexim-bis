// src/pages/Offer/OfferSecurity.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    Box,
    Button,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { FaCertificate, FaUserShield } from "react-icons/fa";
import {
    TbAlertTriangle,
    TbAward,
    TbChecklist,
    TbDeviceDesktopCheck,
    TbFileCertificate,
    TbLicense,
    TbLockAccess,
    TbMail,
    TbShieldCheck,
    TbShieldLock,
    TbSnowflake,
    TbSparkles,
    TbUserShield,
    TbWash
} from "react-icons/tb";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { BsClipboardCheck, BsBuilding } from "react-icons/bs";
import { IoCarSportSharp } from "react-icons/io5";

// Komponenty
import ExpandableContentCard from "../../components/ExpandableContentCard/ExpandableContentCard";
import ContentCard from "../../components/ContentCard/ContentCard";
import PromoLinkCard from "../../components/PromoLinkCard/PromoLinkCard";
import OfferNavigation from "../../components/OfferNavigation/OfferNavigation";
import offerTexts from "./offerTexts";

// Zasoby
import securityGuardImage from "../../assets/mainImg/mainImgSecurity/guard.webp";
import CMAImage from "../../assets/mainImg/mainImgSecurity/cctvGuard.webp";
import cleaningImage from "../../assets/mainImg/mainImgSecurity/cleaning-lady.webp"; // Placeholder
import permissionsImage from "../../assets/mainImg/9.webp";
import logoImageService from "../../assets/logo-serv.webp";
import logoImageInvestments from "../../assets/logo-inv.webp";

// ===SEKCJA PRZYCISKÓW PODMENU ===
const navItems = [
    { label: 'Ochrona Fizyczna', icon: <TbUserShield />, href: '#investments' },
    { label: 'Monitoring', icon: <TbShieldLock />, href: '#service' },
    { label: 'Usługi Czystości', icon: <TbSparkles />, href: '#cleaning' },
    { label: 'Uprawnienia', icon: <FaCertificate />, href: '#permissions' },
];

// === SEKCJA SZCZEGÓŁÓW OCHRONY FIZYCZNEJ ===
const InvestmentsDetails = ({ onPermissionsClick }) => {
    const icons = [<MdOutlineQrCodeScanner />, <FaUserShield />, <Ri24HoursLine />, <BsClipboardCheck />];
    return (
        <Box>
            <ContentCard title={offerTexts.investments.title} icon={<TbUserShield />}>
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
                <Button component={Link} to="/contactSecurity?open=2" variant="contained" startIcon={<TbMail />}>
                    {offerTexts.investments.buttons.ask}
                </Button>
            </Box>
        </Box>
    );
};

// === SEKCJA SZCZEGÓŁÓW SERWISU / MONITORINGU ===
const ServiceDetails = ({ onPermissionsClick }) => {
    const icons = [<TbDeviceDesktopCheck />, <IoCarSportSharp />, <TbAlertTriangle />];
    return (
        <Box>
            <ContentCard title={offerTexts.service.title} icon={<TbUserShield />}>
                {offerTexts.service.description}
            </ContentCard>
            <Typography variant="h5" sx={{ textAlign: "center", mt: 5, mb: 3 }}>
                {offerTexts.service.scopeTitle}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {offerTexts.service.features.map((feature, idx) => (
                    <Grid size={{ xs: 12, md: 4 }} key={feature.title}>
                        <ContentCard title={feature.title} icon={icons[idx]}>
                            {feature.content}
                        </ContentCard>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                <Button variant="outlined" onClick={onPermissionsClick} startIcon={<FaCertificate />}>
                    {offerTexts.service.buttons.permissions}
                </Button>
                <Button component={Link} to="/contactSecurity?open=2" variant="contained" startIcon={<TbMail />}>
                    {offerTexts.service.buttons.ask}
                </Button>
            </Box>
        </Box>
    );
};

// === SEKCJA SZCZEGÓŁÓW USŁUG CZYSTOŚCI ===
const CleaningDetails = () => {
    const icons = [<BsBuilding />, <TbWash />, <TbSnowflake />, <TbAward />];
    return (
        <Box>
            <ContentCard title={offerTexts.cleaning.title} icon={<TbChecklist />}>
                {offerTexts.cleaning.description}
            </ContentCard>
            <Typography variant="h5" sx={{ textAlign: "center", mt: 5, mb: 3 }}>
                {offerTexts.cleaning.scopeTitle}
            </Typography>
            <Grid container spacing={4}>
                {offerTexts.cleaning.features.map((feature, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                        <ContentCard title={feature.title} icon={icons[index]}>
                            {feature.content}
                        </ContentCard>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4, flexDirection: { xs: 'column', md: 'row' } }}>
                <Button component={Link} to="/contactSecurity?open=3" variant="contained" startIcon={<TbMail />}>
                    {offerTexts.cleaning.buttons.ask}
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
    const [expandedSection, setExpandedSection] = useState(null);
    const location = useLocation();

    // Efekt do odczytu hasha z URL i ustawienia rozwiniętej sekcji
    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.substring(1); // Usuń '#'
            setExpandedSection(sectionId);
        }
    }, [location.hash]);

    // Efekt do przewijania strony do rozwiniętej sekcji
    useEffect(() => {
        if (expandedSection) {
            setTimeout(() => {
                const element = document.getElementById(expandedSection);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        }
    }, [expandedSection]);

    // Handler do zarządzania stanem rozwijanych kart
    const handleToggleSection = (sectionId) => (isNowExpanded) => {
        setExpandedSection(isNowExpanded ? sectionId : null);
    };

    return (
        <Box sx={{ pt: { xs: 8, md: 12 } }}>
            <OfferNavigation navItems={navItems} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 5 }, px: { xs: 1, sm: 2, md: 3 }, mt: 5 }}>
                {/* === Ochrona Fizyczna === */}
                <Box id="investments" sx={{ scrollMarginTop: "100px" }}>
                    <ExpandableContentCard
                        title={offerTexts.investments.sectionTitle}
                        icon={<TbUserShield />}
                        image={securityGuardImage}
                        imagePosition="right"
                        isInitiallyExpanded={expandedSection === 'investments'}
                        onToggle={handleToggleSection('investments')}
                        expandContent={<InvestmentsDetails onPermissionsClick={() => setExpandedSection('permissions')} />}
                    >
                        {offerTexts.investments.sectionParagraph}
                    </ExpandableContentCard>
                </Box>

                {/* === Serwis / Monitoring === */}
                <Box id="service" sx={{ scrollMarginTop: "100px" }}>
                    <ExpandableContentCard
                        title={offerTexts.service.sectionTitle}
                        icon={<TbShieldLock />}
                        image={CMAImage}
                        imagePosition="left"
                        isInitiallyExpanded={expandedSection === 'service'}
                        onToggle={handleToggleSection('service')}
                        expandContent={<ServiceDetails onPermissionsClick={() => setExpandedSection('permissions')} />}
                    >
                        {offerTexts.service.sectionParagraph}
                    </ExpandableContentCard>
                </Box>

                {/* === Usługi Czystości === */}
                <Box id="cleaning" sx={{ scrollMarginTop: "100px" }}>
                    <ExpandableContentCard
                        title={offerTexts.cleaning.sectionTitle}
                        icon={<TbSparkles />}
                        image={cleaningImage}
                        imagePosition="right"
                        isInitiallyExpanded={expandedSection === 'cleaning'}
                        onToggle={handleToggleSection('cleaning')}
                        expandContent={<CleaningDetails />}
                    >
                        {offerTexts.cleaning.sectionParagraph}
                    </ExpandableContentCard>
                </Box>

                {/* === Uprawnienia === */}
                <Box id="permissions" sx={{ scrollMarginTop: "100px" }}>
                    <ExpandableContentCard
                        title={offerTexts.permissions.title}
                        icon={<FaCertificate />}
                        image={permissionsImage}
                        imagePosition="left"
                        isInitiallyExpanded={expandedSection === 'permissions'}
                        onToggle={handleToggleSection('permissions')}
                        expandContent={<PermissionsDetails />}
                    >
                        {offerTexts.permissions.sectionParagraph}
                    </ExpandableContentCard>
                </Box>

                {/* === Usługi dodatkowe === */}
                <Box sx={{ scrollMarginTop: "100px", textAlign: 'center' }}>
                    <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
                        {offerTexts.additional.heading}
                    </Typography>
                    <Grid container spacing={4} sx={{ mb: 4 }}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <PromoLinkCard
                                title={offerTexts.additional.features[0].title}
                                image={logoImageService}
                                href={offerTexts.additional.features[0].url}
                                titleColor="#0591C6"
                                animationDirection="right"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <PromoLinkCard
                                title={offerTexts.additional.features[1].title}
                                image={logoImageInvestments}
                                href={offerTexts.additional.features[1].url}
                                titleColor="#0591C6"
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