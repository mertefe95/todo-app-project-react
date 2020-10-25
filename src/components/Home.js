import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";
import nyx from "../assets/images/bg-image.png";
import mainImg from "../assets/images/beer-1.jpg";
import cocktailImg from "../assets/images/newcocktail4.webp";
import reservationImage from "../assets/images/bar-background-3.jpg";

function Home() {
return (
<main className="main">
    <div className="first-content-div relative flex justify-center items-center">
        <img src={nyx} className="first-bg-img " />
        <div className="first-div-text absolute top-0 text-center mt-8 mx-8">
            <h1 className="font-bold text-xl xl:mt-24 lg:mt-40 xl:text-5xl xl:mb-4">WELCOME TO NYX</h1>
            <p className="uppercase text-base mt-4 xl:text-3xl xl:mb-6"><strong>
                Your local kadikoy moda bar. No, not that one. <br/>The other one, the one you love.<br/>
                Focusing on all things crafted - from booze & brews to the <br/> finest fare.       
            </strong></p>

            <p className="text-sm mt-4 xl:text-xl">Nyx Bar & Cocktails harks back to a bygone era. One of craftmanship and authenticity, of dimly lit encounters and great conversations.<br/>
            Our well-informed barkeeps pour local craft beers, hand-drawn ales, a selection of our very favorite wines, a wide range of spirits and liquors, and carefully crafted<br/>
            cocktails.<br/>As for food, only the best seasonal and local ingredients are found under our roof - served simply and deliciously.
            </p>    

        </div>
    </div>

    <div className="menus-container grid">
        <div className="main-drinks-menu relative">
            <div className="menu-div-logo h-54">
                <a href="#"> <img src={mainImg} className="" /> </a>
            </div> 
            <div className="cocktail-menu-content absolute bottom-0 text-white">
                <h2 className="uppercase">COCKTAILS</h2>
                <p className="uppercase">View Menu</p>
            </div>
            
        </div>

        <div className="cocktails-menu relative">
            <div className="cocktail-div-logo">
                <a href="#"> <img src={cocktailImg} /> </a>
            </div>
            <div className="cocktail-menu-content absolute bottom-0 text-white">
                <h2 className="uppercase">COCKTAILS</h2>
                <p className="uppercase">View Menu</p>
            </div>
        </div>

    </div>

    <div className="reservation-div grid relative">
        <img src={reservationImage} />
        <div className="below-instagram-content absolute top-0 left-0 w-full text-center mt-64 text-white">
            <h2 className="uppercase text-5xl tracking-wider mb-8 ">Private Events</h2>
            <a className="border-2 border-solid border-white py-4 px-8 uppercase"href="#">LEARN MORE</a>
        </div>
    </div>

 
    <div className="below-instagram relative">
        <img src={nyx} />
        

    </div>
</main>
);
}


export default Home;
