// src/pages/Offer/Offer.jsx
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Header from "../../components/NavHeader/NavHeader";
import Footer from "../../components/NavFooter/NavFooter";
import ExpandableFeatureSection from "../../components/FeatureSection/ExpandableFeatureSection";
import OfferNavigation from "../../components/OfferNavigation/OfferNavigation";
import FeatureSection from "../../components/FeatureSection/FeatureSection";
import {
    Box,
    Button,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {FaCertificate, FaWrench} from "react-icons/fa";
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

import investmentsImage from "../../assets/mainImg/3.jpg";
import designImage from "../../assets/mainImg/7.jpg";
import serviceImage from "../../assets/mainImg/8.jpg";
import permissionsImage from "../../assets/mainImg/9.jpg";
import consultingImage from "../../assets/mainImg/2.jpg";
import logoImageSecurity from "../../assets/logo-security.png";
import logoImageCleaning from "../../assets/logo-cleaning.png";

import offerTexts from "./offerTexts";

const investmentsIcons = [<TbBulb/>, <TbShieldCheck/>, <TbVideo/>, <TbNetwork/>];
const serviceIcons = [<TbShieldCheck/>, <TbBulb/>];
const permissionsIcons = [
    <TbLicense/>,
    <TbShieldCheck/>,
    <TbFileCertificate/>,
    <TbDeviceDesktopCheck/>,
    <TbUserShield/>,
    <TbLockAccess/>,
];

// === INVESTMENTS DETAILS ===
const InvestmentsDetails = ({onPermissionsClick}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <FeatureSection
                title={offerTexts.investments.title}
                titleColor="#0591c6"
                icon={<TbClipboardCheck/>}
                backgroundColor="#e9f7ff"
                hasShadow
                contentAlign={isMobile ? "justify" : "center"}
            >

                {offerTexts.investments.description}
            </FeatureSection>

            <Typography
                variant="h5"
                sx={{textAlign: "center", mt: 5, mb: 2}}
            >
                {offerTexts.investments.competenciesTitle}
            </Typography>

            <Grid container spacing={4} alignItems="stretch">
                <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    flexDirection={isMobile ? "column" : "row"}
                    gap={4}
                >
                    <FeatureSection
                        title={offerTexts.investments.features[0].title}
                        titleColor="#0591c6"
                        icon={investmentsIcons[0]}
                        backgroundColor="#f8f9fa"
                        hasShadow
                        contentAlign="justify"
                    >
                        {offerTexts.investments.features[0].content}
                    </FeatureSection>
                    <FeatureSection
                        title={offerTexts.investments.features[1].title}
                        titleColor="#0591c6"
                        icon={investmentsIcons[1]}
                        backgroundColor="#f8f9fa"
                        hasShadow
                        contentAlign="justify"
                    >
                        {offerTexts.investments.features[1].content}
                    </FeatureSection>
                </Grid>

                <Grid
                    item
                    xs={12}
                    md={6}
                    display="flex"
                    flexDirection={isMobile ? "column" : "row"}
                    gap={4}
                >
                    <FeatureSection
                        title={offerTexts.investments.features[2].title}
                        titleColor="#0591c6"
                        icon={investmentsIcons[2]}
                        backgroundColor="#f8f9fa"
                        hasShadow
                        contentAlign="justify"
                    >
                        {offerTexts.investments.features[2].content}
                    </FeatureSection>
                    <FeatureSection
                        title={offerTexts.investments.features[3].title}
                        titleColor="#0591c6"
                        icon={investmentsIcons[3]}
                        backgroundColor="#f8f9fa"
                        hasShadow
                        contentAlign="justify"
                    >
                        {offerTexts.investments.features[3].content}
                    </FeatureSection>
                </Grid>
            </Grid>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mt: 4,
                    flexDirection: isMobile ? "column" : "row",
                }}
            >
                <Button
                    variant="outlined"
                    href="#permissions"
                    onClick={onPermissionsClick}
                    startIcon={<FaCertificate/>}
                    sx={{
                        color: "#0591c6",
                        borderColor: "#0591c6",
                        "&:hover": {
                            borderColor: "#0477a2",
                            backgroundColor: "rgba(5, 145, 198, 0.04)",
                        },
                    }}
                >
                    {offerTexts.investments.buttons.permissions}
                </Button>
                <Button
                    component={Link}
                    to="/contact?open=3"
                    variant="contained"
                    startIcon={<TbMail/>}
                    sx={{bgcolor: "#0591c6", "&:hover": {bgcolor: "#0477a2"}}}
                >
                    {offerTexts.investments.buttons.ask}
                </Button>
            </Box>
        </>
    );
};

