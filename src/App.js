import React from 'react';
import Nav from "../src/components/Nav";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import WriteThemDown from "../src/components/WriteThemDown";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />   
          <Route path="/writethem" exact component={WriteThemDown} />        
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
