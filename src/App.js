import React from 'react';

function App() {
  return (
    <div className="body">

      <div className="header bg-black h-40 flex">
        
        <div className="logo-container">
          <img className="h-full pl-20" src="/images/real-white-logo.png"></img>
        </div>

        <div className="navbar-container flex text-white items-center justify-end">
          <div className="links-container">
            <ul className="links-ul flex">
              <li>Menu</li>
              <li>Order</li>
              <li>About</li>
              <li>Shop</li>
            </ul>            
          </div>

          <div className="icons-container">
            <ul className="icons-ul flex">
              <li>Insta</li>
              <li>Yelp</li>
              <li>Face</li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
