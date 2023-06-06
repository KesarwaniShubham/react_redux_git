import { BUY_TOFFEE } from "./ToffeeType";

const buyToffee = (value) => {
  return {
    type: BUY_TOFFEE,
    payload: value,
  };
};
export default buyToffee;
