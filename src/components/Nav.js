import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import PutterlyImage from "../assets/images/putterly.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from  "../assets/tailwind.css";
import PutterlyImage2 from "../assets/images/putterly2.png";
import PutterlyImage3 from "../assets/images/putterly3.png";


library.add(fab)

function Nav() {

return(
<nav className="flex justify-around items-center text-black bg-white">
    <div className="logo">
        <img src={PutterlyImage3} className="h-24" />
    </div>
    <ul className="nav-links flex justify-around w-3/12 lg:w-2/5 md:w-2/4 sm:w-4/5 tracking-widest font-bold uppercase">
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Write</a>
        </li>
        <li>
            <a href="#">Login</a>
        </li>
    </ul>
    <div className="burger hidden">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
    </div>


</nav>


);
}


export default Nav;
