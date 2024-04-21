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
            <div className="my-5">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">Our Technologies</h2>
                            <p className="display-5 mb-4 mb-md-5 text-center">We are masters of following technologies</p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>
                <div className="slider ">
                    <div className="slide-track" ref={slideTrackRef}>
                        <div className="slide">
                            <img src="/Assets/Technologies/django.png" height="150" width="350" alt="" />
                        </div>
                        <div className="slide">
                            <img src="/Assets/Technologies/react.png" height="130" width="330" alt="" />
                        </div>
                        <div className="slide">
                            <img src="/Assets/Technologies/mongodb.png" height="160" width="370" alt="" />
                        </div>
                        <div className="slide">
                            <img src="/Assets/Technologies/flask.png" height="150" width="350" alt="" />
                        </div>
                        <div className="slide">
                            <img src="/Assets/Technologies/sql.png" height="130" width="350" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;
