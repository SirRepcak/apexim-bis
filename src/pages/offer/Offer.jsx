// src/pages/Offer/Offer.js
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/NavHeader/NavHeader';
import Footer from '../../components/NavFooter/NavFooter';
import './Offer.css';
import ExpandableFeatureSection from '../../components/FeatureSection/ExpandableFeatureSection';
import OfferNavigation from '../../components/OfferNavigation/OfferNavigation';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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
import investmentsImage from '../../assets/image-desk.jpg';
import designImage from '../../assets/image-desk.jpg';
import serviceImage from '../../assets/image-team.jpg';
import permissionsImage from '../../assets/image-team.jpg';
import consultingImage from '../../assets/hand-shake.jpg';
import logoImageSecurity from '../../assets/logo-security.png';
import logoImageCleaning from '../../assets/logo-cleaning.png';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Grid} from "@mui/material";
import offerTexts from './offerTexts';

const investmentsIcons = [<TbBulb/>, <TbShieldCheck/>, <TbVideo/>, <TbNetwork/>];
const serviceIcons = [<TbShieldCheck/>, <TbBulb/>];
const permissionsIcons = [
    <TbLicense/>,
    <TbFileCertificate/>,
    <TbShieldCheck/>,
    <TbDeviceDesktopCheck/>,
    <TbUserShield/>,
    <TbLockAccess/>,
];

const InvestmentsDetails = ({ onPermissionsClick }) => (
    <>
        <FeatureSection
            title={offerTexts.investments.title}
            titleColor="#0591c6"
            icon={<TbClipboardCheck />}
            backgroundColor="#e9f7ff"
            hasShadow={true}
            contentAlign="justify"
        >
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                {offerTexts.investments.description}
            </p>
        </FeatureSection>
        <h3 style={{textAlign: 'center', margin: '40px 0 20px'}}>{offerTexts.investments.competenciesTitle}</h3>
        <Grid
            container
            spacing={4}
            sx={{maxWidth: '100%', margin: '0 auto', alignItems: 'stretch'}}
        >
            <Grid item xs={12} md={6} display="flex" flexDirection="column" gap={4}>
                <FeatureSection
                    title={offerTexts.investments.features[0].title}
                    titleColor="#0591c6"
                    icon={investmentsIcons[0]}
                    backgroundColor="#f8f9fa"
                    hasShadow={true}
                    contentAlign="justify"
                >
                    {offerTexts.investments.features[0].content}
                </FeatureSection>
                <FeatureSection
                    title={offerTexts.investments.features[1].title}
                    titleColor="#0591c6"
                    icon={investmentsIcons[1]}
                    backgroundColor="#f8f9fa"
                    hasShadow={true}
                    contentAlign="justify"
                >
                    {offerTexts.investments.features[1].content}
                </FeatureSection>
            </Grid>
            <Grid item xs={12} md={6} display="flex" flexDirection="column" gap={4}>
                <FeatureSection
                    title={offerTexts.investments.features[2].title}
                    titleColor="#0591c6"
                    icon={investmentsIcons[2]}
                    backgroundColor="#f8f9fa"
                    hasShadow={true}
                    contentAlign="justify"
                >
                    {offerTexts.investments.features[2].content}
                </FeatureSection>
                <FeatureSection
                    title={offerTexts.investments.features[3].title}
                    titleColor="#0591c6"
                    icon={investmentsIcons[3]}
                    backgroundColor="#f8f9fa"
                    hasShadow={true}
                    contentAlign="justify"
                >
                    {offerTexts.investments.features[3].content}
                </FeatureSection>
            </Grid>
        </Grid>
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
                {offerTexts.investments.buttons.permissions}
            </Button>
            <Button
                component={Link}
                to="/contact?open=3"
                variant="contained"
                startIcon={<TbMail/>}
                sx={{
                    backgroundColor: '#0591c6',
                    '&:hover': {backgroundColor: '#0477a2'}
                }}
            >
                {offerTexts.investments.buttons.ask}
            </Button>
        </Box>
    </>
);

