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
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);
    const toggleDrawer = (open) => () => setDrawerOpen(open);

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
                    backgroundColor: theme.palette.appBarTransparent,
                    backdropFilter: 'blur(10px)',
                    py: 0.75,
                    px: { xs: 2, md: 4 },
                    flexWrap: 'wrap',
                }}
            >
                {/* ... AppBar content ... */}
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
                            src={logo}
                            alt="Apexim BIS Logo"
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
                            Apexim BIS sp. z o.o.
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                        {navLinks.map(({ to, label }) => (
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

            {/* Mobile drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                // MODIFICATION: Replaced deprecated `PaperProps` with `slotProps`
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