import styles from "./Contact.module.css"

function Contact() {

    return (
        <section id={`${styles.contactForm}`} className="">
            <div className="container">

                <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">Contact us</h2>
                                <p className="display-5 mb-4 mb-md-5 text-center">Your suggestions our priority. Feel free to send us a message.</p>
                                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 offset-md-2 contact-form-holder mt-4" data-aos="fade-up">
                        <form method="post" name="contact-us" action="">
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <input type="text" className={`form-control ${styles.formControl}`} id="name" name="name" placeholder="Name" />
                                </div>
                                <div className="col-md-6  form-group">
                                    <input type="text" className={`form-control ${styles.formControl}`} id="email" name="email" placeholder="Email" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="number" className={`form-control ${styles.formControl}`} id="phoneNumber" name="phoneNumber" placeholder="Phone" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="text" className={`form-control ${styles.formControl}`} placeholder="Subject" />
                                </div>
                                <div className="col-md-12 form-group">
                                    <textarea className={`form-control ${styles.formControl}`} id="message" name="message" rows="6" placeholder="Your Message ..."></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                    <a className={`btn my-4 ${styles.customBtn}`} href="mailto: sales.codenexo@gmail.com" type="submit" name="submit">Send Message</a>
                                </div>
                            </div>
                        </form>
                    </div>


                <div className="section-content pt-0">
                {/* <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                                <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">Find us</h2>
                                <p className="display-5 mb-4 mb-md-5 text-center">Here is how you can find us</p>
                                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                            </div>
                        </div>
                    </div> */}
                    <div className="row text-center mt-4">
                        <div className="col-md-3" data-aos="fade-up">
                            <i className={`fas fa-map-marker-alt icon-large my-5 ${styles.iconLarge}`} style={{ color: '#007bff' }}></i>
                            <h5>LOCATION</h5>
                            <p>Karachi</p>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
                            <i className={`fas fa-clock icon-large my-5 ${styles.iconLarge}`} style={{ color: '#28a745' }}></i>
                            <h5>WORKING TIME</h5>
                            <p>Monday - Friday</p>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
                            <i className={`fas fa-phone icon-large my-5 ${styles.iconLarge}`} style={{ color: '#ffc107' }}></i>
                            <h5>CALL US</h5>
                            <p>+92 316 2309308</p>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="600">
                            <i className={`fas fa-envelope icon-large my-5 ${styles.iconLarge}`} style={{ color: '#dc3545' }}></i>
                            <h5>EMAIL</h5>
                            <p>sales.codenexo@gmail.com</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact