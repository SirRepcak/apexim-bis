// src/components/Timeline/TimelineCard.jsx

import React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    useTheme,
} from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const TimelineCard = ({ item, onClick, onGalleryOpen, isMobile }) => {
    const theme = useTheme();
    const hasGallery = item.galleryImages && item.galleryImages.length > 0;

    const handleMediaClick = (e) => {
        e.stopPropagation();
        if (hasGallery) {
            onGalleryOpen(item.galleryImages);
        }
    };

    const mediaContainerSx = {
        position: 'relative',
        overflow: 'hidden',
        cursor: hasGallery ? 'pointer' : 'default',
        '&:hover .hover-overlay': {
            opacity: hasGallery ? 1 : 0,
        },
        '&:hover .media-image': {
            filter: hasGallery ? 'brightness(0.7)' : 'none',
        },
        ...(isMobile
                ? {
                    width: '100%',
                    aspectRatio: '16/9',
                }
                : {
                    // Przywracamy kluczowe style dla flexboxa, aby obrazek się nie zapadał
                    flex: '1 1 0',
                    minHeight: 0,
                }
        ),
    };

    return (
        <Box onClick={onClick} sx={{ height: '100%', cursor: 'pointer' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                <Box
                    onClick={handleMediaClick}
                    sx={mediaContainerSx}
                >
                    <CardMedia
                        className="media-image"
                        component="img"
                        src={item.cover}
                        alt={item.cardTitle}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: item.coverType === 'logo' ? 'contain' : 'cover',
                            p: item.coverType === 'logo' ? '1rem' : 0,
                            boxSizing: 'border-box',
                            transition: 'filter 0.3s ease-in-out',
                        }}
                    />
                    <Box
                        className="hover-overlay"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: theme.palette.primary.translucent,
                            color: 'white',
                            opacity: 0,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                    >
                        <ZoomInIcon sx={{ fontSize: 50 }} />
                    </Box>
                </Box>
                {/* Prosta wersja CardContent, bez dodatkowych stylów */}
                <CardContent sx={{ flexShrink: 0, p: 2 }}>
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{ mt: 0, mb: 0.5, color: 'primary.main', fontWeight: 'bold' }}
                    >
                        {item.cardTitle}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.cardSubtitle}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TimelineCard;