const ServiceDetails = ({ onPermissionsClick }) => (
    <>
        <FeatureSection
            title={offerTexts.service.title}
            titleColor="#0591c6"
            icon={<FaWrench/>}
            backgroundColor="#e9f7ff"
            hasShadow={true}
            contentAlign="justify"
        >
            <p style={{fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto'}}>
                {offerTexts.service.description}
            </p>
        </FeatureSection>
        <h3 style={{textAlign: 'center', margin: '40px 0 20px'}}>
            {offerTexts.service.scopeTitle}
        </h3>
        <Grid
            container
            spacing={4}
            sx={{maxWidth: '100%', margin: '0 auto', alignItems: 'stretch'}}
        >
            {offerTexts.service.features.map((feature, idx) => (
                <Grid item xs={12} md={6} key={feature.title}>
                    <FeatureSection
                        title={feature.title}
                        titleColor="#0591c6"
                        icon={serviceIcons[idx]}
                        backgroundColor="#f8f9fa"
                        hasShadow={true}
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
                contentAlign="center">
                {offerTexts.service.responseText}
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
                {offerTexts.service.buttons.permissions}
            </Button>
            <Button
                component={Link}
                to="/contact?open=4"
                variant="contained"
                startIcon={<TbMail/>}
                sx={{backgroundColor: '#0591c6', '&:hover': {backgroundColor: '#0477a2'}}}
            >
                {offerTexts.service.buttons.ask}
            </Button>
        </Box>
    </>
);

const PermissionsDetails = () => (
    <Grid
        container
        spacing={4}
        alignItems="stretch"
        sx={{
            width: '100%',
            margin: '0 auto'
        }}
    >
        {[0, 1, 2].map((colIdx) => (
            <Grid item xs={12} md={4} display="flex" flexDirection="column" gap={4} key={colIdx}>
                {[0, 1].map((rowIdx) => {
                    const idx = colIdx * 2 + rowIdx;
                    const feature = offerTexts.permissions.features[idx];
                    return (
                        <FeatureSection
                            key={feature.title}
                            title={feature.title}
                            titleColor="#0591c6"
                            icon={permissionsIcons[idx]}
                            backgroundColor="#f8f9fa"
                            hasShadow={true}
                            contentAlign="center"
                            sx={{height: '100%'}}
                        >
                            {feature.content}
                        </FeatureSection>
                    );
                })}
            </Grid>
        ))}
    </Grid>
);

const Offer = () => {
    const [isPermissionsExpanded, setPermissionsExpanded] = useState(false);
    const handlePermissionsClick = () => {
        setTimeout(() => {
            setPermissionsExpanded(true);
        }, 300);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className="app">
            <Header/>
            <div className="blank-divider"></div>
            <OfferNavigation />

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                padding: '0 20px',
                margin: '40px auto 0',
                maxWidth: '80%'
            }}>
                <div id="investments" className="content-section-anchor">
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
                </div>

                <div id="service" className="content-section-anchor">
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
                </div>

                <div id="consulting" className="content-section-anchor">
                    <FeatureSection
                        title={offerTexts.consulting.title}
                        titleColor="#0591c6"
                        icon={<TbBrain/>}
                        iconColor="#0591c6"
                        image={consultingImage}
                        imagePosition="right"
                        contentWidth="50%"
                        direction={isMobile ? 'column' : 'row'}
                        contentAlign={"justify"}
                    >
                        {offerTexts.consulting.paragraph1}
                        {offerTexts.consulting.paragraph2}
                        <Box sx={{mt: 3}} display={'flex'} justifyContent={'center'}>
                            <Button
                                component={Link}
                                to="/contact?open=3"
                                variant="contained"
                                startIcon={<TbMail/>}
                                fullWidth={isMobile}
                                sx={{
                                    borderRadius: '8px',
                                    backgroundColor: '#0591c6',
                                    '&:hover': {backgroundColor: '#0477a2'}
                                }}
                            >
                                {offerTexts.consulting.button}
                            </Button>
                        </Box>
                    </FeatureSection>
                </div>

                <div id="project" className="content-section-anchor">
                    <FeatureSection
                        title={offerTexts.project.title}
                        titleColor="#0591c6"
                        icon={<TbRulerMeasure/>}
                        iconColor="#0591c6"
                        image={designImage}
                        imagePosition={isMobile ? 'right' : 'left'}
                        contentWidth="50%"
                        direction={isMobile ? 'column' : 'row'}
                        contentAlign={"justify"}
                    >
                        {offerTexts.project.paragraph1}
                        {offerTexts.project.paragraph2}
                        {offerTexts.project.paragraph3}
                        <Box sx={{mt: 3}} display={'flex'} justifyContent={'center'}>
                            <Button
                                component={Link}
                                to="/contact?open=5"
                                variant="contained"
                                startIcon={<TbMail/>}
                                fullWidth={isMobile}
                                sx={{
                                    borderRadius: '8px',
                                    backgroundColor: '#0591c6',
                                    '&:hover': {backgroundColor: '#0477a2'}
                                }}
                            >
                                {offerTexts.project.button}
                            </Button>
                        </Box>
                    </FeatureSection>
                </div>

                <div id="permissions" className="content-section-anchor">
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
                </div>

                <div className="content-section-anchor">
                    <h2 style={{
                        textAlign: 'center',
                        marginBottom: '40px',
                        fontSize: '2.5rem',
                        color: '#1a2b48'
                    }}>
                        {offerTexts.additional.heading}
                    </h2>
                    <Grid
                        container
                        spacing={4}
                        sx={{maxWidth: '100%', margin: '0 auto'}}
                    >
                        <Grid item xs={12} md={6}>
                            <FeatureSection
                                title={offerTexts.additional.features[0].title}
                                titleColor="#0591c6"
                                image={logoImageSecurity}
                                imageClassName="fs-logo-image"
                                imagePosition="left"
                                contentAlign="center"
                                backgroundColor="white"
                                hasShadow={true}
                                clickable={offerTexts.additional.features[0].url}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FeatureSection
                                title={offerTexts.additional.features[1].title}
                                titleColor="#0591c6"
                                image={logoImageCleaning}
                                imageClassName="fs-logo-image"
                                imagePosition="right"
                                contentAlign="center"
                                backgroundColor="white"
                                hasShadow={true}
                                clickable={offerTexts.additional.features[1].url}
                            />
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Footer/>
        </div>
    );
};

export default Offer;
