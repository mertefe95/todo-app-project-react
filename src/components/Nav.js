import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faYelp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faBars, faBullhorn, faHome, faImages, faWarehouse } from '@fortawesome/free-solid-svg-icons';

library.add(fab)

function Nav() {

return(
<header className="header">

<nav className="nav text-white uppercase h-40 pt-10 sm:pt-5 flex md:px-10 flex-col justify-center items-center h-full">

        <div className="logo-div">
            <a href="/" class="logo"><h2 className="text-center text-3x1 md:text-5xl">NYX BAR & COCKTAIL</h2></a>
        </div>
    
        <ul className="menu-links main-nav text-center text-x1 md:text-3xl ">
            <li className="py-2">
                <a href="/">Home</a>
            </li>
            <li className="py-2">
                <a href="/about">About</a>
            </li>
            <li className="py-2">
                <a href="/maindrinks">MAIN DRINKS</a>
            </li>
            <li className="py-2 mb-1">
                <a href="/cocktails">COCKTAILS</a>
            </li>
        </ul>

        <ul className="icons-links main-nav-2 mt-18  text-center md:text-4xl">
            <li className="py-1">       
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            </li>
            <li className="py-1">
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li className="py-1">
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
            <li className="py-1">
                <a href="#"><FontAwesomeIcon icon={faBullhorn} /></a>
            </li>
        </ul>

    
</nav>
</header>
);
}

export default Nav;
