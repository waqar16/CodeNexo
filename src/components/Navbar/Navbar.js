import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

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
      <nav className={`navbar ${styles.customNavbar} navbar-expand-lg ${scrolling ? styles.navbarScroll : ''}`}>


        <div className="container-fluid">
        <img className={`navbar-brand ${styles.navBrand}`} src={'/Assets/logo/logo-main.png'} height={150} width={200} alt="logo" />
        <button className={`navbar-toggler ${styles.customToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">     
        
             <i className="fas fa-bars"></i>
          </button>


          <div className={`collapse navbar-collapse float-right ${styles.bgCustom}`} id="navbarNavDropdown">


            <ul className={`navbar-nav nav-alignment ${styles.navbarNav} ${styles.navAlignment}`}>
              <li className={`nav-item mx-3 ${styles.navItem}`}>




                <a className={`nav-link nav-item-link ${styles.navLink} ${styles.navLinkActive} ${styles.navItemLink}`} aria-current="page" href="#home">Home</a>
              </li>


              <li className={`nav-item mx-3 ${styles.navItem}`}>
                <a className={`nav-link nav-item-link ${styles.navLink} ${styles.navItemLink}`} href="#blog">Services</a>
              </li>
              <li className={`nav-item mx-3 ${styles.navItem}`}>
                <a className={`nav-link nav-item-link ${styles.navLink} ${styles.navItemLink}`} href="/">Portfolio</a>
              </li>
              <li className={`nav-item dropdown mx-3 ${styles.navItem} ${styles.dropdown}`}>
                <a className={`nav-link dropdown-toggle nav-item-link  ${styles.customDropdown} ${styles.navLink} ${styles.navItemLink}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>


                <ul className={`dropdown-menu custom-dropdown ${styles.customDropdown}`}>
                  <li><a className={`dropdown-item ${styles.dropdownItem}`} href="/">Rei Shark</a></li>
                </ul>
              </li>



              <li className={`nav-item mx-3 ${styles.navItem}`}>
              <a className={`nav-link nav-item-link ${styles.navLink} ${styles.navItemLink}`} href="/">Careers</a>
              </li>
              <li className={`nav-item mx-3 ${styles.navItem}`}>
              <a className={`nav-link nav-item-link ${styles.navLink} ${styles.navItemLink}`} href="/">Insights</a>
              </li>
              <li className={`nav-item mx-3 ${styles.navItem}`}>
              <a className={`nav-link nav-item-link ${styles.navLink} ${styles.navItemLink}`} href="/">About</a>
              </li>

              <li className={`nav-item mx-3 ${styles.navItem}`}>
                <a type="button" className={`btn ${styles.mxCustom} ${styles.customBtn}`}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;