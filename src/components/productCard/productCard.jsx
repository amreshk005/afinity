import React from "react";
import "antd/dist/antd.css";
import { cartRemove, cartUpdate } from "../../redux/action";
import { connect } from "react-redux";

function ProductCard(props) {
  function quantityHandler(e, item) {
    let { quantity } = item;

    let type = e.target.getAttribute("name");
    switch (type) {
      case "inc":
        quantity += 1;
        break;
      case "dec":
        quantity = quantity > 0 ? quantity - 1 : quantity;
        break;
      default:
        break;
    }
    props.cartUpdate({ ...item, quantity: quantity });
  }

  return (
    <>
      <div className="row flex-column m-0 flex-nowrap" style={{ width: "40rem", height: "30rem", overflow: "scroll" }}>
        {props.cart.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center">Cart is Empty</div>
        ) : (
          <>
            {props.cart.map((item) => (
              <div className="card flex-row border mt-3" style={{ height: "9rem" }}>
                <img src={item.product_image} className="card-img-top h-100 w-25" alt="..." />
                <div className="card-body d-flex justify-content-between p-1 ">
                  <div className="w-50">
                    <h5 className="card-title m-0 text-capitalize">{item.product_name} </h5>
                    <div className="d-flex align-items-center">
                      <span>Quantity :</span>
                      <div className="d-flex flex-column p-2 align-items-center ">
                        <span name="inc" className="p-1 bg-dark rounded-circle w-50 h-50 text-white text-center mb-1" onClick={(e) => quantityHandler(e, item)}>
                          +
                        </span>
                        <input type="number" value={item.quantity} style={{ width: "35px" }} readOnly />
                        <span name="dec" className="p-1 bg-dark rounded-circle w-50 h-50 text-white text-center mt-1" onClick={(e) => quantityHandler(e, item)}>
                          -
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-end">
                    <button className="btn btn-dark rounded-0" onClick={() => props.cartRemove(item._id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
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
export default connect(mapStateToProps, mapDisptachToProps)(ProductCard);
