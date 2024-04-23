import React from "react";
import styles from './Home.module.css';

function Home() {
    const videoSources = [
        "/Assets/background-video/bg-video01.mp4",
        "/Assets/background-video/bg-video02.mp4",
        "/Assets/background-video/bg-video03.mp4",
        "/Assets/background-video/bg-video04.mp4",
    ];

    const randomVideoSource = videoSources[Math.floor(Math.random() * videoSources.length)];
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

    return (
        <div className={`${styles.bgVideo}`}>
            <video className={styles.video} autoPlay muted loop>
                <source src={randomVideoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={`${styles.content}`}>
                <div>
                    <h1 className={`${styles.h1} ${styles.headline} ${styles.slideIn}`}>
                        We Build Digital Products That Power Businesses
                    </h1>
                    <h4 className={`${styles.tagline} ${styles.fadeIn}`}>
                        <span className={`${styles.span}`}>Our products help businesses improve, connect and empower their business processes.</span>
                    </h4>
                    <a type="button" onClick={scrollToServices} className={`btn ${styles.customBtn} ${styles.slideIn}`}>Learn more</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
