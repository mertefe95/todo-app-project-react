import React from 'react';
import Nav from "../src/components/Nav";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />     
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
