// src/components/Timeline/TimelineCardMedia.jsx

import React, {useEffect, useMemo, useState} from 'react';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FaSearchPlus } from 'react-icons/fa';
import "./Timeline.css";

const TimelineCardMedia = ({ coverImage, galleryImages, coverType, onGalleryOpen, onGalleryClose }) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const hasGallery = galleryImages && galleryImages.length > 0;

    const handleImageClick = (event) => {
        if (!hasGallery) return;
        event.stopPropagation();
        setIsLightboxOpen(true);
    };

    const slides = useMemo(() => {
        return  hasGallery ? galleryImages.map(url => ({ src: url })) : [];
    }, [galleryImages, hasGallery]);

    const wrapperClasses = [
        'timeline-media-wrapper',
        coverType === 'logo' ? 'is-logo' : '',
        !hasGallery ? 'not-clickable' : ''
    ].join(' ').trim();

    return (
        <>
            <div className={wrapperClasses} onClick={handleImageClick}>
                {coverType === 'logo' ? (
                    <div className="logo-image-container">
                        <img src={coverImage} alt="Realization cover" className="timeline-cover-image" />
                    </div>
                ) : (
                    <img src={coverImage} alt="Realization cover" className="timeline-cover-image" />
                )}

                {hasGallery && (
                    <div className="hover-overlay">
                        <FaSearchPlus size={40} />
                    </div>
                )}
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