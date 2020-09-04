import React, { Component } from "react";
import { fetchData, cartAdder } from "../../redux/action";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      data: [],
    };
  }
  componentDidMount() {
    this.props.fetchData();
  }
  // shouldComponentUpdate(prevProps, prevState){
  //   if(prevProps.data != this.state)
  // }

  cartHandler = (item) => {
    console.log(item);
    this.props.cartAdder({ ...item, quantity: 1 });
  };
  render() {
    let { products } = this.props.data;
    return (
      <div className="row justify-content-between flex-nowrap m-0 mt-4">
        <div className="col-4">
          <div className="col border">
            {["category1", "category2", "category3"].map((e) => (
              <div key={uuidv4()} className="card m-2">
                <div className="card-body">{e}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-8 border p-0">
          <div className="col p-0">
            <div className="card m-3 border-0">
              <h5 className="card-title">Products under all</h5>
            </div>
            <div className="row m-0 ">
              {!products ? (
                <div> Loading...</div>
              ) : (
                products.map((item) => (
                  <div key={uuidv4()} className="card ml-2 mt-3 flex-nowrap" style={{ width: "23%", height: "20rem" }}>
                    <img className="card-img-top h-50" src={item.product_image} alt="Card cap" />
                    <div className="card-body d-flex flex-start flex-column p-1 justify-content-between">
                      <div className="p-3">
                        <h5 className="card-title text-capitalize">{item.product_name}</h5>
                        <p>Price: {item.price}</p>
                      </div>
                      <button className="btn btn-dark pl-4 pr-5 text-center rounded-0" onClick={() => this.cartHandler(item)}>
                        Add to Cart
                      </button>
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
  };
};
const mapDisptachToProps = (dispatch) => {
  return {
    fetchData: (payload) => dispatch(fetchData(payload)),
    cartAdder: (payload) => dispatch(cartAdder(payload)),
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(Listing);
