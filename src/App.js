import React from 'react';
import Nav from "../src/components/Nav";
import Home from "../src/components/Home";
import About from "../src/components/About";
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />   
          <Route path="/about" exact component={About} />        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
