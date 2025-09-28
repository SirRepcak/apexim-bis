// src/components/ContentCard/ContentCard.js
import React from 'react';
import { Card, CardContent, Typography, Box, Grow } from '@mui/material';
import { useInView } from 'react-intersection-observer';

// ZMIANA: Dodano 'contentAlign' do propsów
const ContentCard = ({ icon, title, children, sx, contentAlign = 'justify' }) => {
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
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        flexDirection: { xs: 'column', sm: 'row' },
                        textAlign: { xs: 'center', sm: 'left' },
                    }}>
                        {icon && (
                            <Box sx={{
                                mr: { xs: 0, sm: 2.5 },
                                mb: { xs: 2, sm: 0 },
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
                                color: 'primary.main'
                            }}
                        >
                            {title}
                        </Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            // ZMIANA: Użycie propa `contentAlign` do sterowania wyrównaniem tekstu
                            textAlign: contentAlign,
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