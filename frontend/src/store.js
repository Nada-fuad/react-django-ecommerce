import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer, productReducer } from "./reducers/productsReducer";
// Beispiel für Reducer-Kombination
const reducer = combineReducers({
  productList: productsReducer,
  productD: productReducer,
});

const initialState = {};

const middleware = [thunk];

// Store erstellen
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
