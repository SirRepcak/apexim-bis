// src/pages/realizations/Realizations.jsx

import './Realizations.css';
import React, { useState, useRef } from 'react';
import Header from '../../components/NavHeader/NavHeader';
import Footer from '../../components/NavFooter/NavFooter';
import MyTimeline from '../../components/Timeline/Timeline';

const Realizations = () => {
    // This state is now ONLY controlled by clicking.
    // We start at `null` so no card is active on load.
    const [activeIndex, setActiveIndex] = useState(null);

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const timelineRef = useRef(null);

    const handleGalleryOpen = () => setIsGalleryOpen(true);
    const handleGalleryClose = () => setIsGalleryOpen(false);

    // NOTE: All complex useEffect hooks for observing have been DELETED.

    // The ONLY handler we need is the one that sets the active index on click.
    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="app">
            <Header className={isGalleryOpen ? 'header--hidden' : ''} />
            <MyTimeline
                ref={timelineRef}
                // This prop tells Chrono which item to scroll to.
                activeItemIndex={activeIndex}
                // We pass the simple click handler down.
                setActiveIndex={handleCardClick}
                onGalleryOpen={handleGalleryOpen}
                onGalleryClose={handleGalleryClose}
            />
            <Footer />
        </div>
    );
};

export default Realizations;