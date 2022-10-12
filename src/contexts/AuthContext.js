import { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "../services/constants";
import { UserApi } from "../services/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const isAuth = async () => {
      const cuser = getUserData();
      if (cuser) {
        const response = await UserApi(cuser.id);
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
