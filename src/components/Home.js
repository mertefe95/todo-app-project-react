import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";
import nyx from "../assets/images/bg-image.png";
import mainImg from "../assets/images/beer-1.jpg";
import cocktailImg from "../assets/images/cocktail-5.jpg";

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

    <div className="menus-div">
        <div className="main-drinks-menu relative"> 
            <a href="#"> <img src={mainImg} /> </a>
            <div className="cocktail-menu-content absolute bottom-0 text-white">
                <h2 className="uppercase">COCKTAILS</h2>
                <p className="uppercase">View Menu</p>
            </div>
            
        </div>

        <div className="cocktails-menu relative">
            <a href="#"> <img src={cocktailImg} /> </a>
            <div className="cocktail-menu-content absolute bottom-0 text-white">
                <h2 className="uppercase">COCKTAILS</h2>
                <p className="uppercase">View Menu</p>
            </div>
        </div>

    </div>
</main>
);
}


export default Home;
