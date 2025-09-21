import React from 'react';
import { Card, CardContent, Typography, Box, Grid, CardMedia, useTheme, useMediaQuery } from '@mui/material';

const ImageTextCard = ({
                           icon,
                           title,
                           titleColor = 'primary.main',
                           children,
                           image,
                           imagePosition = 'right',
                           minCardHeight ,
                           contentPadding = { xs: 2, md: 4 },
                           bodyPaddingY = 3,
                           sx
                       }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const direction = isMobile ? 'column' : (imagePosition === 'left' ? 'row-reverse' : 'row');

    return (
        <Card
            elevation={0}
            sx={{
                display: 'flex',
                minHeight: minCardHeight,
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.07)',
                overflow: 'hidden',
                ...sx
            }}
        >
            {/* MODIFICATION: Added alignItems: 'flex-start' to the container */}
            <Grid container direction={direction} sx={{ alignItems: 'flex-start' }}>

                {/* --- Text Column --- */}
                {/* This column will now determine the height of the component */}
                <Grid size={{ xs: 12, md: 7 }} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{
                        p: contentPadding,
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            {icon && (
                                <Box sx={{ mr: 2, color: 'icon.main', fontSize: '3.5rem', lineHeight: 1 }}>
                                    {icon}
                                </Box>
                            )}
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{ fontWeight: 700, color: titleColor }}
                            >
                                {title}
                            </Typography>
                        </Box>

                        <Box sx={{ py: bodyPaddingY }}>
                            <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.7, color: 'text.secondary' }}>
                                {children}
                            </Typography>
                        </Box>

                    </CardContent>
                </Grid>

                {/* --- Image Column --- */}
                {/* This column will now shrink or grow to match the text column's height */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};

export default ImageTextCard;