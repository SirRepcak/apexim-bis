import React, { useState, useRef, useEffect, useCallback } from 'react';
import MyTimeline from '../../components/Timeline/Timeline';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Box } from '@mui/material';

const Realizations = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [userSelectedIndex, setUserSelectedIndex] = useState(null);

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const timelineRef = useRef(null);
    const itemRefs = useRef([]);

    // MODIFICATION 1: Moved the scroll logic into a useCallback hook
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

    // This effect attaches the scroll listener
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

    // MODIFICATION 2: This new effect runs the scroll check on initial load
    useEffect(() => {
        // Run once on mount after a short delay to allow the DOM to settle.
        const timer = setTimeout(() => {
            handleScroll();
        }, 200); // 200ms delay

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this runs only once

    const handleGalleryOpen = (images) => {
        if (images && images.length > 0) {
            setGalleryImages(images.map(src => ({ src })));
            setIsGalleryOpen(true);
        }
    };

    const handleGalleryClose = () => setIsGalleryOpen(false);

    const handleCardClick = (index) => {
        setActiveIndex(index);
        setUserSelectedIndex(index);
    };

    return (
        <Box sx={{ pb: { xs: 8, sm: 4 } }}>
            <MyTimeline
                ref={timelineRef}
                itemRefs={itemRefs}
                activeItemIndex={activeIndex}
                setActiveIndex={handleCardClick}
                onGalleryOpen={handleGalleryOpen}
            />
            <Lightbox
                open={isGalleryOpen}
                close={handleGalleryClose}
                slides={galleryImages}
                plugins={[Thumbnails]}
            />
        </Box>
    );
};

export default Realizations;