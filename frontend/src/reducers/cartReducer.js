import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartProduct: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartProduct.find((x) => x._id === item._id);
      if (!item || !item._id) {
        console.error("Ungültiger Payload:", item);
        return state; // Rückgabe des unveränderten Zustands
      }

      if (existItem) {
        return {
          ...state,
          cartProduct: state.cartProduct.map((x) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartProduct: [...state.cartProduct, item],
        };
      }

    default:
      return state;
  }
};
