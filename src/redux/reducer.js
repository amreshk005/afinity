import * as actionTypes from "./actionTypes";
import Item from "antd/es/list/Item";

const initStore = {
  isLoading: false,
  data: [],
  cart: [],
  error: "",
  isLogin: true,
  user: [
    {
      id: "aisdno",
      username: "amresh",
      password: "amresh",
      cart: [],
    },
  ],
};

const reducer = (state = initStore, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_PRODUCT_SUCCESS:
      let { products } = action.data;
      localStorage.setItem("data", JSON.stringify(products));
      return {
        ...state,
        isLoading: false,
        data: products,
        error: state.error,
      };
    case actionTypes.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: state.data,
        error: action.error,
      };
    case actionTypes.ADD_PRODUCT_TO_CART: {
      let { userId, selectedItem } = action.product;
      let newCart = state.user.map((e) => {
        if (e.id === userId) {
          let item = e.cart.filter((item) => item._id === selectedItem._id).length !== 0 ? e.cart.map((getItem) => (getItem._id === selectedItem._id ? { ...getItem, quantity: getItem.quantity + 1 } : getItem)) : [...e.cart, selectedItem];
          e.cart = item;
          return e;
        } else {
          return e;
        }
      });
      let [cart] = newCart;
      return {
        ...state,
        user: newCart,
        cart: cart.cart,
      };
    }
    case actionTypes.REMOVE_PRODUCT_FROM_CART: {
      let { userId, id } = action.productId;
      let cart = undefined;
      let newCart = state.user.map((e) => {
        if (e.id === userId) {
          let item = e.cart.filter((item) => item._id !== id);
          e.cart = item;
          cart = item;
          return e;
        } else {
          return e;
        }
      });
      return {
        ...state,
        user: newCart,
        cart: cart,
      };
    }
    case actionTypes.UPDATE_CART: {
      let { userId, item } = action.product;
      console.log(userId, item);
      let cart = undefined;
      let newCart = state.user.map((e) => {
        if (e.id === userId) {
          let newItem = e.cart.map((getItem) => (getItem._id === item._id ? { ...getItem, quantity: item.quantity } : getItem));
          console.log("match", newItem);
          e.cart = newItem;
          cart = newItem;
          return e;
        } else {
          return e;
        }
      });
      console.log("cart", cart);
      // let [cart] = newCart;
      return {
        ...state,
        user: newCart,
        cart: cart,
      };
    }
    case actionTypes.FILTER_DATA:
      let getjson = JSON.parse(localStorage.getItem("data"));
      let filteredData = getjson.filter((item) => item.category === action.filterType);
      return {
        ...state,
        data: filteredData.length > 0 ? filteredData : getjson,
      };
    case actionTypes.AUTH_HANDLER:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case actionTypes.EMPTY_CART:
      console.log(action.userId);
      let newCart = state.user.map((e) => {
        if (e.id === action.userId) {
          e.cart = [];
          return e;
        } else {
          return e;
        }
      });
      return {
        ...state,
        user: newCart,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
