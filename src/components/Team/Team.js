import "./Team.css";

function Team() {


    return (
        <>
            <div className=" team-section container">
                <div className="row text-center">

                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">Our Team</h2>
                                <p className="display-5 mb-4 mb-md-5 text-center">Meet our team of experts.</p>
                                {/* <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4 border">
                            <img src="assets/Team/mubashir.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Mubashir Babar</h5>
                            <span className="small text-uppercase text-muted">Team Lead</span>
                            <ul className="social mb-0 list-inline mt-3">
                            <li className="list-inline-item"><a href="mailto:mubashirbabar10@gmail.com" className="social-link"><i className="fas fa-envelope"></i></a></li>
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-github"></i></a></li> */}
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/mubashir-babar/" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5" >
                        <div className="bg-white rounded shadow-sm py-5 px-4 border">
                            <img src="assets/Team/hamza.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">M Hamza Khan</h5>
                            <span className="small text-uppercase text-muted">Co - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="mailto:hamzaekhan99@gmail.com" className="social-link"><i className="fas fa-envelope"></i></a></li>
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-github"></i></a></li> */}
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/muhammad-hamza-khan-328483223/" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4 border">
                            <img src="assets/Team/waqar.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Waqar Khan</h5>    
                            <span className="small text-uppercase text-muted">Full Stack Developer</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="mailto: wa4752928@gmail.com" className="social-link"><i className="fas fa-envelope"></i></a></li>
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-github"></i></a></li> */}
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/waqar-khan-692849178/" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4 border">
                            <img src="assets/Team/amir.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Amir Ejaz</h5>
                            <span className="small text-uppercase text-muted">AI Engineer</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fas fa-envelope"></i></a></li>
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-github"></i></a></li> */}
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/amir-aijaz-01a134233/" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4 border">
                            <img src="assets/Team/saim.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Saim Shehzad</h5>
                            <span className="small text-uppercase text-muted">Mern Stack Developer</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fas fa-envelope"></i></a></li>
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-github"></i></a></li> */}
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/saim-shahzad-476bba25b/" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
