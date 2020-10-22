import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faYelp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faHome, faImages, faWarehouse } from '@fortawesome/free-solid-svg-icons';

library.add(fab)

function Nav() {

return(
<header className="header">

    <nav className="nav flex justify-around items-center text-white uppercase h-40 pt-20">
        <div className="logo-div">
            <h2 className="mr-64">NYX BAR & COCKTAIL</h2>
        </div>
    
        <div className="links-icons-div flex">
            <ul className="menu-links flex">
                <li className="px-2"><a href="/">Home</a></li>
                <li className="px-2"><a href="/about">About</a></li>
                <li className="px-2"><a href="#">Contact</a></li>
                <li className="px-2"><a href="#">Projects</a></li>
            </ul>

            <ul className="icons-links flex">
                <li className="px-2"><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li className="px-2"><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li className="px-2"><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="px-2"><a href="#"><FontAwesomeIcon icon={faBullhorn} /></a></li>
            </ul>
        </div>
    </nav>
</header>
);
}


export default Nav;
