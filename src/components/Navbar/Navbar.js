import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // Default active link

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionHeight = section.offsetHeight;
  
      // Calculate when 50% of the section is visible
      const visibleSectionTop = sectionTop - window.innerHeight / 2;
      const visibleSectionBottom = sectionBottom - window.innerHeight / 2;
  
      if (scrollPosition >= visibleSectionTop && scrollPosition < visibleSectionBottom) {
        setActiveLink(section.id);
      }
    });
  
    // Set Home as active when scrolling back to top or at the top of the page
    if (scrollPosition === 0 || scrollPosition < window.innerHeight / 2) {
      setActiveLink('home');
    }
  
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Technologies', id: 'tech' },
    { name: 'Services', id: 'services' },
    { name: 'Team', id: 'team' },
    { name: 'Careers', id: 'careers' },
    { name: 'About', id: 'about' }
  ];

  return (
    <div>
      <nav className={`navbar ${styles.customNavbar} navbar-expand-lg ${scrolling ? styles.navbarScroll : ''}`}>
        <div className="container-fluid">
          
          <img className={`navbar-brand ${styles.navBrand}`} onClick={() => scrollToSection('home')} src={'/Assets/logo/logo-main.png'} height={150} width={200} alt="logo" />
          <button className={`navbar-toggler ${styles.customToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
          <div className={`collapse navbar-collapse float-right ${styles.bgCustom}`} id="navbarNavDropdown">
            <ul className={`navbar-nav nav-alignment ${styles.navbarNav} ${styles.navAlignment}`}>
              {navLinks.map(({ name, id }) => (
                <li className={`nav-item mx-3 ${styles.navItem}`} key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link nav-item-link ${styles.navLink} ${activeLink === id ? styles.navLinkActive : ''}`}
                    onClick={() => scrollToSection(id)}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <button className={`btn ${styles.customBtn}`} onClick={() => scrollToSection('contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
