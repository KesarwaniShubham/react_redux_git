import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUser from "../redux/user/userAction";

function User() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [u, setU] = useState([]);
  useEffect(() => {
    setU(userData.users);
  }, [userData]);
  return (
    <div>
      <div>Users</div>

      <br />
      <button
        onClick={() => {
          dispatch(fetchUser());
        }}
      >
        fetch users
      </button>
      <br />
      {u.map(function (d) {
        return <li key={d.id}>{d.name}</li>;
      })}
    </div>
  );
}

export default User;
