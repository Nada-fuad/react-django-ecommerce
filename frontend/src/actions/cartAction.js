import { ADD_TO_CART } from "../constants/cartConstants";
import axios from "axios";
export const addtoCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);

  console.log("🚀 ~ addtoCart ~ data:", data);
  if (!data || !data._id) {
    throw new Error("Produktdaten sind nicht korrekt oder nicht gefunden");
  }
  dispatch({
    type: ADD_TO_CART,
    payload: {
      _id: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem(
    "cartProduct",
    JSON.stringify(getState().cart.cartProduct)
  );
};
