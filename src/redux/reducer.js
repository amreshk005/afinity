import * as actionTypes from "./actionTypes";

const initStore = {
  isLoading: false,
  data: [],
  error: "",
  cart: [],
};

const reducer = (state = initStore, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: state.error,
      };
    case actionTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: state.data,
        error: action.error,
      };
    case actionTypes.ADD_PRODUCT_TO_CART:
      let newCart = state.cart.filter((item) => item._id === action.product._id).length !== 0 ? state.cart.map((e) => (e._id === action.product._id ? { ...e, quantity: e.quantity + 1 } : e)) : [...state.cart, action.product];
      return {
        ...state,
        cart: newCart,
      };
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.productId),
      };
    case actionTypes.UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map((e) => (e._id === action.product._id ? { ...e, quantity: action.product.quantity } : e)),
      };
    default:
      return state;
  }
};

export default reducer;
