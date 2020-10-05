import React from 'react';
import Nav from "../src/components/Nav";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import Menu from "../src/components/Menu";
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/Home" component={Home} />
        <Route path="/Menu" component={Menu} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
