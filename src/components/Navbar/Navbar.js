import React, { useState, useEffect } from 'react';

import style from './Navbar.module.css'


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
      <nav className={`${style.customNavbar} navbar 'navbar-expand-lg' ${scrolling ? 'navbar-scroll' : ''}`}>
       {/* baat sun sab se pehly jese agar tu ksi bootstrap component ko custom styling dena chahta tw us ka naam boot
       bootstrap k component class se alag rakh */}
       <link rel="icon" href="%PUBLIC_URL%/Assets/logo/logo-main.png" />

        <img className='navbar-brand' src={'../../../public/Assets/logo/logo-main.png'} height={150} width={200} alt="logo" />
        <div className="container-fluid container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-right" id="navbarNavDropdown">
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
                  {/* <li><a className="dropdown-item" href="/">Graphic Designing</a></li>
                  <li><a className="dropdown-item" href="/">Programming</a></li> */}
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
