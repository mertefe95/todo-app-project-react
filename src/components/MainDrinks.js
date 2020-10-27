import React from "react";

function MainDrinks() {
    return (
        <div className="maindrinks-body">
            <div className="maindrinks-upper-container flex flex-col justify-center items-center text-center px-5">
                <h2 className="uppercase text-xl mb-8">Main Drink Menus</h2>
                <p className="uppercase text-sm">We have taken great care to create a menu that reflects our passion for what we do and the products we love, not to mention the people who produce them.</p>
            </div>

            <div className="maindrinks-grid-container flex flex-col">
                <div className="maindrinks-beer-wine relative">
                    <a href="/beerandwine">
                        <div className="main-drinks-logo-div">
                            <img src="/images/newbeer-2.jpg" /> 
                        </div>
                        <div className="cocktail-menu-content ml-8 mb-10 absolute bottom-0 text-white">
                            <h2 className="uppercase px-2 py-2">Beer & Wine</h2>
                            <p className="uppercase px-2 py-2">View Menu</p>
                        </div>
                    </a>  
                </div>

                <div className="maindrinks-whisky-vodka relative">
                    <a href="/whiskyandvodka">
                        <div className="maindrinks-logo-div-second">
                            <img src="/images/whisky2.jpg" /> 
                        </div>
                        <div className="cocktail-menu-content ml-8 mb-10  absolute bottom-0 text-white">
                            <h2 className="uppercase px-2 py-2">Whisky & Vodka</h2>
                            <p className="uppercase px-2 py-2">View Menu</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default MainDrinks;