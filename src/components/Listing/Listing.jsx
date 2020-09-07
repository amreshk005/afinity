import React, { Component } from "react";
import { fetchData, cartAdder, addFilter, authHandler } from "../../redux/action";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Login from "../Login/Login";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      filter: "Fashion",
      loading: false,
      visible: false,
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    this.setState({ loading: false, visible: false });
    this.props.authHandler();
    this.props.history.push({ pathname: "/" });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  componentDidMount() {
    this.props.fetchData();
  }

  cartHandler = (item) => {
    let userId = JSON.parse(localStorage.getItem("userId"));
    this.props.cartAdder({ userId: userId, selectedItem: { ...item, quantity: 1 } });
  };

  FilterHandler = (e) => {
    let type = e.target.getAttribute("name");
    this.setState({
      filter: type === "ShowAll" ? "Fashion" : type,
    });
    this.props.addFilter(e.target.getAttribute("name"));
  };
  render() {
    const { visible, loading } = this.state;
    let products = this.props.data;
    let realData = JSON.parse(localStorage.getItem("data"));
    let getCategory = {};
    realData &&
      realData.forEach((element) => {
        if (!getCategory[element.category]) {
          getCategory[element.category] = 1;
        }
      });

    return (
      <div className="row m-0 mt-4 flex-column flex-sm-column flex-md-column  flex-lg-row justify-content-between flex-nowrap">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
          <div className="col border h-100 d-flex flex-md-row flex-sm-row flex-lg-column  justify-content-sm-around justify-content-lg-start">
            {[...Object.keys(getCategory), "ShowAll"].map((e) => (
              <div key={uuidv4()} className="card m-2">
                <div name={e} className="card-body text-capitalize " style={{ cursor: "pointer" }} onClick={this.FilterHandler}>
                  {e}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-8 col-sm-12 border p-0">
          <div className="col p-0 ">
            <div className="card m-3 border-0">
              <h5 className="card-title text-capitalize">Products under {this.state.filter}</h5>
            </div>
            <div className="row m-0 ">
              {!products ? (
                <div> Loading...</div>
              ) : (
                products.map((item) => (
                  <div key={uuidv4()} className="mt-3 flex-nowrap w-sm-50 col-5 col-sm-3 col-md-3 ml-3 ml-sm-3 ml-md-3 ml-lg-0" style={{ height: "20rem" }}>
                    <div className="card border h-100">
                      <img className="card-img-top h-50" src={item.product_image} alt="Card cap" />
                      <div className="card-body d-flex flex-start flex-column p-1 justify-content-between">
                        <div className="p-3">
                          <h5 className="card-title text-capitalize">{item.product_name}</h5>
                          <p>Price: {item.price}</p>
                        </div>
                        {this.props.isLogin ? (
                          <button className="btn btn-dark pl-4 pr-5 text-center rounded-0" onClick={() => this.cartHandler(item)}>
                            Add to Cart
                          </button>
                        ) : (
                          <>
                            <button className="btn btn-dark pl-4 pr-5 text-center rounded-0" onClick={this.showModal}>
                              Add to Cart
                            </button>
                            <Login visible={visible} loading={loading} handleOk={this.handleOk} handleCancel={this.handleCancel} />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
    isLoading: state.isLoading,
    isLogin: state.isLogin,
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    fetchData: (payload) => dispatch(fetchData(payload)),
    cartAdder: (payload) => dispatch(cartAdder(payload)),
    addFilter: (payload) => dispatch(addFilter(payload)),
    authHandler: (payload) => dispatch(authHandler(payload)),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(Listing);
