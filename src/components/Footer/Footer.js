import React from 'react'
import "./Footer.css"


function Footer() {
    const scrollToCareers = (event) => {
        event.preventDefault();
        const careersSection = document.getElementById("careers");
        if (careersSection) {
          window.scrollTo({
            top: careersSection.offsetTop,
            behavior: "smooth"
          });
        }
      };
    
      const scrollToServices = (event) => {
        event.preventDefault();
        const careersSection = document.getElementById("services");
        if (careersSection) {
          window.scrollTo({
            top: careersSection.offsetTop,
            behavior: "smooth"
          });
        }
      };
    
      const scrollToHome = (event) => {
        event.preventDefault();
        const careersSection = document.getElementById("home");
        if (careersSection) {
          window.scrollTo({
            top: careersSection.offsetTop,
            behavior: "smooth"
          });
        }
      };
    
      const scrollToTech = (event) => {
        event.preventDefault();
        const careersSection = document.getElementById("tech");
        if (careersSection) {
          window.scrollTo({
            top: careersSection.offsetTop,
            behavior: "smooth"
          });
        }
      };
    
      const scrollToTeam = (event) => {
        event.preventDefault();
        const careersSection = document.getElementById("team");
        if (careersSection) {
          window.scrollTo({
            top: careersSection.offsetTop,
            behavior: "smooth"
          });
        }
      };
    
      const scrollToContact = (event) => {
        event.preventDefault();
        const careersSection = document.getElementById("contact");
        if (careersSection) {
          window.scrollTo({
            top: careersSection.offsetTop,
            behavior: "smooth"
          });
        }
      };
    
      const scrollToAbout = (event) => {
        event.preventDefault();
        const careersSection = document.getElementById("about");
        if (careersSection) {
          window.scrollTo({
            top: careersSection.offsetTop,
            behavior: "smooth"
          });
        }
      };
  return (
<div>
<footer className="footer-section">
        <div className="container">
            {/* <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src="/Assets/logo/logo-main.png" className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>CodeNexo! Your premier destination for innovative software solutions. We specialize in custom development, web and mobile apps, and cloud solutions. With a dedicated team of experts, we empower businesses to thrive in the digital landscape.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Let's Connect</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="mailto: sales.codenexo@gmail.com"><i className="fas fa-envelope envelope-bg"></i></a>
                                <a href="https://www.linkedin.com/company/codenexo/"><i className="fab fa-linkedin-in linkedin-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a onClick={scrollToHome} href="#">Home</a></li>
                                <li><a onClick={scrollToAbout} href="#">about</a></li>
                                <li><a onClick={scrollToServices} href="#">services</a></li>
                                <li><a onClick={scrollToContact} href="#">Contact</a></li>
                                <li><a onClick={scrollToTeam} href="#">Expert Team</a></li>
                                <li><a onClick={scrollToCareers} href="#">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2024, All Right Reserved <a onClick={scrollToHome} href="/">CodeNexo</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                        <div className="copyright-text powered-by">
                            <p>Powered by <a onClick={scrollToHome} href="/">CodeNexo</a></p>
                        </div> 
                            <ul>
                                <li><a onClick={scrollToHome} href="#">Home</a></li>
                                {/* <li><a href="#">Terms</a></li> */}
                                {/* <li><a href="#">Privacy</a></li> */}
                                {/* <li><a href="#">Policy</a></li> */}
                                <li><a onClick={scrollToContact} href="#">Contact</a></li>
                            </ul>     
 
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
  )
}

export default Footer