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
<div className="header bg-orange-600 h-40 flex">       
    <div className="logo-container">
        <Zoom>
        <a href="/"><img className="logo-putterly h-full pl-20 py-4" src={PutterlyImage3}/></a>
        </Zoom> 
    </div>   

    <nav className="navbar flex text-white items-center pl-64">       
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>

        <div className="links-and-icons flex justify-center items-center">
            <Zoom>
            <ul className="links flex uppercase px-10 text-sm font-semibold">
                <li className="px-4"><a href="/menu">Menu</a></li>
                <li className="px-4"><a href="/about">About</a></li>
                <li className="px-4"><a href="/writethem">Write Them</a></li>
                <li className="px-4"><a href="/login">Login</a></li>
            </ul>
            </Zoom>            
        </div>
    </nav>
</div>

);
}


export default Nav;
