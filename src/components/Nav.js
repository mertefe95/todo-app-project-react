import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from  "../assets/tailwind.css";

library.add(fab)

function Nav() {

return(
<header className="header bg-red-600 h-54">

    <div className="nav-logo">

    </div>

    <nav className="nav-links-icons">
        <ul className="nav-links">
            <li><a href="#">HOME</a></li>
            <li><a href="#">PHOTO GALLERY</a></li>
            <li><a href="#">MERCHANDISE</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#"></a></li>
        </ul>

        <ul className="nav-icons">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </nav>

</header>
);
}


export default Nav;
