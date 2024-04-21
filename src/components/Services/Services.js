import "./Services.css";

function Services() {
    return (
        <div className="container" >
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">Our Services</h2>
                        <p className="display-5 mb-4 mb-md-5 text-center">We deliver what we promise. Explore our premium Services. </p>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <div className="card border-blue">
                        <i className="fas fa-laptop-code fa-3x mb-2"></i>
                        <div className="cardTitle">Web Application Development</div>
                        <div className="container">
                            <p className="cardText">Efficient, innovative web app development bringing your ideas to life with cutting-edge technology and design.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card border-green">
                        <i className="fas fa-brain fa-3x mb-2"></i>
                        <div className=" cardTitle">AI Development</div>
                        <div className="container">
                            <p className="cardText">Harness the power of artificial intelligence to automate processes and make data-driven decisions.</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card border-pink">
                        <i className="fas fa-mobile-alt fa-3x mb-2"></i>
                        <div className=" cardTitle">Mobile App Development</div>
                        <div className="container">
                            <p className="cardText">Create engaging mobile apps for iOS and Android platforms, tailored to your unique requirements.</p>

                        </div>

                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card border-orange">
                        <i className="fas fa-cube fa-3x mb-2"></i>
                        <div className=" cardTitle">Blockchain Development </div>
                        <div className="container">
                            <p className="cardText">We craft secure, decentralized blockchain solutions for diverse industries, ensuring reliable performance and trust in the digital realm.</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card border-purple">
                        <i className="fas fa-graduation-cap fa-3x mb-2"></i>
                        <div className="cardTitle">Content Creation</div>
                        <div className="container">
                            <p className="cardText">Our Content Creation and Designing service crafts engaging content and captivating designs to effectively communicate your brand's message.</p>
                            {/* <span className="learnmore">Learn more <i className="fas fa-arrow-right"></i></span> */}

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card border-red">
                        <i className="fas fa-search fa-3x mb-2"></i>
                        <div className=" cardTitle">Digital Marketing</div>
                        <div className="container">
                            <p className="cardText">
                                Enhance your website's digital presence and boost visibility across search engine results pages with strategic digital marketing tactics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Services;
