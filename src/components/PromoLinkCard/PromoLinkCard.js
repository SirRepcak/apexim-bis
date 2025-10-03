// src/components/PromoLinkCard/PromoLinkCard.jsx
import React from 'react';
import {
    Card,
    Typography,
    Box,
    CardActionArea,
    useTheme,
    Slide,
} from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // <-- NOWY IMPORT

const PromoLinkCard = ({ title, image, href, titleColor = 'primary.main', animationDirection = 'up' }) => {
    const theme = useTheme();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box ref={ref} sx={{ height: '100%' , overflow:'hidden'}}>
            <Slide direction={animationDirection} in={inView} timeout={800}>
                <Card
                    elevation={12}
                    sx={{
                        height: '100%',
                        borderRadius: '12px',
                        transition: 'box-shadow 0.3s, transform 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: theme.shadows[24],
                        },
                    }}
                >
                    {/* ZMIANA: Używamy component={Link} i to={href} */}
                    <CardActionArea
                        component={Link}
                        to={href}
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