import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "../redux/cakes/CakeActions";

const CakeContainer = () => {
  const numberOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <br />
      {numberOfCakes}
      <br />
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Cake
      </button>
    </>
  );
};
export default CakeContainer;
