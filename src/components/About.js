import React from "react";
import nyxImage1 from "../assets/images/burag2.png";

function About() {
return (
    <div className="about-div h-screen text-white">
        <h1>OUR FOUNDERS</h1>
    
        <div className="founder-div"> 
            <div className="founder-img-div">
                <img src={nyxImage1} />
            </div>

            <div className="founder-story">
                <h2>Burag Ciftci</h2>
                <p>Spending his university years in Izmir helped a great deal in his Bar & Cocktail Business skills and let himself improve on this business a lot.</p>
                <p>Afterwards he practiced what he learned by using his skills </p>
            </div>

        
        
        </div>

    </div>
    );

}


export default About;