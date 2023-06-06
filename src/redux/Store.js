import { createStore } from "redux";
//import thunk from "redux-thunk";
import CombineRootReducer from "./CombineRootReducer";

const Store = createStore(CombineRootReducer);
export default Store;
