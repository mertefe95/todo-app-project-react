import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import RealWhiteLogo from "../assets/images/real-white-logo.png";
import MenuImage from "../assets/images/new-menu.jpg";
import Coffee1 from "../assets/images/coffee1.png";
import Coffee2 from "../assets/images/coffee2.png";
import Coffee3 from "../assets/images/coffee3.png";
import Tiger from "../assets/images/tigerz.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";

function Home() {
return (
<div className="main">
    <div className="slider"></div>

    <div className="menu-container flex justify-center">
        <Zoom duration={2000}>
        <img className="menu h-screen" src={MenuImage}/>
        </Zoom>
    </div>

    <div className="order-ahead-container flex justify-start items-center flex-col">
        <div className="order-ahead-upper">
            <Slide right>
            <h2 className="order-ahead text-white tracking-widest font-semibold text-5xl">ORDER AHEAD</h2>
            </Slide>
        </div>
        <div className="order-ahead-below">
            <button className="order-ahead-btn text-base mt-8 border-2 py-3 px-6 text-white outline-none">Now Available</button>   
        </div>
    </div>

    <div className="three-images-container grid p-24 h-full">
        <div className="three-images-upper-container flex justify-center items-center ">
            <Fade>
            <img className="p-15 pb-10 pr-20" src={Coffee1} />
            </Fade>
            <Fade duration={2000} delay={300}>
            <img className="p-16" src={Coffee2} />
            </Fade>
        </div>
    
    
        <div className="three-images-lower-container flex items-center justify-center pr-48 ">
            <Fade duration={3000} delay={400}>           
            <img className="pr-8" src={Coffee3} />
            </Fade>   
            <ul className="three-images-ul">
                <li className="pb-6 text-lg">Follow us on social</li>
                <li><button className="border-2 tracking-wide px-5 py-3 bg-white cursor-pointer">Instagram</button></li>
            </ul>          
        </div>
    </div>

    <div className="story-container text-white bg-black flex flex-col justify-center items-center">
        <Fade>
        <ul className="story-ul">
            <li className="text-2xl">HUG A MUG's story starts in the late 90s when boba was first introduced to the TR.</li>
            <li className="text-center pt-10"><button className="py-3 px-5 border-2 border-solid tracking-wide text-base">Our Story</button></li>
        </ul>
        </Fade>
    </div>

    <div className="tiger-container bg-black">
        <img className="tiger-image" src={Tiger}/>
    </div>
</div>
);
}


export default Home;
