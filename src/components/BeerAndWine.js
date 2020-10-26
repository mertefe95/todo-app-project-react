import React from "react";

function BeerAndWine() {
    return (
        <div className="beerandwine-body text-left">
            <div className="beer-div ml-10 pt-10">
                <h2 className="text-3xl pb-5">BEERS</h2>
                    <div className="beer-container pb-3">
                        <div className="beer-inner-container flex justify-between">
                            <h2>TUBORG</h2> <span className="mr-10">$5</span>
                        </div>
                        <p className="text-sm">Best of Tuborg</p>
                    </div>

                    <div className="beer-container pb-3">
                        <div className="beer-inner-container flex justify-between">
                            <h2>EFES</h2> <span className="mr-10">$4</span>
                        </div>
                        <p className="text-sm">Best of Efes</p>
                    </div>

                    <div className="beer-container pb-3">
                        <div className="beer-inner-container flex justify-between">
                            <h2>BUD LIGHT</h2> <span className="mr-10">$4</span>
                        </div>
                        <p className="text-sm">Best of Bud Light</p>
                    </div>

                    <div className="beer-container pb-3">
                        <div className="beer-inner-container flex justify-between">
                            <h2>BUDWEISER</h2> <span className="mr-10">$5</span>
                        </div>
                        <p className="text-sm">Best of Budweiser</p>
                    </div>

                    <div className="beer-container pb-3">
                        <div className="beer-inner-container flex justify-between">
                            <h2>HEINEKEN</h2> <span className="mr-10">$7</span>
                        </div>
                        <p className="text-sm">Best of Heineken</p>
                    </div>

                    <div className="beer-container pb-3">
                        <div className="beer-inner-container flex justify-between">
                            <h2>GUINNESS</h2> <span className="mr-10">$8</span>
                        </div>
                        <p className="text-sm">Best of Guinness</p>
                    </div>
                    
            </div>

            <div className="white-wine-div ml-10 pt-10">
                <h2 className="text-3xl pb-5">WHITE WINES</h2>
                    <div className="white-wine-container pb-3">
                        <div className="white-wine-inner-container flex justify-between">
                            <h2>SAUVIGNON BLANC</h2> <span className="mr-10">$5</span>
                        </div>
                        <p className="text-sm">Best of Savuignon</p>
                    </div>

                    <div className="white-wine-container pb-3">
                        <div className="white-wine-inner-container flex justify-between">
                            <h2>PINOT GRIS</h2> <span className="mr-10">$4</span>
                        </div>
                        <p className="text-sm">Best of Pinot Gris</p>
                    </div>

                    <div className="white-wine-container pb-3">
                        <div className="white-wine-inner-container flex justify-between">
                            <h2>UNOAKED CHARDONNAY</h2> <span className="mr-10">$4</span>
                        </div>
                        <p className="text-sm">Best of Chardonnay</p>
                    </div>

                    <div className="white-wine-container pb-3">
                        <div className="white-wine-inner-container flex justify-between">
                            <h2>LUX CHARDONNAY</h2> <span className="mr-10">$5</span>
                        </div>
                        <p className="text-sm">Best of Lux Chardonnay</p>
                    </div>

                    <div className="white-wine-container pb-3">
                        <div className="white-wine-inner-container flex justify-between">
                            <h2>VIOGNIER</h2> <span className="mr-10">$7</span>
                        </div>
                        <p className="text-sm">Best of Viognier</p>
                    </div>

                    <div className="white-wine-container pb-3">
                        <div className="white-wine-inner-container flex justify-between">
                            <h2>COOPER'S WHITE HAWK</h2> <span className="mr-10">$8</span>
                        </div>
                        <p className="text-sm">Best of Cooper's</p>
                    </div>
                    
            </div>

            <div className="red-wine-div ml-10 pt-10">
                <h2 className="text-3xl pb-5">RED WINES</h2>
                    <div className="red-wine-container pb-3">
                        <div className="red-wine-inner-container flex justify-between">
                            <h2>PINOT NOIR</h2> <span className="mr-10">$5</span>
                        </div>
                        <p className="text-sm">Best of Pinot Noir</p>
                    </div>

                    <div className="red-wine-container pb-3">
                        <div className="red-wine-inner-container flex justify-between">
                            <h2>SANGIOVESE</h2> <span className="mr-10">$4</span>
                        </div>
                        <p className="text-sm">Best of Sangioevese</p>
                    </div>

                    <div className="red-wine-container pb-3">
                        <div className="red-wine-inner-container flex justify-between">
                            <h2>LUX PINOT NOIR</h2> <span className="mr-10">$4</span>
                        </div>
                        <p className="text-sm">Best of Lux Pinot Noir</p>
                    </div>

                    <div className="red-wine-container pb-3">
                        <div className="red-wine-inner-container flex justify-between">
                            <h2>BARBERA</h2> <span className="mr-10">$5</span>
                        </div>
                        <p className="text-sm">Best of Barbera</p>
                    </div>

                    <div className="red-wine-container pb-3">
                        <div className="red-wine-inner-container flex justify-between">
                            <h2>MERLOT</h2> <span className="mr-10">$7</span>
                        </div>
                        <p className="text-sm">Best of Merlot</p>
                    </div>

                    <div className="red-wine-container pb-3">
                        <div className="red-wine-inner-container flex justify-between">
                            <h2>MALBEC</h2> <span className="mr-10">$8</span>
                        </div>
                        <p className="text-sm">Best of Malbec</p>
                    </div>
                    
            </div>
        </div>
    
    );
}

export default BeerAndWine;