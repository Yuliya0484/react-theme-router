import { useState, useEffect } from "react";
import { fetchAllUsers } from "../../API/api";
import UserList from "../../components/UserList/UserList";
import SearchBar from "../../components/SearchBar/SearchBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchAllUsers();
      setUsers(data);
    };
    getData();
  }, []);
  return (
    <div className="container">
      <h2>Users from API</h2>
      <SearchBar />
      <UserList users={users} />
    </div>
  );
};

export default Users;
