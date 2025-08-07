import React from 'react';
import ContactCard from './ContactCard';
import { columnsData } from './ContactData';
import './ContactCard.css';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function ContactList({ departmentIdToOpen }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={`${isMobile ? 'mobile-app-container' : 'app-container'}`}>
            <div className="contact-list-container">
                {columnsData.map((column, columnIndex) => (
                    <div key={columnIndex} className="contact-column">
                        {column.map((dept) => (
                            <ContactCard
                                key={dept.id}
                                department={dept}
                                isOpenedFromUrl={dept.id == departmentIdToOpen}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactList;