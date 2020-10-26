import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";


function Home() {
return (
<main className="main">
    <div className="first-content-div relative flex justify-center items-center">
        <img src="/images/bg-image.png" className="first-bg-img " />
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
            <a href="#">
                <div className="menu-div-logo h-54">
                    <img src="/images/beer-1.jpg" className="" /> 
                </div> 
                <div className="cocktail-menu-content ml-8 mb-10 absolute bottom-0 text-white">
                    <h2 className="uppercase px-2 py-2">MAIN DRINKS</h2>
                    <p className="uppercase px-2 py-2">View Menu</p>
                </div>
            </a>   
        </div>

        <div className="cocktails-menu relative">
            <a href="#"> 
                <div className="cocktail-div-logo">
                    <img src="/images/newcocktail4.webp" />
                </div>
                <div className="cocktail-menu-content ml-8 mb-10 absolute bottom-0 text-white">
                    <h2 className="uppercase px-2 py-2">COCKTAILS</h2>
                    <p className="uppercase px-2 py-2">View Menu</p>
                </div>
            </a>
        </div>
    </div>

    <div className="reservation-div flex">
        <div className="reservation-content w-full text-center flex justify-center items-center flex-col text-white">
            <h2 className="uppercase text-5xl tracking-wider mb-8">Private Events</h2>
            <a className="border-2 border-solid border-white py-4 px-8 uppercase" href="#">LEARN MORE</a>
        </div>
    </div>


    <div className="instagram-div flex">
        <div className="instagram-content w-full text-center flex justify-center items-center flex-col text-white">
            <h2 className="uppercase text-5xl tracking-widest mb-8">Follow us on <br/> instagram</h2>
            <a className="border-2 border-solid border-white py-4 px-8 uppercase" href="#">@NYXBAR</a>
        </div>
    </div>



    
</main>
);
}


export default Home;
