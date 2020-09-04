import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchGetRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCT_REQUEST,
  };
};

export const fetchGetSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    data: data,
  };
};

export const fetchGetFailure = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCT_FAILURE,
    error: error,
  };
};

export const cartAdder = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    product: product,
  };
};

export const cartUpdate = (product) => {
  return {
    type: actionTypes.UPDATE_CART,
    product: product,
  };
};

export const cartRemove = (productId) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    productId: productId,
  };
};

export const fetchData = (query = "") => {
  return async (dispatch) => {
    dispatch(fetchGetRequest(query));
    return await axios
      .get("data/data.json")
      .then((res) => {
        console.log(res.data);
        return dispatch(fetchGetSuccess(res.data));
      })
      .catch((err) => console.log(err));
  };
};

// export { fetchData, fetchGetRequest, fetchGetSuccess, fetchGetFailure,cartAdder, };
