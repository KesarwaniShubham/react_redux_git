import React from "react";
import buyIceCream from "../redux/iceCream/IceCreamAction";
import { useDispatch, useSelector } from "react-redux";

function IceCreamContainer() {
  const numberOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      {numberOfIceCream}
      <br />
      <button
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        Buy IceCream
      </button>
    </div>
  );
}

export default IceCreamContainer;
