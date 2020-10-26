import React from "react";


function Cocktails() {
return (
    <div className="cocktails-body">
        <div className="cocktails-div ml-10 pt-10">
                <h2 className="text-3xl pb-5">COCKTAILS</h2>
                    <div className="cocktails-container pb-3">
                        <div className="cocktails-inner-container flex justify-between">
                            <h2>SKY IS THE LIMIT</h2> <span className="mr-10">$5</span>
                        </div>
                        <p className="text-sm">Best of Sky is the limit</p>
                    </div>

                    <div className="cocktails-container pb-3">
                        <div className="cocktails-inner-container flex justify-between">
                            <h2>CHERNOBYL</h2> <span className="mr-10">$4</span>
                        </div>
                        <p className="text-sm">Best of Chernobyl</p>
                    </div>

                    <div className="cocktails-container pb-3">
                        <div className="cocktails-inner-container flex justify-between">
                            <h2>RED RUNNER</h2> <span className="mr-10">$4</span>
                        </div>
                        <p className="text-sm">Best of Red Runner</p>
                    </div>

                    <div className="cocktails-container pb-3">
                        <div className="cocktails-inner-container flex justify-between">
                            <h2>GREAT GATSBY</h2> <span className="mr-10">$5</span>
                        </div>
                        <p className="text-sm">Best of Great Gatsby</p>
                    </div>

                    <div className="cocktails-container pb-3">
                        <div className="cocktails-inner-container flex justify-between">
                            <h2>MERCURY</h2> <span className="mr-10">$7</span>
                        </div>
                        <p className="text-sm">Best of Mercury</p>
                    </div>

                    <div className="cocktails-container pb-3">
                        <div className="cocktails-inner-container flex justify-between">
                            <h2>LONG ISLAND</h2> <span className="mr-10">$8</span>
                        </div>
                        <p className="text-sm">Best of Long Island</p>
                    </div>
                    
            </div>
    </div>
    );
}


export default Cocktails;