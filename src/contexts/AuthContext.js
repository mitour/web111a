import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);

  const isAuthenticated = () => {
    const user = localStorage.getItem("user");
    if (!user) return;
    return JSON.parse(user);
  };

  useEffect(() => {
    const isAuth = async () => {
      let cuser = isAuthenticated();
      if (cuser) {
        const API = `${window.location.protocol}//${window.location.hostname}:3000/users/${cuser.id}`;
        const options = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: cuser.authorization,
          },
        };
        const response = await fetch(API, options);
        const responseJson = await response.json();
        setUser(responseJson.data);
      } else {
        setUser(null);
      }
    };
    isAuth();
  }, [auth]);
  return (
    <AuthContext.Provider value={{ setAuth, auth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
