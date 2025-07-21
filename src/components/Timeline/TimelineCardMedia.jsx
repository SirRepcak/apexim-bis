import React, { useRef } from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import "./Timeline.css";

const TimelineCardMedia = ({ index, activeIndex, setActiveIndex, coverImage, galleryImages, onGalleryOpen, onGalleryClose }) => {
  const lightGallery = useRef(null);

  const onInit = (detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
    }
  };

  const handleImageClick = (event) => {
    // Prevent the click from bubbling up to any other elements.
    event.stopPropagation();

    if (index !== activeIndex) {
      // FIRST CLICK on a non-active card:
      // Just set this card as active. The gallery will NOT open.
      // The parent's useEffect will handle snapping the card into view.
      setActiveIndex(index);
    } else {
      // SECOND (or subsequent) CLICK on an already active card:
      // Now, we open the gallery.
      if (lightGallery.current) {
        lightGallery.current.openGallery(0);
      }
    }
  };

  return (
    <div className="timeline-media-wrapper" onClick={handleImageClick}>
      <img
        src={coverImage}
        alt="Realization cover"
        className="timeline-cover-image"
      />
      <div style={{ display: 'none' }}>
        <LightGallery onInit={onInit} plugins={[lgThumbnail, lgZoom]}
          speed={500}
          onAfterOpen={onGalleryOpen}
          onBeforeClose={onGalleryClose}>
          {galleryImages.map((image, idx) => (
            <a href={image} key={idx}>
              <img src={image} alt={`Gallery item ${idx + 1}`} />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default TimelineCardMedia;