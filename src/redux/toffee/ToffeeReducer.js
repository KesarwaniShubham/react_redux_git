import { BUY_TOFFEE } from "./ToffeeType";

const initialToffeeState = {
  numOftoffee: 32,
};

const ToffeeReducer = (state = initialToffeeState, action) => {
  switch (action.type) {
    case BUY_TOFFEE:
      return {
        ...state,
        numOftoffee: state.numOftoffee - action.payload,
      };
    default:
      return state;
  }
};
export default ToffeeReducer;
