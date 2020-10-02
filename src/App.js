import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RealWhiteLogo from "../src/assets/images/real-white-logo.png";
import MenuImage from "../src/assets/images/new-menu.jpg";
import Coffee1 from "../src/assets/images/coffee1.png";
import Coffee2 from "../src/assets/images/coffee2.png";
import Coffee3 from "../src/assets/images/coffee3.png";
import Tiger from "../src/assets/images/tigerz.png";

library.add(fab)

function App() {
  return (
    <div className="body">

      <div className="header bg-black h-40 flex">
        
        <div className="logo-container">
          <Zoom>
            <img className="h-full pl-20" src={RealWhiteLogo}/>
          </Zoom> 
        </div>   

        <div className="navbar-container flex text-white items-center pl-48">
          <div className="links-container">
            <Zoom>
              <ul className="links-ul flex uppercase px-10 text-sm font-semibold">
                <li className="px-4"><a href="#">Menu</a></li>
                <li className="px-4"><a href="#">Order</a></li>
                <li className="px-4"><a href="#">About</a></li>
                <li className="px-4"><a href="#">Shop</a></li>
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

      <div className="main">
        <div className="slider">
        
        </div>

        <div className="menu-container flex justify-center">
          <img className="menu h-screen" src={MenuImage}/>
        </div>
        
        <div className="order-ahead-container h-64 flex justify-start items-center">
            <div className="order-ahead-content pl-64">
              <ul className="order-ahead-ul">
                <li className="order-ahead text-white text-5xl tracking-widest font-semibold">ORDER AHEAD</li>
                <li><button className="order-ahead-btn border-2 py-2 px-4">Now Available</button></li>
              </ul>
            </div>

        </div>

        <div className="three-images-container flex p-24">
          <img className="p-15" src={Coffee1} />
          <img className="p-16" src={Coffee2} />
          <img src={Coffee3} />
          <ul className="three-images-ul">
            <li>Follow us on social</li>
            <li><button className="border-2 ">Instagram</button></li>
          </ul>
        </div>
        
        <div className="story-container text-white bg-black">
        <li>HUG A MUG's story starts in the late 90s when boba was first introduced to the TR.</li>
        <li><button className="py-2 px-2">Our Story</button></li>
        </div>

        <div className="tiger-container bg-black">
          <img src={Tiger}/>
        </div>
      </div>
        <div className="footer flex justify-center bg-black">
          <div className="footer-logo-container">
            <img src={RealWhiteLogo} />
          </div>

          <div className="footer-content-container">
            <ul className="left-footer">
              <li>HUG A MUG COFFEE SHOP</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <ul className="middle-footer">
              <li>Hours(updated hours due to COVID-19)</li>
              <li>Tuesday — Thursday</li>
              <li>11am — 8pm</li>
              <li>Friday — Sunday</li>
              <li>11am — 9pm</li>
              <li>Closed on Monday</li>
            </ul>

            <ul className="right-footer">
              <li><a>Contact Us</a></li>
              <li><a>Careers</a></li>
              <li><a>Returns & Shipping</a></li>
              <li><a>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
  </div>
    
  );
}

export default App;
