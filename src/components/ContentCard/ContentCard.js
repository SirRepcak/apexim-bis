import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ContentCard = ({ icon, title, titleColor = '#0591c6', children, sx }) => {
    return (
        <Card
            elevation={0}
            sx={{
                height: '100%', // Makes cards in the same row equal height
                display: 'flex',
                flexDirection: 'column', // This keeps the content stacked vertically INSIDE the card
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.07)', // The subtle shadow you want
                ...sx
            }}
        >
            <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {icon && (
                        <Box sx={{
                            mr: 2.5,
                            color: 'icon.main',
                            fontSize: '4rem',
                            lineHeight: 1,
                        }}>
                            {icon}
                        </Box>
                    )}
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: '1.4rem',
                            color: titleColor
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'justify',
                        lineHeight: 1.7,
                        color: 'text.secondary', // Softer grey text from your theme
                    }}
                >
                    {children}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ContentCard;