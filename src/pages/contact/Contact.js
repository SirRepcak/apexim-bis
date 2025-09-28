// src/pages/Contact/Contact.jsx

import React from "react";
import ContactList from '../../components/ContactCard/ContactList';
import LocationMap from "../../components/LocationMap/LocationMap";
import { useLocation } from 'react-router-dom';
import {Box, Grid, Grow, Typography} from '@mui/material';
import {useInView} from "react-intersection-observer";
import ContactCard from "../../components/ContactCard/ContactCard";

const InfoCard = ({ title, value, animationDelay = 0 }) => {
    // This hook will track if the component is visible on the screen
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will only happen once
        threshold: 0.2,    // Triggers when 20% of the card is visible
    });

    const cardData = {
        title: title,
        mainContact: { type: 'info', value: value },
        additionalContacts: []
    };
    return (
        <div ref={ref}>
            <Grow in={inView} timeout={700} style={{ transitionDelay: inView ? `${animationDelay}ms` : '0ms' }}>
                <div>
                    <ContactCard department={cardData} />
                </div>
            </Grow>
        </div>
    );
};

const Contact = () => {
    // This logic remains the same to read the 'open' parameter from the URL
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const departmentIdToOpen = params.get('open');

    return (
        // Use a Box for layout and spacing with the sx prop
        <Box sx={{ my: 4 }}>
            <ContactList departmentIdToOpen={departmentIdToOpen} />
            <Box sx={{ mt: 5 }}>
                <LocationMap />
            </Box>

            <Typography variant="h5" align="center" sx={{ mt: 8, mb: 3 }}>
                Dane Firmy
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                <Grid size={{xs:12, sm:10, md:8, lg:5}}>
                    <InfoCard title="NIP" value="973-06-58-521" />
                </Grid>
                <Grid size={{xs:12, sm:10, md:8, lg:5}}>
                    <InfoCard title="REGON" value="971249928" animationDelay={200} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;