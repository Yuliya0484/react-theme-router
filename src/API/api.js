import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const fetchAllUsers = async () => {
  const { data } = await axios.get("/users");
  return data.users;
};
export const fetchAllUserById = async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};
