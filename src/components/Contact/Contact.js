import "./Contact.css"

function Contact() {

    return (
        <section id="contact-form" className="bg-white">
            <div className="container">
                <div className="section-content">
                    <div className="title-wrap" data-aos="fade-up">
                        <h2 className="contact-head">Contact Us</h2>
                    </div>
                    <div className="col-md-8 offset-md-2 contact-form-holder mt-4" data-aos="fade-up">
                        <form method="post" name="contact-us" action="">
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                                </div>
                                <div className="col-md-6  form-group">
                                    <input type="text" className="form-control" id="email" name="email" placeholder="Email" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="Phone" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <textarea className="form-control" id="message" name="message" rows="6" placeholder="Your Message ..."></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                    <button className="btn  custom-btn-contact my-4" type="submit" name="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="section-content pt-0">
                    <div className="title-wrap" data-aos="fade-up">
                        <h2 className="contact-head my-5">Where To Find Us?</h2>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-md-3" data-aos="fade-up">
                            <i className="fas fa-map-marker-alt icon-large my-3" style={{ color: '#007bff' }}></i>
                            <h5>LOCATION</h5>
                            <p>Yogyakarta</p>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
                            <i className="fas fa-clock icon-large my-3" style={{ color: '#28a745' }}></i>
                            <h5>WORKING TIME</h5>
                            <p>Monday - Saturday</p>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
                            <i className="fas fa-phone icon-large my-3" style={{ color: '#ffc107' }}></i>
                            <h5>CALL US</h5>
                            <p>123-45678</p>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="600">
                            <i className="fas fa-envelope icon-large my-3" style={{ color: '#dc3545' }}></i>
                            <h5>EMAIL</h5>
                            <p>company@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact