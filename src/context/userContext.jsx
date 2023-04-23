/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserContextProvider = (props) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Perform some side effect here, such as fetching data from an API
    axios
      .post("http://localhost:8080/login", {
        email: "john@doe.com",
        password: "johnhaspass",
      })
      .then((data) => {
        console.log("user logged in", data);
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <userContext.Provider value={userData}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
