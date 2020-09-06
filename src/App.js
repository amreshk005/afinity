import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Component } from "react";
import Listing from "./components/Listing/Listing";
import { Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className="container-fluid  p-0">
        <Route render={({ history }) => <Navbar history={history} />} />
        <Route path="/" exact render={() => <Listing />} />
        <Route path="/checkout" render={() => <Checkout />} />
      </div>
    );
  }
}

export default App;
