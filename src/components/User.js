import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchUser from "../redux/user/userAction";

function User() {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [u, setU] = useState([]);
  useEffect(() => {
    setU(userData.users.map);
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
      {u.map((user) => {
        <ul>
          <li key={user.id}>
            {console.log(user.name)}
            <h2>user.name</h2>
          </li>
        </ul>;
      })}
    </div>
  );
}

export default User;
