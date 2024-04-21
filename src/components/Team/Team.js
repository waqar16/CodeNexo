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
                                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4 border">
                            <img src="https://media.licdn.com/dms/image/D5603AQGxYk3Thr7-Qw/profile-displayphoto-shrink_800_800/0/1700244417494?e=1718841600&v=beta&t=g8WI1o6U-06EyC5KRUiHyh3ffrNHV6HKvFSQt0FqsvE" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Mubashir Babar</h5>
                            <span className="small text-uppercase text-muted">CEO - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                            <li className="list-inline-item"><a href="mailto:mubashirbabar10@gmail.com" className="social-link"><i className="fas fa-envelope"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-github"></i></a></li>
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/mubashir-babar/" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5" >
                        <div className="bg-white rounded shadow-sm py-5 px-4 border">
                            <img src="https://media.licdn.com/dms/image/C5603AQGBo3KMTdxSdw/profile-displayphoto-shrink_800_800/0/1634062893925?e=1718841600&v=beta&t=GjJolPBWf8l3iYLhFqqLxIutIQUu5GL7iiZuzyaxwwk" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">M Hamza Khan</h5>
                            <span className="small text-uppercase text-muted">Co - Founder</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="mailto:hamzaekhan99@gmail.com" className="social-link"><i className="fas fa-envelope"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-github"></i></a></li>
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/muhammad-hamza-khan-328483223/" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4 border">
                            <img src="https://media.licdn.com/dms/image/D4D03AQFMW62fiOYGgw/profile-displayphoto-shrink_800_800/0/1707660203143?e=1718841600&v=beta&t=ekkMuc6BigXijmkCNHMtKCdlvZ-OfsI2kf0OvOqR4e4" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Waqar Khan</h5>
                            <span className="small text-uppercase text-muted">Web Developer</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="mailto: wa4752928@gmail.com" className="social-link"><i className="fas fa-envelope"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-github"></i></a></li>
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 mb-5">
                        <div className="bg-white rounded shadow-sm py-5 px-4 border">
                            <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                            <h5 className="mb-0">Taimur Riaz</h5>
                            <span className="small text-uppercase text-muted">Sales Executive</span>
                            <ul className="social mb-0 list-inline mt-3">
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fas fa-envelope"></i></a></li>
                                <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-github"></i></a></li>
                                {/* <li className="list-inline-item"><a href="#" className="social-link"><i className="fab fa-instagram"></i></a></li> */}
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/taimur-riaz-395119147/" className="social-link"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
