// src/components/Timeline/Timeline.js

import React from 'react';
import { Chrono } from "react-chrono";
import { items } from './TimelineData';
import TimelineCardMedia from './TimelineCardMedia';

// Import the CSS file for Chrono-specific overrides
import "./Timeline.css";

// MUI Imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MyTimeline = React.forwardRef(({ activeItemIndex, setActiveIndex, onGalleryOpen, onGalleryClose }, ref) => {
    const chronoItemsForPoints = items.map(item => ({ title: item.title }));

    return (
        <div ref={ref} style={{ width: '100%', height: 'auto' }}>
            <Chrono
                items={chronoItemsForPoints}
                mode="VERTICAL_ALTERNATING"
                disableToolbar={true}
                cardHeight={280}
                cardWidth={450}
                activeItemIndex={activeItemIndex}
                theme={{
                    titleColor: "#0591c6",
                    primary: "#0591c6",
                    // --- FIX ---
                    // Changed "transparent" to a valid hex color.
                    // Since the MUI Card inside has its own background, this color won't be visible.
                    cardBgColor: "#ffffff",
                    cardForeColor: "#000000",
                    secondary: "#0591c6",
                    titleColorActive: "#ffffff",
                }}
                scrollable={{ scrollbar: false }}
            >
                {items.map((item, index) => (
                    <Card
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        elevation={3}
                        sx={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            cursor: 'pointer',
                            border: '1px solid #e0e0e0'
                        }}
                    >
                        <TimelineCardMedia
                            coverImage={item.cover}
                            galleryImages={item.galleryImages}
                            coverType={item.coverType}
                            onGalleryOpen={onGalleryOpen}
                            onGalleryClose={onGalleryClose}
                        />

                        <CardContent sx={{ flexShrink: 0 }}>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="h3"
                                sx={{ color: '#0591c6', fontWeight: 'bold' }}
                            >
                                {item.cardTitle}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.cardSubtitle}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Chrono>
        </div>
    );
});

export default MyTimeline;