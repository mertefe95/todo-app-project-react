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
<div className="body">

<div className="main">
  <div className="slider">
  
  </div>

  <div className="menu-container flex justify-center">
    <Zoom duration={2000}>
    <img className="menu h-screen" src={MenuImage}/>
    </Zoom>
  </div>
  
  <div className="order-ahead-container h-64 flex justify-start items-center">
      <div className="order-ahead-content pl-64">
        <ul className="order-ahead-ul"> <Slide right>
          <li className="order-ahead text-white text-5xl tracking-widest font-semibold">ORDER AHEAD</li> </Slide>
          <li className="mt-6"><button className="order-ahead-btn border-2 py-3 px-5 text-white outline-none text-sm">Now Available</button></li>
        </ul>
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
    <img src={Tiger}/>
  </div>
</div>

  
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
</div>

);
}


export default Home;
