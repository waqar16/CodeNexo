import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Testimonials from "./components/Testimonials/Testimonials";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import Services from "./components/Services/Services";
import React, { useEffect, useRef } from "react";

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
      threshold: 0.1 // Adjust as needed
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
    <div className="App">
      <div className="bg-image">
        <Navbar />
      </div>
      <div>
        <Home />

      </div>
      <div ref={el => cardRefs.current.push(el)}>
        <Carousel />
      </div>

      <div ref={el => cardRefs.current.push(el)}>
        <Services />
      </div>

      <div ref={el => cardRefs.current.push(el)}>
        <Team />
      </div>
      <div ref={el => cardRefs.current.push(el)}>
        <Contact />
      </div>
      {/* <div>
        <Testimonials />
      </div> */}
      <div>
        <Footer />
      </div>



    </div>

  );
}

export default App;
