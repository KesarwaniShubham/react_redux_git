import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import buyToffee from "../redux/toffee/ToffeeAction";

function InputElementBuyToffee() {
  const numberOfToffee = useSelector((state) => state.toffee.numOftoffee);
  const dispatch = useDispatch();
  const [inputDataToffee, setInputDataToffee] = useState(0);
  return (
    <div>
      <br />
      {numberOfToffee}
      <br />
      <input
        alt="input buy toffee"
        onChange={(e) => {
          setInputDataToffee(e.target.value);
        }}
        value={inputDataToffee}
      />
      <button
        onClick={() => {
          dispatch(buyToffee(inputDataToffee));
        }}
      >
        Buy toffee
      </button>
    </div>
  );
}

export default InputElementBuyToffee;
