// src/components/OfferNavigation/OfferNavigation.js
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { TbClipboardCheck, TbBrain, TbRulerMeasure } from "react-icons/tb";
import { FaWrench } from 'react-icons/fa';

// We need to import the CSS file to make sure the styles are applied
import './OfferNavigation.css';

const navItems = [
    { label: 'Inwestycje', icon: <TbClipboardCheck />, href: '#investments' },
    { label: 'Serwis', icon: <FaWrench />, href: '#service' },
    { label: 'Doradztwo', icon: <TbBrain />, href: '#consulting' },
    { label: 'Projektowanie', icon: <TbRulerMeasure />, href: '#project' },
];

const OfferNavigation = () => {
    return (
        // === STEP 1: Add a wrapper div with a custom class ===
        <div className="offer-navigation-container">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup
                    variant="outlined"
                    size="large"
                    aria-label="Nawigacja po ofercie"
                >
                    {navItems.map((item) => (
                        <Button
                            key={item.label}
                            href={item.href}
                            startIcon={item.icon}
                            sx={{
                                color: '#0591c6',
                                borderColor: '#0591c6',
                                '&:hover': {
                                    borderColor: '#0477a2',
                                    backgroundColor: 'rgba(5, 145, 198, 0.04)'
                                }
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </ButtonGroup>
            </Box>
        </div>
    );
};

export default OfferNavigation;