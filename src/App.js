import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Component } from "react";
import Listing from "./components/Listing/Listing";
import { Route, Redirect } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid p-0">
        <Route render={({ history }) => <Navbar history={history} />} />
        <Route path="/" exact render={({ history }) => <Listing history={history} />} />
        <Route path="/checkout" render={({ history }) => (this.props.isLogin ? <Checkout history={history} /> : <Redirect to="" />)} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps, null)(App);
