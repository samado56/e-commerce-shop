import { useState } from "react";
import { AuthContext } from "./AuthCntext";

const AuthProvider = ({ children }) => {
  const USERNAME_KEY = "username";
  const TOKEN_KEY = "token";
  const localUser = localStorage.getItem(USERNAME_KEY);
  const localToken = localStorage.getItem(TOKEN_KEY);

  const [username, setUsername] = useState(localUser);
  const [token, setToken] = useState(localToken);
  const [myOrders, setMyOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const url = "http://localhost:5000/user/my-orders";

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const orders = await res.json();

      if (!res.ok) return;

      setMyOrders([...orders]);
    } catch (err) {
      console.log(err);
    }
  };

  const login = (username, token) => {
    setUsername(username);
    setToken(token);
    localStorage.setItem(USERNAME_KEY, username);
    localStorage.setItem(TOKEN_KEY, token);
  };

  const logout = () => {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TOKEN_KEY);
    setUsername(null);
    setToken(null);
  };

  const isLogedin = !!token;

  return (
    <AuthContext.Provider
      value={{
        username,
        token,
        isLogedin,
        myOrders,
        login,
        logout,
        fetchOrders,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
