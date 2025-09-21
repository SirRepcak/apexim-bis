import React from "react";
import Header from '../../components/NavHeader/NavHeader';
import Footer from '../../components/NavFooter/NavFooter';
import ContactList from '../../components/ContactCard/ContactList';
import './Contact.css';
import LocationMap from "../../components/LocationMap/LocationMap";
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const departmentIdToOpen = params.get('open');

    return (
        <div className="app">
            <div className="spacer" style={{ height: '10rem', width: '100%' }}></div>
            <ContactList departmentIdToOpen={departmentIdToOpen} />
            <LocationMap />
        </div>
    );
};

export default Contact;