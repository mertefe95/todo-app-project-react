import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faYelp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faHome, faImages, faWarehouse } from '@fortawesome/free-solid-svg-icons';

library.add(fab)

function Nav() {

return(
<header className="header bg-red-600 h-32 flex justify-around">

    <div className="icons-div flex flex-col justify-center items-center">
        <h2 className="underline">SOCIAL MEDIA</h2>
        <ul className="nav-icons flex">
            <li className="px-4"><a href="#"><FontAwesomeIcon icon={faInstagram}/></a></li>
            <li className="px-4"><a href="#"><FontAwesomeIcon icon={faYelp}/></a></li>
            <li className="px-4"><a href="#"><FontAwesomeIcon icon={faFacebookF}/></a></li>
            <li className="px-4"><a href="#"><FontAwesomeIcon icon={faTwitter}/></a></li>
        </ul>
    </div>

    <div className="nav-logo">
        <h1>Logo</h1>
    </div>

    <nav className="nav-links-icons flex justify-between items-center">

        <ul className="nav-links flex flex-row justify-evenly">
            <li><a href="#"><FontAwesomeIcon icon={faHome}/>HOME </a></li>
            <li><a href="#"><FontAwesomeIcon icon={faImages}/>PHOTO GALLERY</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faWarehouse}/>MERCHANDISE</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faBullhorn}/>ABOUT</a></li>
            <li><a href="#"></a></li>
        </ul>

        
    </nav>

</header>
);
}


export default Nav;
