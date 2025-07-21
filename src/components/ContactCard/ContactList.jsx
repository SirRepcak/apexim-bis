import React from 'react';
import ContactCard from './ContactCard';
import { columnsData } from './ContactData';
import './ContactCard.css';

function ContactList({ departmentIdToOpen }) {
    return (
        <div className="app-container">
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