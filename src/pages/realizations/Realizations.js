// src/pages/Realizations/Realizations.js

import React, { useState, useRef, useEffect, useCallback } from 'react';
import MyTimeline from '../../components/Timeline/Timeline';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { Box, CircularProgress } from '@mui/material';

const Realizations = () => {
    const [timelineItems, setTimelineItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [userSelectedIndex, setUserSelectedIndex] = useState(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const timelineRef = useRef(null);
    const itemRefs = useRef([]);
    const zoomRef = useRef(null); // Create a ref for the zoom plugin

    useEffect(() => {
        fetch('/data/timeline.json')
            .then(response => response.json())
            .then(data => {
                setTimelineItems(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch timeline data:", error);
                setLoading(false);
            });
    }, []);

    const handleScroll = useCallback(() => {
        if (userSelectedIndex !== null) {
            const selectedEl = itemRefs.current[userSelectedIndex];
            if (selectedEl) {
                const rect = selectedEl.getBoundingClientRect();
                if (rect.bottom < 0 || rect.top > window.innerHeight) {
                    setUserSelectedIndex(null);
                } else {
                    return;
                }
            }
        }
        const viewportCenter = window.innerHeight / 2;
        let closestIndex = 0;
        let minDistance = Infinity;
        itemRefs.current.forEach((el, index) => {
            if (el) {
                const rect = el.getBoundingClientRect();
                const elementCenter = rect.top + rect.height / 2;
                const distance = Math.abs(viewportCenter - elementCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            }
        });
        if (activeIndex !== closestIndex) {
            setActiveIndex(closestIndex);
        }
    }, [activeIndex, userSelectedIndex]);

    useEffect(() => {
        let throttleTimeout = null;
        const throttledScrollHandler = () => {
            if (throttleTimeout === null) {
                throttleTimeout = setTimeout(() => {
                    handleScroll();
                    throttleTimeout = null;
                }, 100);
            }
        };
        window.addEventListener('scroll', throttledScrollHandler);
        return () => window.removeEventListener('scroll', throttledScrollHandler);
    }, [handleScroll]);

    useEffect(() => {
        const timer = setTimeout(() => handleScroll(), 200);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timelineItems]);

    const handleGalleryOpen = (images) => {
        if (images && images.length > 0) {
            const formattedImages = images.map(src => ({
                src: `${process.env.PUBLIC_URL}${src}`
            }));
            setGalleryImages(formattedImages);
            setIsGalleryOpen(true);
        }
    };

    const handleGalleryClose = () => setIsGalleryOpen(false);

    const handleCardClick = (index) => {
        setActiveIndex(index);
        setUserSelectedIndex(index);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ pb: { xs: 8, sm: 4 } }}>
            <MyTimeline
                ref={timelineRef}
                itemRefs={itemRefs}
                items={timelineItems}
                activeItemIndex={activeIndex}
                setActiveIndex={handleCardClick}
                onGalleryOpen={handleGalleryOpen}
            />
            <Lightbox
                open={isGalleryOpen}
                close={handleGalleryClose}
                slides={galleryImages}
                plugins={[Thumbnails, Zoom]}
                // === MODIFICATION IS HERE ===
                zoom={{
                    ref: zoomRef,
                    maxZoomPixelRatio: 5
                }}
            />
        </Box>
    );
};

export default Realizations;