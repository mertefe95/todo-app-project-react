import React from 'react';
import Nav from "../src/components/Nav";
import Home from "../src/components/Home";
import About from "../src/components/About";
import MainDrinks from "../src/components/MainDrinks";
import Cocktails from "../src/components/Cocktails";
import BeerAndWine from "../src/components/BeerAndWine";
import WhiskyAndVodka from "../src/components/WhiskyAndVodka";
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />   
          <Route path="/about" exact component={About} />   
          <Route path="/maindrinks" exact component={MainDrinks} /> 
          <Route path="/cocktails" exact component={Cocktails} /> 
          <Route path="/beerandwine" exact component={BeerAndWine} />
          <Route path="/whiskyandvodka" exact component={WhiskyAndVodka} />          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
