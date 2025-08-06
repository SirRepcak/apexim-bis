// src/components/OfferNavigation/OfferNavigation.js
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {TbBrain, TbClipboardCheck, TbRulerMeasure} from "react-icons/tb";
import {FaWrench} from 'react-icons/fa';

// We need to import the CSS file to make sure the styles are applied
import './OfferNavigation.css';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Grid} from "@mui/material";

const navItems = [
    { label: 'Inwestycje', icon: <TbClipboardCheck />, href: '#investments' },
    { label: 'Serwis', icon: <FaWrench />, href: '#service' },
    { label: 'Doradztwo', icon: <TbBrain />, href: '#consulting' },
    { label: 'Projektowanie', icon: <TbRulerMeasure />, href: '#project' },
];

const OfferNavigation = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
                    fullWidth
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Grid container spacing={isMobile && 2} width={'80%'} justifyContent={'center'}>
                        {navItems.map((item) => (
                            <Grid size={{ xs: 12, sm: 12, md: 3 }} key={item.label}>
                                <Button
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
                            </Grid>
                        ))}
                    </Grid>
                </ButtonGroup>
            </Box>
        </div>
    );
};

export default OfferNavigation;