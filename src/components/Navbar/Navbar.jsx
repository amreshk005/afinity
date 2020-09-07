import React, { Component } from "react";
import "antd/dist/antd.css";
import { Popover, Button } from "antd/es";
import { Link } from "react-router-dom";
import { cartRemove, cartUpdate, authHandler } from "../../redux/action";
import { connect } from "react-redux";
import ProductCard from "../productCard/productCard";
import Login from "../Login/Login";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      badge: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: false, visible: false });
    this.props.authHandler();
    this.props.history.push({ pathname: "/", fromDashBoard: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  hide = () => {
    this.setState({
      badge: false,
    });
  };

  handleVisibleChange = (badge) => {
    this.setState({ badge });
  };

  render() {
    let { visible, loading } = this.state;
    const text = "Cart";
    let { location } = this.props.history;

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
            {this.props.isLogin ? (
              <div className="mr-lg-5 pr-lg-5 position-relative">
                <div className="border rounded-circle bg-dark position-absolute text-center text-white" style={{ height: "25px", width: "25px", zIndex: "10", top: "-12px", left: "-12px" }}>
                  {this.props.cart.length}
                </div>

                <Popover placement="bottom" title={text} content={<ProductCard hide={this.hide} location={location.pathname} />} trigger="click" visible={this.state.badge} onVisibleChange={this.handleVisibleChange}>
                  <Button>CART</Button>
                </Popover>
              </div>
            ) : (
              ""
            )}
            <div className="row pr-lg-5 align-items-center mr-lg-5">
              {this.props.isLogin ? (
                <>
                  <div className="border rounded-circle bg-dark" style={{ height: "45px", width: "45px" }}></div>
                  <li className="nav-item dropdown list-group">
                    <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Username
                    </span>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <span className="dropdown-item" onClick={this.handleOk}>
                        Logout
                      </span>
                    </div>
                  </li>
                </>
              ) : (
                <div>
                  <div role="button" onClick={this.showModal}>
                    Login
                  </div>
                  <Login visible={visible} loading={loading} handleOk={this.handleOk} handleCancel={this.handleCancel} />
                </div>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }
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
