import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";
import MyMenuImage from "../assets/images/my-menu.jpg";


function Menu() {
return(
<div class="menu-page-container">
    <img src={MyMenuImage} className="p-24"/>
</div>
);
}

export default Menu;