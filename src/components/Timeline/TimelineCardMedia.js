// src/components/Timeline/TimelineCardMedia.js

import React, { useState, useMemo } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// MUI Imports
import Box from '@mui/material/Box';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { alpha } from '@mui/material/styles';


const TimelineCardMedia = ({ coverImage, galleryImages, coverType, onGalleryOpen, onGalleryClose }) => {
    // This component now manages its own lightbox state, which is the correct pattern.
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const hasGallery = galleryImages && galleryImages.length > 0;

    // Memoize the slides array so it's not recalculated on every render
    const slides = useMemo(() => {
        return hasGallery ? galleryImages.map(url => ({ src: url })) : [];
    }, [galleryImages, hasGallery]);

    const handleMediaClick = (event) => {
        // Only open the lightbox if a gallery exists.
        if (!hasGallery) return;
        // Stop the click from bubbling up to the parent Card's onClick
        event.stopPropagation();
        setIsLightboxOpen(true);
    };

    const mediaImageStyles = {
        width: '100%',
        height: '100%',
        display: 'block',
        transition: 'filter 0.3s ease-in-out',
        objectFit: coverType === 'logo' ? 'contain' : 'cover',
    };

    return (
        <>
            <Box
                onClick={handleMediaClick}
                sx={{
                    flexGrow: 1, // Let this container fill the available vertical space in the card
                    minHeight: 0, // Critical for flexbox children
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: hasGallery ? 'pointer' : 'default',
                    // Use group hover selectors on this parent Box
                    '&:hover .media-image': {
                        filter: hasGallery ? 'brightness(0.7)' : 'none',
                    },
                    '&:hover .hover-overlay': {
                        opacity: hasGallery ? 1 : 0,
                    },
                }}
            >
                {/* Conditionally render the image based on type */}
                {coverType === 'logo' ? (
                    <Box sx={{ width: '100%', height: '100%', backgroundColor: 'white', padding: 2, boxSizing: 'border-box' }}>
                        <Box component="img" src={coverImage} alt="Cover Logo" className="media-image" sx={mediaImageStyles} />
                    </Box>
                ) : (
                    <Box component="img" src={coverImage} alt="Cover Photo" className="media-image" sx={mediaImageStyles} />
                )}

                {/* The overlay is only rendered if there is a gallery */}
                {hasGallery && (
                    <Box
                        className="hover-overlay"
                        sx={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.6),
                            color: 'white',
                            opacity: 0,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                    >
                        <ZoomInIcon fontSize="large" />
                    </Box>
                )}
            </Box>

            {/* The Lightbox component is tied to this component's state */}
            {hasGallery && (
                <Lightbox
                    open={isLightboxOpen}
                    close={() => setIsLightboxOpen(false)}
                    slides={slides}
                    plugins={[Thumbnails, Zoom]}
                    // These props allow the parent to react to the gallery opening/closing
                    // (e.g., to pause a carousel)
                    on={{ enter: onGalleryOpen, exit: onGalleryClose }}
                />
            )}
        </>
    );
};

export default TimelineCardMedia;