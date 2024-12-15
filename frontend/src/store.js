import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, productReducer } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  userDetailReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateDetailReducer,
} from "./reducers/userReducer";
// Beispiel für Reducer-Kombination
const reducer = combineReducers({
  productList: productsReducer,
  productD: productReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  userUpdateProfile: userUpdateDetailReducer,
});
const cartProductFromStorage = localStorage.getItem("cartProduct")
  ? JSON.parse(localStorage.getItem("cartProduct"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  cart: { cartProduct: cartProductFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

// Store erstellen
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
