import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RealWhiteLogo from "../assets/images/real-white-logo.png";
import TailwindCSS from  "../assets/tailwind.css";

library.add(fab)

function Nav() {
return(
<div className="header bg-black h-40 flex">       
    <div className="logo-container">
        <Zoom>
        <a href="/"><img className="h-full pl-20 py-4" src={RealWhiteLogo}/></a>
        </Zoom> 
    </div>   

    <div className="navbar-container flex text-white items-center pl-64">
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>

        <div className="links-container">
        <Zoom>
        <ul className="links-ul flex uppercase px-10 text-sm font-semibold">
            <li className="px-4"><a href="/menu">Menu</a></li>
            <li className="px-4"><a href="/about">About</a></li>
        </ul>
        </Zoom>            
        </div>

        <div className="icons-container font-semibold text-xl">
            <ul className="icons-ul flex">
                <li className="px-4"><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li className="px-4"><a href="#"><FontAwesomeIcon icon={faYelp}/></a></li>
                <li className="px-4"><a href="#"><FontAwesomeIcon icon={faFacebookF}/></a></li>
            </ul>
        </div>
    </div>
</div>

);
}


export default Nav;
