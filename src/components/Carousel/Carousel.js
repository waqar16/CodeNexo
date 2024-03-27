import React, { useEffect, useRef } from "react";
import "./Carousel.css";

function Carousel() {
    const slideTrackRef = useRef(null);

    useEffect(() => {
        const slideTrack = slideTrackRef.current;

        // Clone the original slides to create infinite scrolling effect
        const originalSlides = slideTrack.querySelectorAll(".slide");
        originalSlides.forEach((slide) => {
            const cloneSlide = slide.cloneNode(true);
            slideTrack.appendChild(cloneSlide);
        });

        // Set the width of the slide track to accommodate the cloned slides
        const totalSlides = slideTrack.querySelectorAll(".slide").length;
        slideTrack.style.width = `${totalSlides * 250}px`; // Assuming each slide has a width of 250px
    }, []);

    return (
        <>
        <div className="container custom-margin">
            <h2 className="contact-head">Technological Experties</h2>
            <div className="slider">
                <div className="slide-track" ref={slideTrackRef}>
                    <div className="slide">
                        <img src="Assets/technologies/django.png" height="150" width="350" alt="" />
                    </div>
                    <div className="slide">
                        <img src="Assets/technologies/react.png" height="130" width="330" alt="" />
                    </div>
                    <div className="slide">
                        <img src="Assets/technologies/mongodb.png" height="160" width="370" alt="" />
                    </div>
                    <div className="slide">
                        <img src="Assets/technologies/flask.png" height="150" width="350" alt="" />
                    </div>
                    <div className="slide">
                        <img src="Assets/technologies/sql.png" height="130" width="350" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Carousel;
