import React from "react";
import "antd/dist/antd.css";
import { Popover, Button } from "antd/es";
import { Link } from "react-router-dom";
import { cartRemove, cartUpdate, authHandler } from "../../redux/action";
import { connect } from "react-redux";
import ProductCard from "../productCard/productCard";
import Login from "../Login/Login";

function Navbar(props) {
  const text = <span>Cart</span>;
  console.log(props);
  function logoutHandler() {
    props.authHandler();
    props.history.push({ pathname: "/" });
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <Link to="/">
          <span className="navbar-brand">Navbar</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          {props.isLogin ? (
            <div className="mr-lg-5 pr-lg-5 position-relative">
              <div className="border rounded-circle bg-dark position-absolute text-center text-white" style={{ height: "25px", width: "25px", zIndex: "10", top: "-12px", left: "-12px" }}>
                {props.cart.length}
              </div>

              <Popover placement="bottom" title={text} content={<ProductCard />} trigger="click">
                <Button>CART</Button>
              </Popover>
            </div>
          ) : (
            ""
          )}
          <div className="row pr-lg-5 align-items-center mr-lg-5">
            {props.isLogin ? (
              <>
                <div className="border rounded-circle bg-dark" style={{ height: "45px", width: "45px" }}></div>
                <li className="nav-item dropdown list-group">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Username
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" onClick={logoutHandler}>
                      Logout
                    </a>
                  </div>
                </li>
              </>
            ) : (
              <>
                <span data-toggle="modal" data-target="#loginModalCenter">
                  Login
                  <Login history={props.history} />
                </span>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isLogin: state.isLogin,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    cartRemove: (payload) => dispatch(cartRemove(payload)),
    cartUpdate: (payload) => dispatch(cartUpdate(payload)),
    authHandler: (payload) => dispatch(authHandler(payload)),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(Navbar);
