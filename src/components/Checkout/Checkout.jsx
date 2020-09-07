import React, { useEffect, useState } from "react";
import Productcard from "../productCard/productCard";
import { emptyCart } from "../../redux/action";
import { connect } from "react-redux";

function Checkout(props) {
  console.log(props);
  const [totalPrice, setTotalPrice] = useState(0);
  let { location } = props.history;

  useEffect(() => {
    let totalPrice = 0;
    props.cart.forEach((e) => (totalPrice += e.price * e.quantity));
    setTotalPrice(totalPrice);
  }, [props.cart]);

  function handleOrder() {
    alert("Your order is successful");
    props.emptyCart(JSON.parse(localStorage.getItem("userId")));
    props.history.push({ pathname: "/" });
  }
  return (
    <div className="d-flex justify-content-center mt-5">
      <Productcard location={location.pathname} />
      <div class="card w-25 h-50 ml-3">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Total Price: {totalPrice}</li>
        </ul>
        <button type="button" class="btn btn-success" onClick={handleOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: (payload) => dispatch(emptyCart(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