// === SERVICE DETAILS ===
const ServiceDetails = ({onPermissionsClick}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <FeatureSection
                title={offerTexts.service.title}
                titleColor="#0591c6"
                icon={<FaWrench/>}
                backgroundColor="#e9f7ff"
                hasShadow
                contentAlign={isMobile ? "justify" : "center"}
            >
                <Typography
                    variant="body1"
                    sx={{fontSize: "1.1rem", maxWidth: "800px", mx: "auto"}}
                >
                    {offerTexts.service.description}
                </Typography>
            </FeatureSection>

            <Typography variant="h5" sx={{textAlign: "center", mt: 5, mb: 2}}>
                {offerTexts.service.scopeTitle}
            </Typography>

            <Grid container spacing={2} alignItems="stretch" wrap="nowrap">
                {offerTexts.service.features.map((feature, idx) => (
                    <Grid item xs={12} md={4} key={feature.title}>
                        <FeatureSection
                            title={feature.title}
                            titleColor="#0591c6"
                            icon={serviceIcons[idx]}
                            backgroundColor="#f8f9fa"
                            hasShadow
                            contentAlign="center"
                        >
                            {feature.content}
                        </FeatureSection>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{mt: 4}}>
                <FeatureSection
                    key="section-service-react"
                    title={offerTexts.service.responseTitle}
                    titleColor="#0591c6"
                    backgroundColor="#f8f9fa"
                    icon={<TbClockHour4/>}
                    contentAlign="center"
                >
                    {offerTexts.service.responseText}
                </FeatureSection>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mt: 4,
                    flexDirection: isMobile ? "column" : "row",
                }}
            >
                <Button
                    variant="outlined"
                    href="#permissions"
                    onClick={onPermissionsClick}
                    startIcon={<FaCertificate/>}
                    sx={{
                        color: "#0591c6",
                        borderColor: "#0591c6",
                        "&:hover": {
                            borderColor: "#0477a2",
                            backgroundColor: "rgba(5, 145, 198, 0.04)",
                        },
                    }}
                >
                    {offerTexts.service.buttons.permissions}
                </Button>
                <Button
                    component={Link}
                    to="/contact?open=4"
                    variant="contained"
                    startIcon={<TbMail/>}
                    sx={{bgcolor: "#0591c6", "&:hover": {bgcolor: "#0477a2"}}}
                >
                    {offerTexts.service.buttons.ask}
                </Button>
            </Box>
        </>
    );
};

// === PERMISSIONS DETAILS ===
const PermissionsDetails = () => {
    return (
        <Grid container spacing={2}>
            {offerTexts.permissions.features.map((feature, index) => (
                <Grid item xs={12} md={4} key={feature.title}>
                    <FeatureSection
                        title={feature.title}
                        titleColor="#0591c6"
                        icon={permissionsIcons[index]}
                        backgroundColor="#f8f9fa"
                        hasShadow
                        contentAlign="center"
                        sx={{height: "100%"}}
                    >
                        {feature.content}
                    </FeatureSection>
                </Grid>
            ))}
        </Grid>
    );
};

