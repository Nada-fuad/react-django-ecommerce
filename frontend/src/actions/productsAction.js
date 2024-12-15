import {
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_REQUEST });
    const { data } = await axios.get("http://127.0.0.1:8000/api/products/");

    dispatch({ type: PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_FAIL,
      payload:
        error.reponse && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/products/${id}/`
    );

    dispatch({ type: PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_FAIL,
      payload:
        error.reponse && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
