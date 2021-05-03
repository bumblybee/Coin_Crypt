import React, { useState } from "react";
import { UserContext } from "./UserContext";
import { signup, login } from "../../api/userApi";
import { subscribePush } from "../../custom-service-worker";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (userDetails) => {
    const subscription = await subscribePush();
    const data = { userDetails, subscription };
    const userData = await signup(data);
    userData.data && setUser(userData.data);

    return userData;
  };

  const logIn = async (userDetails) => {
    const subscription = await subscribePush();

    const userData = await login(userDetails);
    userData.data && setUser(userData.data);

    return userData;
  };

  return (
    <UserContext.Provider value={{ signUp, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
