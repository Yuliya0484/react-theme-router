import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchUserById } from "../../API/api";
import s from "./UserDetails.module.css";

const UserDetails = () => {
  const { userId } = useParams();
  console.log(userId);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const user = await fetchUserById(userId);
      setUser(user);
      setIsLoading(false);
    };
    getData();
  }, [userId]);
  if (!user) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={s.user_box}>
      <h3>User Details</h3>
      <img className={s.user_image} src={user.image} alt="User image" />
      <h3 className={s.user_name}>
        {user.lastName}
        {user.firstName}
      </h3>
      <p className={s.user_text}>Email: {user.email}</p>
      <p className={s.user_text}>Age: {user.age}</p>

      <nav className={s.user_nav}>
        <ul className={s.user_navlist}>
          <li>
            <Link className={s.nav_link} to="info">
              Info
            </Link>
          </li>
          <li>
            <Link className={s.nav_link} to="posts">
              Posts
            </Link>
          </li>
          {/*localhost:5173/users/5/posts */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserDetails;
