import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import RealWhiteLogo from "../assets/images/real-white-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";

function Footer() {
return (
<div className="footer">
    <div className="footer-logo-container flex justify-center items-center pt-8">
        <Zoom> <img src={RealWhiteLogo} className="h-full"/> </Zoom>
    </div>

    <div className="footer-content-container flex justify-between items-center text-white mx-56">
        <Zoom>
        <ul className="left-footer text-sm">
            <li className="p-1">HUG A MUG COFFEE SHOP</li>
            <li className="p-1">DUATEPE, SAVAS STREET. NO: 2</li>
            <li className="p-1 mb-3">34000 SISLI/ISTANBUL/TURKEY</li>
            <li className="p-1">&copy; 2020 HUG A MUG COFFEE SHOP.</li>
            <li className="p-1">Artwork by Mert</li> 
        </ul>
        </Zoom>

        <Zoom>
        <ul className="middle-footer text-center pr-16">
            <li className="text-lg my-4 mx-0">Hours (updated hours due to COVID-19)</li>
            <li className="text-sm p-1">Tuesday — Thursday</li>
            <li className="text-sm p-1">11am — 8pm</li>
            <li className="text-sm p-1">Friday — Sunday</li>
            <li className="text-sm p-1">11am — 9pm</li>
            <li className="text-sm p-1 my-4 mx-0">Closed on Monday</li>
        </ul>
        </Zoom>

        <Zoom>
        <ul className="right-footer underline text-right text-lg">
            <li><a>Contact Us</a></li>
            <li><a>Careers</a></li>
            <li><a>Returns & Shipping</a></li>
            <li><a>Privacy Policy</a></li>
        </ul>
        </Zoom>
    </div>
</div>
);
}

export default Footer;