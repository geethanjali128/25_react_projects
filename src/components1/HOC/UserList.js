import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </div>
  );
};

export default UserList;
