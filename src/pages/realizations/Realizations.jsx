// src/pages/realizations/Realizations.jsx

import React, { useState, useRef } from 'react';
import MyTimeline from '../../components/Timeline/Timeline';

// KROK 1: Import komponentu Lightbox i jego stylów
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// KROK 2: Import wtyczki Thumbnails oraz jej stylów
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const Realizations = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);
    const timelineRef = useRef(null);

    const handleGalleryOpen = (images) => {
        if (images && images.length > 0) {
            setGalleryImages(images.map(src => ({ src })));
            setIsGalleryOpen(true);
        }
    };

    const handleGalleryClose = () => setIsGalleryOpen(false);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <MyTimeline
                ref={timelineRef}
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
        </>
    );
};

export default Realizations;