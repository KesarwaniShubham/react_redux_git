import { combineReducers } from "redux";
import cakeReducer from "./cakes/CakeReducer";
import IceCreamReducer from "./iceCream/IceCreamReducer";
import ToffeeReducer from "./toffee/ToffeeReducer";
import userReducer from "./user/userReducer";

const CombineRootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  toffee: ToffeeReducer,
  user: userReducer,
});
export default CombineRootReducer;
