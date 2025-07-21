// src/pages/realizations/Realizations.js

import './Realizations.css';
import React, { useState, useRef, useEffect } from 'react';
import Header from '../../components/NavHeader/NavHeader';
import Footer from '../../components/NavFooter/NavFooter';
import MyTimeline from '../../components/Timeline/Timeline';
import { items as timelineItems } from '../../components/Timeline/TimelineData';

const Realizations = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // State for gallery visibility is correctly declared.
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Refs are all correctly declared.
  const timelineRef = useRef(null);
  const topBoundaryRef = useRef(null);
  const bottomBoundaryRef = useRef(null);
  const cardElementsRef = useRef([]);
  const isScrollingRef = useRef(false);
  const userScrollTimeoutRef = useRef(null);

  // --- 1. RESTORED HANDLER FUNCTIONS ---
  const handleGalleryOpen = () => {
    setIsGalleryOpen(true);
  };
  // This function was missing.
  const handleGalleryClose = () => {
    setIsGalleryOpen(false);
  };

  // --- EFFECT 1: Set up the Intersection Observer (with Guard Clause) ---
  useEffect(() => {
    const timer = setTimeout(() => {
      const timelineEl = timelineRef.current;
      const topBoundaryEl = topBoundaryRef.current;
      const bottomBoundaryEl = bottomBoundaryRef.current;
      if (!timelineEl || !topBoundaryEl || !bottomBoundaryEl) return;
      const elements = timelineEl.querySelectorAll('[aria-label="Timeline point"]');
      cardElementsRef.current = Array.from(elements).map(el => el.closest('li'));
      if (cardElementsRef.current.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          // **CRUCIAL FIX:** If the gallery is open, do nothing.
          if (isGalleryOpen) return;
          if (isScrollingRef.current || !userScrollTimeoutRef.current) return;

          const intersectingCardEntry = entries.find(entry =>
            entry.isIntersecting && cardElementsRef.current.includes(entry.target)
          );
          if (intersectingCardEntry) {
            const newIndex = cardElementsRef.current.indexOf(intersectingCardEntry.target);
            if (newIndex > -1 && newIndex !== activeIndex) setActiveIndex(newIndex);
            return;
          }
          const topBoundaryVisible = entries.find(e => e.target === topBoundaryEl)?.isIntersecting;
          if (topBoundaryVisible) {
            if (activeIndex !== 0) setActiveIndex(0);
            return;
          }
          const bottomBoundaryVisible = entries.find(e => e.target === bottomBoundaryEl)?.isIntersecting;
          if (bottomBoundaryVisible) {
            const lastIndex = timelineItems.length - 1;
            if (activeIndex !== lastIndex) setActiveIndex(lastIndex);
            return;
          }
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0.5 }
      );
      observer.observe(topBoundaryEl);
      observer.observe(bottomBoundaryEl);
      cardElementsRef.current.forEach(card => {
        if (card) observer.observe(card);
      });
      return () => observer.disconnect();
    }, 200);
    return () => clearTimeout(timer);
    // **CRUCIAL FIX:** Add `isGalleryOpen` to the dependency array.
  }, [isGalleryOpen, activeIndex]);

  // --- EFFECT 2: The Manual Scroll Controller (with Guard Clause) ---
  useEffect(() => {
    // **CRUCIAL FIX:** If the gallery is open, do not snap the scroll.
    if (isGalleryOpen) return;

    const targetElement = cardElementsRef.current[activeIndex];
    if (targetElement) {
      isScrollingRef.current = true;
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
      // Use a longer timeout to allow smooth scroll to finish
      setTimeout(() => { isScrollingRef.current = false; }, 500);
    }
    // **CRUCIAL FIX:** Add `isGalleryOpen` to the dependency array.
  }, [activeIndex, isGalleryOpen]);

  // --- EFFECT 3: Detect when the user stops scrolling (no changes needed) ---
  useEffect(() => {
    const handleUserScroll = () => {
      if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);
      userScrollTimeoutRef.current = setTimeout(() => { userScrollTimeoutRef.current = null; }, 150);
    };
    window.addEventListener('scroll', handleUserScroll);
    return () => {
      window.removeEventListener('scroll', handleUserScroll);
      if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);
    };
  }, []);

  return (
    <div className="app">
      {/* This part correctly uses the state to hide the header */}
      <Header className={isGalleryOpen ? 'header--hidden' : ''} />
      <div className="main">
        <div ref={topBoundaryRef} className="scroll-boundary" />
        {/* --- 2. RESTORED PROP PASSING --- */}
        <MyTimeline
          ref={timelineRef}
          activeItemIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onGalleryOpen={handleGalleryOpen}
          onGalleryClose={handleGalleryClose}
        />
        <div ref={bottomBoundaryRef} className="scroll-boundary" />
      </div>
      <Footer />
    </div>
  );
};

export default Realizations;