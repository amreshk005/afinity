import React, { Component } from "react";
import { fetchData } from "../../redux/action";
import { connect } from "react-redux";

class Listing extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    let { products } = this.props.data;
    console.log(products);
    return (
      <div className="row justify-content-between flex-nowrap m-0 mt-4">
        <div className="col-4">
          <div className="col border">
            {["category1", "category2", "category3"].map((e) => (
              <div class="card m-2">
                <div class="card-body">This is some text within a card body.</div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-8 border p-0">
          <div className="col p-0">
            <div class="card m-3 border-0">
              <div class="card-body">This is some text within a card body.</div>
            </div>
            <div className="row m-0 ">
              {!products ? (
                <div> Loading...</div>
              ) : (
                products.map((e) => (
                  <div class="card ml-2 mt-3 flex-nowrap" style={{ width: "23%" }}>
                    <img class="card-img-top h-50" src={e.product_image} alt="Card cap" />
                    <div class="card-body">
                      <h5 class="card-title">{e.product_name}</h5>
                      <p>Price: {e.price}</p>
                      <a href="#" class="btn btn-primary">
                        Add to Cart
                      </a>
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
  };
};
export default connect(mapStateToProps, mapDisptachToProps)(Listing);
