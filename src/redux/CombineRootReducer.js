import { combineReducers } from "redux";
import cakeReducer from "./cakes/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import ToffeeReducer from "./toffee/ToffeeReducer";

const CombineRootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  toffee: ToffeeReducer,
});
export default CombineRootReducer;
