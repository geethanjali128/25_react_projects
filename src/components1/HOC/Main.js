import { useEffect, useState } from "react";
import UserList from "./UserList";
import withLoading from "./withLoading";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setUsers(["Alice", "Bob", "Charlie"]);
      setIsLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout when component unmounts
    return () => clearTimeout(timeOut);
  }, []);

  const UsersListWithLoading = withLoading(UserList);

  return <UsersListWithLoading isLoading={isLoading} users={users} />;
};

export default Main;
