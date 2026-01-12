// src/components/CookieConsentBanner/CookieConsentBanner.js

import React from 'react';
import { Paper, Typography, Button, Box, Stack, useTheme, Slide } from '@mui/material';

const CookieConsentBanner = ({ onAccept, onDecline }) => {
    const theme = useTheme();

    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <Paper
                elevation={12}
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 2, md: 3 },
                    borderTop: `1px solid ${theme.palette.divider}`,
                    zIndex: 2000, // Ensure it's on top of other content
                    backgroundColor: theme.palette.background.paper,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2,
                        maxWidth: '1200px',
                        mx: 'auto', // Center the content
                    }}
                >
                    <Typography variant="body2" sx={{ textAlign: { xs: 'center', md: 'left' }, flexGrow: 1 }}>
                        Używamy plików cookie, aby poprawić Twoje wrażenia. Nasza strona osadza mapy Google, które
                        mogą umieszczać własne pliki cookie. Wyrażając zgodę, akceptujesz ich użycie.
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ flexShrink: 0 }}>
                        <Button variant="contained" onClick={onAccept}>
                            Akceptuj
                        </Button>
                        <Button variant="outlined" onClick={onDecline}>
                            Odrzuć
                        </Button>
                    </Stack>
                </Box>
            </Paper>
        </Slide>
    );
};

export default CookieConsentBanner;