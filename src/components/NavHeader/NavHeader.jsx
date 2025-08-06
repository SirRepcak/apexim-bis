import React, {forwardRef, useState} from 'react';
import logo from '../../assets/logo.png';
import {Link, NavLink} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Box, Grid, ListItem, Typography} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import './NavHeader.css';
import {CloseIcon} from "yet-another-react-lightbox";
import Footer from "../NavFooter/NavFooter";
import Button from "@mui/material/Button";
import {TbPhone} from "react-icons/tb";

const navLinks = [
    {to: '/about', label: 'O Firmie'},
    {to: '/offer', label: 'Oferta'},
    {to: '/realizations', label: 'Realizacje'},
    {to: '/contact', label: 'Kontakt'},
    {to: '/', label: 'Start'},
];

const NAVBAR_BG = '#f0f1f9';
const NAVBAR_SHADOW = '0 4px 20px rgba(22, 32, 50, 0.15)';

const Header = forwardRef((props, ref) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
        document.body.style.paddingRight = '0px';
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
        document.body.style.paddingRight = '';
    };

    return (
        <Box
            ref={ref}
            sx={{
                bgcolor: NAVBAR_BG,
                boxShadow: NAVBAR_SHADOW,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 3000,
                opacity: props.hidden ? 0 : '90%',
                pointerEvents: props.hidden ? 'none' : 'auto',
                transition: 'all 0.4s',
            }}
        >
            <Grid
                container
                alignItems="center"
                justifyContent="space-evenly"
                sx={{
                    width: '100%',
                    px: isMobile ? 'unset' : 2,
                    ml: isMobile ? 'unset' : '1.6%',
                    height: {xs: 100, sm: 100, md: 100},
                }}
            >
                <Grid sx={{display: 'flex', alignItems: 'center'}}>
                    <Box
                        component="img"
                        src={logo}
                        alt="Logo"
                        sx={{
                            width: {xs: 60, sm: 75},
                            height: {xs: 60, sm: 75},
                            mr: {xs: 2, sm: 3},
                        }}
                    />
                    <Typography
                        component={Link}
                        to="/"
                        sx={{
                            fontFamily: 'externalFont, Arial, sans-serif',
                            fontWeight: 600,
                            fontSize: {xs: 18, sm: 21, md: 23},
                            textDecoration: 'none',
                            color: '#0591c6',
                            letterSpacing: 0.5,
                            lineHeight: 1,
                            display: 'inline-block',
                        }}
                    >
                        Apexim BIS{' '}
                        <Typography
                            component="span"
                            sx={{
                                fontFamily: 'externalFont, Arial, sans-serif',
                                fontWeight: 600,
                                fontSize: {xs: 18, sm: 21, md: 23},
                                color: '#0591c6',
                                ml: 0.5,
                                display: 'inline',
                            }}
                        >
                            sp. z o.o.
                        </Typography>
                    </Typography>
                </Grid>

                {!isMobile && (
                    <Grid>
                        <Box
                            component="ul"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                listStyle: 'none',
                                m: 0,
                                pl: 0,
                                pr: 5,
                            }}
                        >
                            {navLinks.map(link => (
                                <Box
                                    component="li"
                                    key={link.to}
                                    sx={{mx: 1, px: 0}}
                                >
                                    <Typography
                                        component={NavLink}
                                        to={link.to}
                                        sx={{
                                            textDecoration: 'none',
                                            color: '#0E2431',
                                            fontSize: 15,
                                            fontWeight: "bold",
                                            px: 1,
                                            py: '10px',
                                            borderRadius: '3px',
                                            transition: 'all 0.3s',
                                            '&:hover, &.active': {
                                                color: '#0591c6',
                                            },
                                        }}
                                    >
                                        {link.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                )}

                {isMobile && (
                    <Grid>
                        <IconButton
                            edge="end"
                            aria-label="menu"
                            onClick={handleDrawerOpen}
                            sx={{
                                display: {sm: 'flex', md: 'none'},
                                mr: 1,
                            }}
                        >
                            <MenuIcon
                                sx={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={handleDrawerClose}
                            sx={{
                                zIndex: 9999,
                                position: 'absolute',
                            }}
                            slotProps={{
                                paper: {
                                    sx: {
                                        width: '60vw',
                                        bgcolor: 'background.paper',
                                        pt: 2,
                                    },
                                }
                            }}
                        >
                            <Grid container flexDirection={'column'} justifyContent={'space-between'} height={'100%'}>
                                <Grid container flexDirection={'column'}>
                                    <Grid>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            px: 2,
                                            py: 1
                                        }}>
                                            <IconButton onClick={() => setDrawerOpen(false)}>
                                                <CloseIcon/>
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                    <Grid>
                                        <List sx={{width: '100%'}}>
                                            {navLinks.map(link => (
                                                <ListItem key={link.to} disablePadding>
                                                    <ListItemButton
                                                        component={Link}
                                                        to={link.to}
                                                        onClick={() => setDrawerOpen(false)}
                                                        sx={{
                                                            py: 2,
                                                            px: 4,
                                                            justifyContent: 'flex-start',
                                                        }}
                                                    >
                                                        <ListItemText
                                                            primary={link.label}
                                                            slotProps={{
                                                                primary: {
                                                                    fontSize: 16,
                                                                    fontWeight: "bold",
                                                                    color: '#0591c6',
                                                                }
                                                            }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                </Grid>
                                <Grid pb={2}>
                                    <footer className="mobile-footer">
                                        <Grid size={12} container display={'flex'} alignItems={'center'} flexDirection={'column'} gap={2}>
                                            <Grid size={12} sx={{pr: 1, pl: 1}}>
                                                <Box sx={{mt: 0.5}}>
                                                    <Button component={Link}
                                                            to="/contact?open=3"
                                                            variant="contained"
                                                            startIcon={<TbPhone/>} sx={{
                                                        backgroundColor: '#0591c6',
                                                        '&:hover': {backgroundColor: '#0477a2'}
                                                    }}>Skontaktuj się z nami
                                                    </Button>
                                                </Box>
                                            </Grid>

                                            <Grid size={12}>
                                                <div >
                                                    <Typography sx={{pr: '10px'}}>NIP: 973-06-58-521<br/>Regon: 971249928</Typography>
                                                </div>
                                            </Grid>

                                            <Grid size={12}>
                                                <div>&copy; 2025 Apexim BIS sp. z o.o.</div>
                                            </Grid>
                                        </Grid>
                                    </footer>
                                </Grid>
                            </Grid>
                        </Drawer>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
});

Header.displayName = 'Header';
export default Header;
