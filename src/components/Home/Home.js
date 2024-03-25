import React from "react";
import './Home.module.css';

function Home() {
    return (
        <>
            <div class="content">
                <div>
                    <h1 class="headline slide-in">
                        We Build Digital Products That Power Businesses
                    </h1>
                     <h4 class="tagline fade-in">
                        <span>Our products help businesses improve, connect and empower their business processes.</span>
                     </h4>
                     <button type="button" className="btn custom-btn-contact slide-in" >Learn more</button>
                 </div>
            </div>
        </>
    );
}

export default Home;