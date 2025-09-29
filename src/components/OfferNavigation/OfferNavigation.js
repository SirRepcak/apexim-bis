// src/components/OfferNavigation/OfferNavigation.js
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

// Komponent przyjmuje tablicę 'navItems' jako props
// Domyślna wartość to pusta tablica, aby uniknąć błędów
const OfferNavigation = ({ navItems = [] }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Jeśli nie ma itemów, nie renderuj nic
    if (!navItems || navItems.length === 0) {
        return null;
    }

    return (
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
                    <Grid container spacing={isMobile ? 2 : 0} width={'75%'} justifyContent={'center'}>
                        {navItems.map((item, idx) => (
                            // Szerokość kolumny jest teraz dynamicznie obliczana
                            <Grid size={{ xs: 12, sm: 12, md: 12 / navItems.length }} key={item.label}>
                                <Button
                                    href={item.href}
                                    startIcon={item.icon}
                                    sx={{
                                        width: '100%', // Przycisk wypełnia całą dostępną szerokość w Grid item
                                        color: 'palette.primary',
                                        borderColor: 'palette.secondary',
                                        borderLeft: !isMobile && idx !== 0 ? 'none' : undefined,
                                        borderRadius: !isMobile
                                            ? idx === 0
                                                ? '8px 0 0 8px'
                                                : idx === navItems.length - 1
                                                    ? '0 8px 8px 0'
                                                    : '0'
                                            : '8px',
                                        '&:hover': {
                                            borderColor: 'palette.secondary',
                                            backgroundColor: 'palette.translucentHover'
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