// === MAIN OFFER PAGE ===
const Offer = () => {
    const [isPermissionsExpanded, setPermissionsExpanded] = useState(false);

    const handlePermissionsClick = () => {
        setTimeout(() => {
            setPermissionsExpanded(true);
        }, 300);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{pt: 12}}>
            <OfferNavigation/>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    px: 2,
                    mt: 5,
                    mx: "auto",
                }}
            >
                {/* === INVESTMENTS === */}
                <Box id="investments" sx={{scrollMarginTop: "100px"}}>
                    <ExpandableFeatureSection
                        title={offerTexts.investments.sectionTitle}
                        titleColor="#0591c6"
                        icon={<TbClipboardCheck/>}
                        image={investmentsImage}
                        imagePosition="right"
                        expandContent={<InvestmentsDetails onPermissionsClick={handlePermissionsClick}/>}
                    >
                        {offerTexts.investments.sectionParagraph}
                    </ExpandableFeatureSection>
                </Box>

                {/* === SERVICE === */}
                <Box id="service" sx={{scrollMarginTop: "100px"}}>
                    <ExpandableFeatureSection
                        title={offerTexts.service.sectionTitle}
                        titleColor="#0591c6"
                        icon={<FaWrench/>}
                        image={serviceImage}
                        imagePosition="left"
                        expandContent={<ServiceDetails onPermissionsClick={handlePermissionsClick}/>}
                    >
                        {offerTexts.service.sectionParagraph}
                    </ExpandableFeatureSection>
                </Box>

                {/* === CONSULTING === */}
                <Box id="consulting" sx={{scrollMarginTop: "100px"}}>
                    <FeatureSection
                        title={offerTexts.consulting.title}
                        titleColor="#0591c6"
                        icon={<TbBrain/>}
                        iconColor="#0591c6"
                        image={consultingImage}
                        imagePosition="right"
                        contentWidth="50%"
                        direction={isMobile ? "column" : "row"}
                        contentAlign="justify"
                    >
                        {offerTexts.consulting.paragraph1}
                        {offerTexts.consulting.paragraph2}
                        <Box sx={{mt: 3, display: "flex", justifyContent: "center"}}>
                            <Button
                                component={Link}
                                to="/contact?open=3"
                                variant="contained"
                                startIcon={<TbMail/>}
                                fullWidth={isMobile}
                                sx={{
                                    borderRadius: 2,
                                    bgcolor: "#0591c6",
                                    "&:hover": {bgcolor: "#0477a2"},
                                }}
                            >
                                {offerTexts.consulting.button}
                            </Button>
                        </Box>
                    </FeatureSection>
                </Box>

                {/* === PROJECT === */}
                <Box id="project" sx={{scrollMarginTop: "100px"}}>
                    <FeatureSection
                        title={offerTexts.project.title}
                        titleColor="#0591c6"
                        icon={<TbRulerMeasure/>}
                        iconColor="#0591c6"
                        image={designImage}
                        imagePosition={isMobile ? "right" : "left"}
                        contentWidth="50%"
                        direction={isMobile ? "column" : "row"}
                        contentAlign="justify"
                    >
                        {offerTexts.project.paragraph1}
                        {offerTexts.project.paragraph2}
                        {offerTexts.project.paragraph3}
                        <Box sx={{mt: 3, display: "flex", justifyContent: "center"}}>
                            <Button
                                component={Link}
                                to="/contact?open=5"
                                variant="contained"
                                startIcon={<TbMail/>}
                                fullWidth={isMobile}
                                sx={{
                                    borderRadius: 2,
                                    bgcolor: "#0591c6",
                                    "&:hover": {bgcolor: "#0477a2"},
                                }}
                            >
                                {offerTexts.project.button}
                            </Button>
                        </Box>
                    </FeatureSection>
                </Box>

                {/* === PERMISSIONS === */}
                <Box id="permissions" sx={{scrollMarginTop: "100px"}}>
                    <ExpandableFeatureSection
                        title={offerTexts.permissions.title}
                        titleColor="#0591c6"
                        icon={<FaCertificate/>}
                        image={permissionsImage}
                        imagePosition="right"
                        isInitiallyExpanded={isPermissionsExpanded}
                        onToggle={setPermissionsExpanded}
                        expandContent={<PermissionsDetails/>}
                    >
                        {offerTexts.permissions.description}
                    </ExpandableFeatureSection>
                </Box>

                {/* === ADDITIONAL === */}
                <Box sx={{scrollMarginTop: "100px"}}>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            mb: 5,
                            fontSize: "2.5rem",
                            color: "#1a2b48",
                        }}
                    >
                        {offerTexts.additional.heading}
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <FeatureSection
                                title={offerTexts.additional.features[0].title}
                                titleColor="#EC6C1E"
                                image={logoImageSecurity}
                                imageClassName="fs-logo-image"
                                imagePosition={isMobile ? "center" : "left"}
                                contentAlign="center"
                                backgroundColor="white"
                                hasShadow
                                clickable={offerTexts.additional.features[0].url}
                                flexJustifyCenter
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FeatureSection
                                title={offerTexts.additional.features[1].title}
                                titleColor="#EC6C1E"
                                image={logoImageCleaning}
                                imageClassName="fs-logo-image"
                                imagePosition={isMobile ? "center" : "right"}
                                contentAlign="center"
                                backgroundColor="white"
                                hasShadow
                                clickable={offerTexts.additional.features[1].url}
                                flexJustifyCenter
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Offer;
