// src/components/ImageTextCard/ImageTextCard.js
import React from 'react';
import { Card, CardContent, Typography, Box, Grid, CardMedia, Slide, useTheme, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const ImageTextCard = ({
                           icon,
                           title,
                           titleColor = 'primary.main',
                           children,
                           image,
                           imagePosition = 'right',
                           minCardHeight,
                           contentPadding = { xs: 2, md: 4 },
                           bodyPaddingY = 3,
                           // NOWY PROP do kontroli układu
                           contentLayout = 'center', // 'center' | 'spaceBetween'
                           sx
                       }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px -150px 0px',
        delay:100,
    });

    const imageOrder = imagePosition === 'left' ? -1 : 1;
    const direction = isMobile ? 'column' : 'row';
    const slideDirection = imagePosition === 'left' ? 'right' : 'left';

    return (
        <Box ref={ref} sx={{ minHeight: minCardHeight, ...sx }}>
            <Slide direction={slideDirection} in={inView} timeout={1000}>
                <Card
                    elevation={12}
                    sx={{
                        display: 'flex',
                        minHeight: minCardHeight,
                        borderRadius: '12px',
                        overflow: 'hidden',
                    }}
                >
                    <Grid container direction={direction}>
                        <Grid size={{xs:12, md:7}} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{
                                p: contentPadding,
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: 1,
                                justifyContent: contentLayout,
                            }}>
                                <Box sx={{
                                    display: 'flex', alignItems: 'center', mb: 2,
                                    flexDirection: { xs: 'column', md: 'row' },
                                    textAlign: { xs: 'center', md: 'left' }
                                }}>
                                    {icon && (
                                        <Box sx={{
                                            mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 },
                                            color: 'icon.main', fontSize: '3.5rem', lineHeight: 1
                                        }}>
                                            {icon}
                                        </Box>
                                    )}
                                    <Typography
                                        variant="h4" component="h2"
                                        sx={{ fontWeight: 700, color: titleColor }}
                                    >
                                        {title}
                                    </Typography>
                                </Box>

                                <Box sx={{ py: bodyPaddingY }}>
                                    <Typography variant="body1" component="div" sx={{ textAlign: 'justify', lineHeight: 1.7, color: 'text.secondary' }}>
                                        {children}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Grid>
                        <Grid size={{xs:12, md:5}} order={{ xs: 0, md: imageOrder }}>
                            <CardMedia component="img" image={image} alt={title}
                                       sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </Grid>
                    </Grid>
                </Card>
            </Slide>
        </Box>
    );
};

export default ImageTextCard;