// src/components/PromoLinkCard/PromoLinkCard.jsx
import React from 'react';
import {
    Card,
    Typography,
    Box,
    CardActionArea,
    useTheme,
    Slide, // <-- NOWY IMPORT
} from '@mui/material';
import { useInView } from 'react-intersection-observer'; // <-- NOWY IMPORT

const PromoLinkCard = ({ title, image, href, titleColor = 'primary.main', animationDirection = 'up' }) => {
    const theme = useTheme();

    // Hook do śledzenia, czy komponent jest widoczny na ekranie
    const { ref, inView } = useInView({
        triggerOnce: true, // Animacja uruchomi się tylko raz
        threshold: 0.1,    // Uruchom, gdy 10% komponentu jest widoczne
    });

    return (
        // Zewnętrzny Box jest potrzebny do poprawnego działania ref z useInView
        <Box ref={ref} sx={{ height: '100%' }}>
            <Slide direction={animationDirection} in={inView} timeout={800}>
                <Card
                    elevation={12}
                    sx={{
                        height: '100%',
                        borderRadius: '12px',
                        // Usunęliśmy stare style animacji, ponieważ teraz zarządza nimi <Slide>
                        // Pozostawiamy tylko transition dla cienia i transformacji przy najechaniu
                        transition: 'box-shadow 0.3s, transform 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: theme.shadows[24],
                        },
                    }}
                >
                    <CardActionArea
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            py: { xs: 2.5, md: 4 },
                            px: { xs: 2.5, md: 3 },
                            height: '100%',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 3,
                        }}
                    >
                        <Box
                            component="img"
                            src={image}
                            alt={title}
                            sx={{
                                maxHeight: { xs: 80, md: 100 },
                                maxWidth: { xs: '70%', md: '40%' },
                                objectFit: 'contain',
                            }}
                        />
                        <Typography
                            variant="h5"
                            component="h3"
                            sx={{
                                fontWeight: 700,
                                textAlign: 'center',
                                color: titleColor,
                            }}
                        >
                            {title}
                        </Typography>
                    </CardActionArea>
                </Card>
            </Slide>
        </Box>
    );
};

export default PromoLinkCard;