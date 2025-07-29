// src/components/Timeline/Timeline.jsx

import React from 'react';
import { Chrono } from "react-chrono";
import "./Timeline.css";
import TimelineCardMedia from './TimelineCardMedia';
import { items } from './TimelineData';

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
                    cardBgColor: "#ffffff",
                    cardForeColor: "#000000",
                    // The title background turns blue when active
                    secondary: "#68c3e4",
                    // The title text turns white when active
                    titleColorActive: "#ffffff",
                }}
                scrollable={{ scrollbar: false }}
            >
                {items.map((item, index) => (
                    // === CHANGE 1: The entire card is now a single click target for snapping ===
                    <div className="custom-card-content" key={index} onClick={() => setActiveIndex(index)}>
                        <TimelineCardMedia
                            // No need to pass index or setActiveIndex down anymore for this part
                            galleryImages={item.galleryImages}
                            coverImage={item.cover}
                            coverType = {item.coverType}
                            onGalleryOpen={onGalleryOpen}
                            onGalleryClose={onGalleryClose}
                        />
                        <div className="custom-card-text">
                            <h3>
                                {item.cardTitle}
                            </h3>
                            <p>{item.cardSubtitle}</p>
                        </div>
                    </div>
                ))}
            </Chrono>
        </div>
    );
});

export default MyTimeline;