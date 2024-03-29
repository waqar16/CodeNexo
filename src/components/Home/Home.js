import React from "react";
import styles from './Home.module.css'


function Home() {
    return (
        <div className={`${styles.bgImage}`} >
            <div className={`${styles.content}`}>
                <div>
                    <h1 className={`${styles.h1} ${styles.headline} ${styles.slideIn}`}>
                        We Build Digital Products That Power Businesses
                    </h1>
                     <h4 className={`${styles.tagline} ${styles.fadeIn}`}>
                        <span className={`${styles.span}`}>Our products help businesses improve, connect and empower their business processes.</span>
                     </h4>
                     <a type="button" className={`btn ${styles.customBtn} ${styles.slideIn}`} >Learn more</a>
                 </div>
            </div>
        </div>
    );
}

export default Home;