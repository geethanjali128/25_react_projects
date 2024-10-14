import React from "react";
import UserList from "./UserList";

const withLoading = (usersList) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) return <div>...Loading</div>;

    return <UserList {...props} />;
  };
};

export default withLoading;
