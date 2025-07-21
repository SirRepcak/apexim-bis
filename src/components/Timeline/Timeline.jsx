import React from 'react';
import { Chrono } from "react-chrono";
import "./Timeline.css";
import TimelineCardMedia from './TimelineCardMedia';
import { items } from './TimelineData'; // We'll move the data to a separate file for cleanliness

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
          titleColorActive: "#0591c6",
          primary: "#0591c6",
          secondary: "white",
          cardBgColor: "white",
          cardForeColor: "black",
        }}
        scrollable={{ scrollbar: false }}
      >
        {items.map((item, index) => (
          <div className="custom-card-content" key={index}>
            <TimelineCardMedia
              index={index}
              activeIndex={activeItemIndex}
              setActiveIndex={setActiveIndex}
              galleryImages={item.galleryImages}
              coverImage={item.cover}
              onGalleryOpen={onGalleryOpen}
              onGalleryClose={onGalleryClose}
            />
            <div className="custom-card-text">
              <h3>{item.cardTitle}</h3>
              <p>{item.cardSubtitle}</p>
            </div>
          </div>
        ))}
      </Chrono>
    </div >
  );
});

export default MyTimeline;