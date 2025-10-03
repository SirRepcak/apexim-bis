// src/components/NavHeader/NavHeader.js

import React, { useState, useEffect } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Box,
    useTheme,
    Button,
    Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Import BOTH logos
import logoMain from '../../assets/logo.webp';
import logoSecurity from '../../assets/logo-sec-notext.webp'; // Assuming you have a second logo
import ContactButton from "../ContactButton/ContactButton";
import SocialIcons from "../SocialIcons/SocialIcons";

// Define navigation links for the main section
const mainNavLinks = [
    { to: '/about', label: 'O Firmie' },
    { to: '/offer', label: 'Oferta' },
    { to: '/realizations', label: 'Realizacje' },
    { to: '/contact', label: 'Kontakt' },
    { to: '/', label: 'Start' },
];

// Define navigation links for the security section
const securityNavLinks = [
    { to: '/aboutSecurity', label: 'O Firmie' },
    { to: '/offerSecurity', label: 'Oferta' },
    { to: '/contactSecurity', label: 'Kontakt' }, // Make sure these routes are unique
    { to: '/', label: 'Start' },
];

// The component now accepts a 'variant' prop
const NavHeader = ({ variant = 'main' }) => {
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    // --- DYNAMIC CONTENT ---
    // Select the correct logo and links based on the variant prop
    const currentLogo = variant === 'security' ? logoSecurity : logoMain;
    const navLinks = variant === 'security' ? securityNavLinks : mainNavLinks;
    const companyName = variant === 'security' ? "Apexim BIS sp. z o.o." : "Apexim BIS sp. z o.o.";

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    // This style rule works automatically because useTheme() gets the correct
    // theme (blue or orange) from the ThemeProvider in MainLayout.
    const activeLinkStyle = {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    };

    return (
        <>
            <Fade in={loaded} timeout={1000}>
                <AppBar
                    position="sticky"
                    color="default"
                    elevation={12}
                    sx={{
                        // These styles also work automatically with the correct theme
                        backgroundColor: theme.palette.appBarTransparent,
                        backdropFilter: 'blur(10px)',
                        py: 0.75,
                        px: { xs: 2, md: 4 },
                        flexWrap: 'wrap',
                    }}
                >
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Box
                            component={RouterLink}
                            to="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                minWidth: 0,
                            }}
                        >
                            <Box
                                component="img"
                                src={currentLogo} // Use the selected logo
                                alt={`${companyName} Logo`}
                                sx={{ height: 80, mr: 1 }}
                            />
                            <Typography
                                variant="h5"
                                noWrap
                                sx={{
                                    userSelect: 'none',
                                    fontWeight: '600',
                                    fontSize: { xs: '0.9rem', sm: '1.5rem' },
                                }}
                            >
                                {companyName} {/* Use the selected company name */}
                            </Typography>
                        </Box>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                            {navLinks.map(({ to, label }) => ( // Use the selected navLinks
                                <Button
                                    key={to}
                                    component={NavLink}
                                    to={to}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontWeight: 550,
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        '&.active': activeLinkStyle,
                                    }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>

                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ display: { xs: 'flex', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Fade>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                slotProps={{
                    paper: {
                        sx: {
                            width: 250,
                            backgroundColor: theme.palette.background.paper,
                        },
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <IconButton onClick={toggleDrawer(false)} aria-label="close drawer">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navLinks.map(({ to, label }) => ( // Use the selected navLinks
                        <ListItemButton
                            component={NavLink}
                            to={to}
                            key={to}
                            onClick={toggleDrawer(false)}
                            sx={{
                                '&.active .MuiListItemText-primary': {
                                    fontWeight: 'bold',
                                    color: theme.palette.primary.main,
                                },
                            }}
                        >
                            <ListItemText primary={label} />
                        </ListItemButton>
                    ))}
                </List>
                <Box sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: 3,
                    pb: 4,
                }}>
                    <ContactButton />
                    <SocialIcons />
                </Box>
            </Drawer>
        </>
    );
};

export default NavHeader;