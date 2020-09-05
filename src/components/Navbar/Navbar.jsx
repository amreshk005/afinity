import React from "react";
import "antd/dist/antd.css";
import { Popover, Button } from "antd/es";
import { cartRemove, cartUpdate } from "../../redux/action";
import { connect } from "react-redux";
import ProductCard from "../productCard/productCard";

function Navbar(props) {
  const text = <span>Cart</span>;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <span className="navbar-brand">Navbar</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="mr-lg-5 pr-lg-5 position-relative">
            <div className="border rounded-circle bg-dark position-absolute text-center text-white" style={{ height: "25px", width: "25px", zIndex: "10", top: "-12px", left: "-12px" }}>
              {props.cart.length}
            </div>

            <Popover placement="bottom" title={text} content={<ProductCard />} trigger="click">
              <Button>CART</Button>
            </Popover>
          </div>
          <div className="row pr-lg-5 align-items-center mr-lg-5">
            <div className="border rounded-circle bg-dark" style={{ height: "45px", width: "45px" }}></div>
            <span className="p-2">Username</span>
          </div>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    cartRemove: (payload) => dispatch(cartRemove(payload)),
    cartUpdate: (payload) => dispatch(cartUpdate(payload)),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(Navbar);
