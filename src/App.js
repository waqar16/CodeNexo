import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import Testimonials from "./components/Testimonials/Testimonials";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import Services from "./components/Services/Services";
import About from "./components/About/About"
import Careers from "./components/Careers/Careers"


import React, { useEffect, useRef } from "react";
// import { Router } from "react-router-dom";

function App() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          entry.target.classList.add('animate-slide-in-2');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    cardRefs.current.forEach(cardRef => {
      observer.observe(cardRef);
    });

    return () => {
      cardRefs.current.forEach(cardRef => {
        observer.unobserve(cardRef);
      });
    };
  }, []);

  
  
  return (
    
    <section className="App">
      <header className="App-header">

      <section>
        <Navbar />
      </section>

      <section id="home">
        <Home />
      </section>

      <section id="tech" ref={el => cardRefs.current.push(el)}>
        <Carousel />
      </section>

      <section id="services" ref={el => cardRefs.current.push(el)}>
        <Services />
      </section>

      <section id="team" ref={el => cardRefs.current.push(el)}>
        <Team />
      </section>



      {/* <section ref={el => cardRefs.current.push(el)}>
        <Testimonials />
      </section> */}

      <section id="careers" ref={el => cardRefs.current.push(el)}>
        <Careers />
      </section>

      <section id="about" ref={el => cardRefs.current.push(el)}>
        <About />
      </section>

      <section id="contact" ref={el => cardRefs.current.push(el)}>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>

      </header>
    </section>
 

  );
}

export default App;
