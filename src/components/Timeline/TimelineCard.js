// src/components/Timeline/TimelineCard.js

import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    useTheme,
} from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const TimelineCard = ({ item, onClick, onGalleryOpen, isMobile, isActive, mobileTitle }) => {
    const theme = useTheme();
    const hasGallery = item.galleryImages && item.galleryImages.length > 0;

    const handleMediaClick = (e) => {
        e.stopPropagation();
        if (hasGallery) {
            // IMPORTANT: Pass the original paths, the parent will handle the PUBLIC_URL for the lightbox
            onGalleryOpen(item.galleryImages);
        }
    };

    return (
        <Box onClick={onClick} sx={{ height: '100%', cursor: 'pointer' }}>
            {mobileTitle && (
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        fontFamily: "'BankGothic', sans-serif",
                        fontSize: '1.5rem',
                        p: '0.5rem 1rem',
                        mb: -1.5,
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        display: 'inline-block',
                        position: 'relative',
                        zIndex: 1,
                        borderRadius: '8px',
                    }}
                >
                    {mobileTitle}
                </Typography>
            )}
            <Card
                elevation={4}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    borderRadius: "10px",
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                    border: `3px solid ${isActive ? theme.palette.primary.main : 'transparent'}`,
                    transition: 'border-color 0.3s ease-in-out',
                }}
            >
                <Box
                    onClick={handleMediaClick}
                    sx={{
                        position: 'relative',
                        cursor: hasGallery ? 'pointer' : 'default',
                        ...(isMobile
                                ? { width: '100%', aspectRatio: '16/9' }
                                : { flex: '1 1 0', minHeight: 0 }
                        ),
                        '&:hover .media-image': {
                            filter: hasGallery && !isMobile ? 'brightness(0.7)' : 'none',
                        },
                        '&:hover .hover-overlay': {
                            opacity: hasGallery && !isMobile ? 1 : 0,
                        },
                    }}
                >
                    {/* === MODIFICATION IS HERE === */}
                    <CardMedia
                        className="media-image"
                        component="img"
                        // Prepend process.env.PUBLIC_URL to the image path
                        src={`${process.env.PUBLIC_URL}${item.cover}`}
                        alt={item.cardTitle}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: item.coverType === 'logo' ? 'contain' : 'cover',
                            p: item.coverType === 'logo' ? '1rem' : 0,
                            boxSizing: 'border-box',
                            transition: 'filter 0.3s ease-in-out',
                            filter: isMobile && hasGallery ? 'brightness(0.7)' : 'none',
                        }}
                    />
                    <Box
                        className="hover-overlay"
                        sx={{
                            position: 'absolute',
                            top: 0, left: 0,
                            width: '100%', height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            transition: 'opacity 0.3s ease-in-out',
                            opacity: isMobile && hasGallery ? 1 : 0,
                            backgroundColor: isMobile ? 'rgba(0, 0, 0, 0.3)' : theme.palette.primary.translucent,
                        }}
                    >
                        <ZoomInIcon sx={{ fontSize: 50 }} />
                    </Box>
                </Box>
                <CardContent sx={{ flexShrink: 0, p: 2 }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ mt: 0, mb: 0.5, color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}
                    >
                        {item.cardTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                        {item.cardSubtitle}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TimelineCard;