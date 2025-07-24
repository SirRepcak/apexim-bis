// src/components/Timeline/TimelineCardMedia.jsx

import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaSearchPlus } from 'react-icons/fa'; // Import an icon for the hint
import "./Timeline.css";

const TimelineCardMedia = ({ coverImage, galleryImages, onGalleryOpen, onGalleryClose }) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // This click handler is ONLY for the image.
    const handleImageClick = (event) => {
        // === CRITICAL: This stops the click from "bubbling up" to the parent div ===
        // This way, clicking the image opens the gallery BUT DOES NOT trigger the snap.
        event.stopPropagation();
        setIsLightboxOpen(true);
    };

    const slides = galleryImages.map(url => ({ src: url }));

    return (
        <>
            {/* The wrapper is now the click target for opening the gallery */}
            <div className="timeline-media-wrapper" onClick={handleImageClick}>
                <img src={coverImage} alt="Realization cover" className="timeline-cover-image" />

                {/* === NEW: This is the hover hint overlay === */}
                <div className="hover-overlay">
                    <FaSearchPlus size={40} />
                </div>
            </div>

            <Lightbox
                open={isLightboxOpen}
                close={() => setIsLightboxOpen(false)}
                slides={slides}
                plugins={[Thumbnails, Zoom]}
                on={{ enter: onGalleryOpen, exit: onGalleryClose }}
            />
        </>
    );
};

export default TimelineCardMedia;