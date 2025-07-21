// src/components/OfferNavigation/OfferNavigation.js
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { TbClipboardCheck, TbBrain, TbRulerMeasure } from "react-icons/tb";
import { FaWrench } from 'react-icons/fa';

const navItems = [
    { label: 'Inwestycje', icon: <TbClipboardCheck />, href: '#investments' },
    { label: 'Serwis', icon: <FaWrench />, href: '#service' },
    { label: 'Doradztwo', icon: <TbBrain />, href: '#consulting' },
    { label: 'Projektowanie', icon: <TbRulerMeasure />, href: '#project' },
];

const OfferNavigation = () => {
    return (
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
                        // === NOWA SEKCJA STYLIZACJI ===
                        sx={{
                            color: '#0591c6',
                            borderColor: '#0591c6',
                            '&:hover': {
                                borderColor: '#0477a2', // Ciemniejszy odcień dla hover
                                backgroundColor: 'rgba(5, 145, 198, 0.04)' // Delikatne tło przy najechaniu
                            }
                        }}
                    >
                        {item.label}
                    </Button>
                ))}
            </ButtonGroup>
        </Box>
    );
};

export default OfferNavigation;