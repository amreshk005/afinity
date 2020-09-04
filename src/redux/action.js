import axios from "axios";
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from "./actionTypes";

const fetchGetRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

const fetchGetSuccess = (data) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    data: data,
  };
};

const fetchGetFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    error: error,
  };
};

const fetchData = (query = "") => {
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

export { fetchData, fetchGetRequest, fetchGetSuccess, fetchGetFailure };
