import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TailwindCSS from "../assets/tailwind.css";
import nyx from "../assets/images/bg-image.png";

function Home() {
return (
<main className="home-main h-screen">
    
        <div className="upper-content-above relative">
            
            <img src={nyx} className="h-full w-full" />
            
            <div className="upper-content-text text-center absolute top-0 left-0 flex flex-col w-full h-full text-white p-2 ">
                <h2 className="text-4xl mt-20 uppercase">Welcome to Nyx Bar & Cocktail</h2>
                <h3 className="text-2xl mt-8 tracking-widest uppercase">Your local kadikoy bar. No, not that one.</h3>
                <h3 className="text-2xl tracking-widest uppercase">The other one, the one you love.</h3>
                <h3 className="text-2xl tracking-widest uppercase">Focusing on all things crafted - from booze & brews to the</h3>
                <h3 className="text-2xl tracking-widest uppercase">Finest fare.</h3>
                <p className="text-base mt-10">Nyx Bar & Cocktail harks back to 2000's era. One of craftmanship and authenticity, of dimly lit encounters and great converrsations.</p>
                <p className="text-base mt-6">Our well-informed barkeeps pour local craft beers, hand-drawn ales, a selection of our very favorite wines, a wide range of spirits and liquors, and carefully crafted</p>
                <p className="text-base">cocktails.</p>
                <p className="text-base mt-6">As for food, only the best seasonal and local ingredients are found under our roof - served simply and deliciously.</p>

                <hr className="hr-div mt-8 w-4/5 ml-40 border-none bg-white"/>
            </div>

            
            <div className="upper-content-below  absolute bottom-0 text-center w-full text-white ">
            <ul className="upper-content-below-ul flex flex-row justify-evenly items-center mb-24">
                <li>
                    <h4 className="uppercase font-bold mb-4">Location</h4>
                    <p> 
                        Kozyatagi District, Kayasultan Street.
                    <br/>
                        No:11/3 Istanbul/Turkey
                    </p>
                </li>
                <li>
                    <h4 className="uppercase font-bold mb-4">Hours</h4>
                    <p>
                        Updated hours on Instagram <a href="#">@xxxx</a>
                    </p>     
                </li>
                <li>
                    <h4 className="uppercase font-bold mb-4">Contact</h4>
                    <p>
                        info@nyxbar.com
                        <a href="#">(212) 300-4924</a>
                    </p>
                </li>
            </ul>
            </div>

        </div>

    
</main>
);
}


export default Home;
