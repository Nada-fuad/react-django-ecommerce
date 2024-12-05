import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, productReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
// Beispiel für Reducer-Kombination
const reducer = combineReducers({
  productList: productsReducer,
  productD: productReducer,
  cart: cartReducer,
});

const cartProductFromStorage = localStorage.getItem("cartProduct")
  ? JSON.parse(localStorage.getItem("cartProduct"))
  : [];
const initialState = {
  cart: { cartProduct: cartProductFromStorage },
};

const middleware = [thunk];

// Store erstellen
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
