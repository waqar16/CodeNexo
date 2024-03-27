import "./Services.css";

function Services() {
    return (
        <div className="container py-5" >
            <h2 className="contact-head">Services We are providing</h2>
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
                            <p className="cardText">Secure and decentralized applications using blockchain technology for various use cases.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card border-purple">
                        <i className="fas fa-graduation-cap fa-3x mb-2"></i>
                        <div className="cardTitle">Training Courses</div>
                        <div className="container">
                            <p className="cardText">Specialized training courses designed to enhance your skills and knowledge in specific areas of technology.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="card border-red">
                        <i className="fas fa-search fa-3x mb-2"></i>
                        <div className=" cardTitle">Search Engine Optimization</div>
                        <div className="container">
                            <p className="cardText">Improve your website's visibility and ranking on search engine results pages through effective SEO strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
    
}

export default Services;
