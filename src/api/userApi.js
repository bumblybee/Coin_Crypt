import axios from "axios";

export const signup = async (data) => {
  const res = await axios.post("http://localhost:7777/users", data);
  return res;
};

export const login = async (data) => {
  const res = await axios.post("http://localhost:7777/users/login", data);
  return res;
};
