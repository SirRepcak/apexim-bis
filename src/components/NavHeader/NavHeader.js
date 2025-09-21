import React, { useState } from 'react';
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
    useMediaQuery,
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../../assets/logo.png';
import ContactButton from "../ContactButton/ContactButton";
import SocialIcons from "../SocialIcons/SocialIcons";

const navLinks = [
    { to: '/about', label: 'O Firmie' },
    { to: '/offer', label: 'Oferta' },
    { to: '/realizations', label: 'Realizacje' },
    { to: '/contact', label: 'Kontakt' },
    { to: '/', label: 'Start' },
];

const NavHeader = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    const activeLinkStyle = {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    };

    return (
        <>
            <AppBar
                position="sticky"
                color="default"
                elevation={1}
                sx={{
                    bgcolor: theme.palette.background.paper,
                    boxShadow: theme.shadows[4],
                    py: 0.75,
                    px: { xs: 2, md: 4 },
                    flexWrap: 'wrap',
                }}
            >
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    {/* Logo and company name */}
                    <Box
                        component={RouterLink}
                        to="/"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            color: 'inherit',
                        }}
                    >
                        <Box
                            component="img"
                            src={logo}
                            alt="Apexim BIS Logo"
                            sx={{ height: 80, mr: 1 }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 'bold',
                                fontFamily: 'externalFont, Arial, sans-serif',
                                whiteSpace: 'nowrap',
                                userSelect: 'none',
                            }}
                        >
                            Apexim BIS sp. z o.o.
                        </Typography>
                    </Box>

                    {/* Desktop nav links */}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            {navLinks.map(({ to, label }) => (
                                <Button
                                    key={to}
                                    component={NavLink}
                                    to={to}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        '&.active': activeLinkStyle,
                                    }}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* Mobile hamburger menu */}
                    {isMobile && (
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            {/* Mobile drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: 250,
                        backgroundColor: theme.palette.background.paper,
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <IconButton onClick={toggleDrawer(false)} aria-label="close drawer">
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navLinks.map(({ to, label }) => (
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
                <Box sx={{ width: '100%',
                    height: '100%', // Crucial for vertical alignment

                    // Use Flexbox
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end', // Center the items horizontally
                    alignItems: 'center',   // Push them to the bottom
                    gap: 3,                   // Add space between the items
                    pb: 4,   }}>
                    <ContactButton/>
                    <SocialIcons/>
                </Box>
            </Drawer>
        </>
    );
};

export default NavHeader;
