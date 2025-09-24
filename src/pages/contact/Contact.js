// src/pages/Contact/Contact.jsx

import React from "react";
import ContactList from '../../components/ContactCard/ContactList';
import LocationMap from "../../components/LocationMap/LocationMap";
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

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
        </Box>
    );
};

export default Contact;