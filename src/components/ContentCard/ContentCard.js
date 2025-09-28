// src/components/ContentCard/ContentCard.js
import React from 'react';
import { Card, CardContent, Typography, Box, Grow } from '@mui/material';
import { useInView } from 'react-intersection-observer';

// MODIFICATION: Removed the 'titleColor' prop from the component's signature.
const ContentCard = ({ icon, title, children, sx }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        delay: 100,
    });

    return (
        <Grow in={inView} timeout={800}>
            <Card
                ref={ref}
                elevation={12}
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '12px',
                    ...sx
                }}
            >
                <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        {icon && (
                            <Box sx={{
                                mr: 2.5,
                                // This color is already theme-aware, which is great.
                                color: 'icon.main',
                                fontSize: '4rem',
                                lineHeight: 1,
                            }}>
                                {icon}
                            </Box>
                        )}
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                fontSize: '1.4rem',
                                // THE KEY CHANGE:
                                // Instead of a prop, we directly reference the theme's
                                // primary color. MUI's sx prop automatically knows
                                // how to find 'primary.main' in the theme's palette.
                                // It will be blue for the main theme and orange for security.
                                color: 'primary.main'
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
                            color: 'text.secondary',
                        }}
                    >
                        {children}
                    </Typography>
                </CardContent>
            </Card>
        </Grow>
    );
};

export default ContentCard;