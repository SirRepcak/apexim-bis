import React, { useState, useRef } from 'react';
import Header from '../../components/NavHeader/NavHeader';
import Footer from '../../components/NavFooter/NavFooter';
import Slider from '../../components/verticalSlider/Slider';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const headerRef = useRef(null);

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
    const headerEl = headerRef.current;
    if (headerEl) {
      if (newIndex > 0) headerEl.classList.add('sticky');
      else if (window.scrollY <= 20) headerEl.classList.remove('sticky');
    }
  };

  return (
    <div className="app">
      <Header ref={headerRef} />
      <main className="main-content">
        <Slider onSlideChange={handleSlideChange} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
