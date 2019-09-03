import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Food from "./components/Food";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={(props) => <Home />} />
        <Route path="/cart/" render={(props) => <Cart />} />
        <Route path="/food/:id" render={(props) => <Food /> } />
      </Router>
    </div>
  );
}

export default App;
