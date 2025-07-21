// src/components/ContactCard/ContactCard.jsx

import React, { useState, useEffect } from 'react'; // <<< DODAJEMY IMPORT useEffect
import { FaPhone, FaEnvelope, FaCopy, FaCheck } from 'react-icons/fa';

// Komponent ContactItem pozostaje bez zmian
const ContactItem = ({ type, value }) => {
    const [copied, setCopied] = useState(false);
    const href = type === 'phone' ? `tel:${value.replace(/\s/g, '')}` : `mailto:${value}`;
    const handleCopy = (e) => {
        e.preventDefault();
        const textToCopy = type === 'phone' ? value.replace(/\s/g, '') : value;
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div className="contact-item">
            <div className="contact-icon-wrapper">{type === 'phone' ? <FaPhone /> : <FaEnvelope />}</div>
            <a href={href} className="contact-value">
                <span>{value}</span>
                <button onClick={handleCopy} className="copy-button" title="Skopiuj do schowka">
                    {copied ? <FaCheck style={{ color: '#4CAF50' }} /> : <FaCopy />}
                </button>
            </a>
        </div>
    );
};


const ContactCard = ({ department, isOpenedFromUrl }) => {
    // Stan początkowy jest teraz zawsze oparty na `initiallyOpen` lub jest `false`.
    // Ignorujemy `isOpenedFromUrl` w tym miejscu.
    const [isOpen, setIsOpen] = useState(department.initiallyOpen || false);

    // ===================================================================
    // === NOWA LOGIKA Z useEffect - TUTAJ DZIEJE SIĘ MAGIA ===
    // ===================================================================
    useEffect(() => {
        // Jeśli prop `isOpenedFromUrl` jest `true`, ORAZ karta nie jest już otwarta
        if (isOpenedFromUrl && !isOpen) {
            // Używamy małego opóźnienia, aby dać przeglądarce czas na wyrenderowanie
            // zamkniętej karty, zanim uruchomimy animację otwierania.
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 100); // 100ms to dobre, subtelne opóźnienie

            // Funkcja czyszcząca - dobra praktyka
            return () => clearTimeout(timer);
        }
        // `[]` na końcu sprawia, że ten efekt uruchomi się tylko raz, po zamontowaniu komponentu.
        // Dodajemy `isOpenedFromUrl` i `isOpen` do dependency array, aby reagować na ich zmiany, jeśli kiedykolwiek będą dynamiczne.
    }, [isOpenedFromUrl, isOpen]);
    // ===================================================================

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