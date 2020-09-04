import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Component } from "react";
import Listing from "./components/Listing/Listing";

class App extends Component {
  render() {
    return (
      <div className="container-fluid  p-0">
        <Navbar />
        <Listing />
      </div>
    );
  }
}

export default App;
