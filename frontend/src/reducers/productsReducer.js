import {
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCT_FAIL,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "../constants/productConstants";
import products from "../products";

export const productsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCTS_FAIL:
      return {
        laoding: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export const productReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_FAIL:
      return {
        laoding: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
