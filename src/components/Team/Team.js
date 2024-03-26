import React, { useEffect, useRef } from "react";
import "./Team.css";

function Team() {
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5 // Adjust as needed
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
        <>
            <div className=" team-section container py-5">
                <div className="row text-center">
                    <h2 className="contact-head">Our Team</h2>

                    <div className="col-xl-3 col-sm-6 mb-5" ref={el => cardRefs.current.push(el)}>
                        <div className="bg-white rounded shadow-sm py-5 px-4">
                            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Manuella Nevoresky</h5>
                            <span className="small text-uppercase text-muted">CEO - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5" ref={el => cardRefs.current.push(el)}>
                        <div className="bg-white rounded shadow-sm py-5 px-4">
                            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Manuella Nevoresky</h5>
                            <span className="small text-uppercase text-muted">CEO - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5" ref={el => cardRefs.current.push(el)}>
                        <div className="bg-white rounded shadow-sm py-5 px-4">
                            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Manuella Nevoresky</h5>
                            <span className="small text-uppercase text-muted">CEO - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5" ref={el => cardRefs.current.push(el)}>
                        <div className="bg-white rounded shadow-sm py-5 px-4">
                            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Manuella Nevoresky</h5>
                            <span className="small text-uppercase text-muted">CEO - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Add more team members */}
                </div>
            </div>
        </>
    );
}

export default Team;
