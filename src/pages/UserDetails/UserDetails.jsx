import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllUserById } from "../../API/api";

const UserDetails = () => {
  const { userId } = useParams();
  console.log(userId);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const user = await fetchAllUserById(userId);
      setUser(user);
    };
    getData();
  }, [userId]);
  return (
    <div>
      <h3>User Details</h3>
    </div>
  );
};

export default UserDetails;
