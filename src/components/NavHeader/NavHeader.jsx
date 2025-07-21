// Header.jsx
import React, { useState, useEffect, forwardRef } from 'react';
import './NavHeader.css';
import logo from '../../assets/logo.png';


const Header = forwardRef((props, ref) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={ref} className={`header ${isSticky ? 'sticky' : ''} ${props.className || ''}`}>
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="Logo" id="logo-img" />
          <a href="/">
            Apexim BIS <span id="sp">sp. z o.o.</span>
          </a>
        </div>
        <ul className="nav-links">
          {/*<li><a href="/home">Home</a></li>*/}
          <li><a href="/realizations">Realizacje</a></li>
          <li><a href="/contact">Kontakt</a></li>
          <li><a href="/about">O Firmie</a></li>
          <li><a href="/offer">Oferta</a></li>
          {/* <li><a href="/feature-demo">Demo Funkcjonalności</a></li> */}
          <li><a href="/">Start</a></li>
        </ul>
      </div>
    </nav>
  );
});

Header.displayName = 'Header';
export default Header;
