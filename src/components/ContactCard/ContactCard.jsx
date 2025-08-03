// src/components/ContactCard/ContactCard.jsx

import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaFax, FaCopy, FaCheck } from 'react-icons/fa';

const ContactItem = ({ type, value }) => {
    const [copied, setCopied] = useState(false);

    const icons = {
        phone: <FaPhone />,
        email: <FaEnvelope />,
        fax: <FaFax />,
    };

    const href =
        type === 'phone'
            ? `tel:${value.replace(/\s/g, '')}`
            : type === 'email'
                ? `mailto:${value}`
                : null;

    const handleCopy = (e) => {
        e.preventDefault();
        const textToCopy = (type === 'phone' || type === 'fax') ? value.replace(/\s/g, '') : value;
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const content = (
        <>
            {value}
            <button onClick={handleCopy} className="copy-button" title="Skopiuj do schowka">
                {copied ? <FaCheck style={{ color: '#4CAF50' }} /> : <FaCopy />}
            </button>
        </>
    );

    return (
        <div className="contact-item">
            <div className="contact-icon-wrapper">{icons[type] || <FaEnvelope />}</div>
            {href ? (
                <a href={href} className="contact-value">
                    {content}
                </a>
            ) : (
                <div className="contact-value">
                    {content}
                </div>
            )}
        </div>
    );
};

// Komponent ContactCard pozostaje bez zmian
const ContactCard = ({ department, isOpenedFromUrl }) => {
    const [isOpen, setIsOpen] = useState(department.initiallyOpen || false);

    useEffect(() => {
        if (isOpenedFromUrl && !isOpen) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [isOpenedFromUrl, isOpen]);

    const isExpandable = department.additionalContacts && department.additionalContacts.length > 0;

    const handleToggle = () => {
        if (isExpandable) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <div className="contact-card">
            <div
                className="card-header"
                onClick={handleToggle}
                style={{ cursor: isExpandable ? 'pointer' : 'default' }}
            >
                <h2 className="card-title">{department.title}</h2>
                {isExpandable && (
                    <span className={`toggle-icon ${isOpen ? 'open' : ''}`}>
            ▲
          </span>
                )}
            </div>
            <div className="card-body">
                <ContactItem
                    type={department.mainContact.type}
                    value={department.mainContact.value}
                />
                {isExpandable && (
                    <div className={`collapsible-grid-container ${isOpen ? 'open' : ''}`}>
                        <div className="collapsible-grid-content">
                            {department.additionalContacts.map((contact, index) => (
                                <ContactItem key={index} type={contact.type} value={contact.value} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactCard;