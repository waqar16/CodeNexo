import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${scrolling ? 'navbar-scroll' : ''}`}>
        <div className="container-fluid">
        <img className='navbar-brand' src={'/Assets/logo/logo-main.png'} height={150} width={200} alt="logo" />
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse float-right bg-custom" id="navbarNavDropdown">
            <ul className="navbar-nav nav-alignment">
              <li className="nav-item mx-3">
                <a className="nav-link active nav-item-link" aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link nav-item-link" href="#blog">Services</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link nav-item-link" href="/">Portfolio</a>
              </li>
              <li className="nav-item dropdown  mx-3">
                <a className="nav-link dropdown-toggle nav-item-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li><a className="dropdown-item" href="/">Rei Shark</a></li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link nav-item-link" href="#blog">Careers</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link  nav-item-link" href="/">Insights</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link nav-item-link" href="/">About</a>
              </li>
              <li className="nav-item mx-3">
                <button type="button" className="btn custom-btn-light mx-custom">Contact Us</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
