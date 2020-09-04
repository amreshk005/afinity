import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from "./actionTypes";

const initStore = {
  isLoading: false,
  data: [],
  error: "",
};

const reducer = (state = initStore, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
        error: state.error,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: state.data,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
