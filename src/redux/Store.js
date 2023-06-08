import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CombineRootReducer from "./CombineRootReducer";

const Store = createStore(CombineRootReducer, applyMiddleware(thunk));
export default Store;
