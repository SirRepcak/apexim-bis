// Slider.jsx
import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './Slider.css';

const Slider = ({ onSlideChange }) => {
  const splideRef = useRef(null);

  const slides = [
    { content: "Red Slide", background: "#ffadad", color: "#222" },
    { content: "Orange Slide", background: "#ffd6a5", color: "#222" },
    { content: "Green Slide", background: "#caffbf", color: "#222" },
    { content: "Blue Slide", background: "#9bf6ff", color: "#222" }
  ];

  const handleSlideMove = (splide, newIndex) => {
    if (onSlideChange) {
      onSlideChange(newIndex);
    }
  };

  // Touch event handling for mobile
  useEffect(() => {
    const splideElement = splideRef.current?.splide?.root;
    if (!splideElement) return;

    let touchStartY = null;
    let lastTouchTime = 0;

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e) => {
      const now = Date.now();
      if (touchStartY !== null && e.changedTouches.length === 1) {
        const touchEndY = e.changedTouches[0].clientY;
        const splideInstance = splideRef.current?.splide;

        if (now - lastTouchTime < 400) {
          touchStartY = null;
          e.preventDefault();
          return;
        }
        lastTouchTime = now;

        if (touchEndY - touchStartY > 30 && splideInstance?.index === 0) {
          touchStartY = null;
          return;
        }

        if (touchStartY - touchEndY > 30 && splideInstance?.index === splideInstance?.length - 1) {
          touchStartY = null;
          return;
        }

        e.preventDefault();
      }
      touchStartY = null;
    };

    splideElement.addEventListener('touchstart', handleTouchStart);
    splideElement.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      splideElement.removeEventListener('touchstart', handleTouchStart);
      splideElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="slider-container">
      <Splide
        ref={splideRef}
        options={{
          type: 'slide',
          height: '100vh',
          autoHeight: true,
          direction: 'ttb',
          wheel: true,
          arrows: false,
          pagination: true,
          perPage: 1,
          releaseWheel: true,
          speed: 1200,
        }}
        onMove={handleSlideMove}
        id="vertical-splide"
      >
        {slides.map((slide, index) => (
          <SplideSlide
            key={index}
            style={{
              background: slide.background,
              color: slide.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2em',
              height: '100vh',
              minHeight: '100vh'
            }}
          >
            {slide.content}
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Slider;
