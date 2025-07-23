import React, { useState, useEffect, forwardRef } from 'react';
import './NavHeader.css';
import logo from '../../assets/logo.png';
// 1. Import the Link component from react-router-dom
import { Link } from 'react-router-dom';

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
            {/* 2. Change <a> to <Link> and href to to */}
            <Link to="/">
              Apexim BIS <span id="sp">sp. z o.o.</span>
            </Link>
          </div>
          <ul className="nav-links">
            {/* 2. Change all navigation links from <a> to <Link> */}
            {/*<li><Link to="/home">Home</Link></li>*/}
            <li><Link to="/realizations">Realizacje</Link></li>
            <li><Link to="/contact">Kontakt</Link></li>
            <li><Link to="/about">O Firmie</Link></li>
            <li><Link to="/offer">Oferta</Link></li>
            {/* <li><Link to="/feature-demo">Demo Funkcjonalności</Link></li> */}
            <li><Link to="/">Start</Link></li>
          </ul>
        </div>
      </nav>
  );
});

Header.displayName = 'Header';
export default Header;