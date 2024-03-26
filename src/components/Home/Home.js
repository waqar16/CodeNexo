import React from "react";
import './Home.css';

function Home() {
    return (
        <>
            <div className="content">
                <div>
                    <h1 className="headline slide-in">
                        We Build Digital Products That Power Businesses
                    </h1>
                     <h4 className="tagline fade-in">
                        <span>Our products help businesses improve, connect and empower their business processes.</span>
                     </h4>
                     <button type="button" className="btn custom-btn-contact slide-in" >Learn more</button>
                 </div>
            </div>
        </>
    );
}

export default Home;