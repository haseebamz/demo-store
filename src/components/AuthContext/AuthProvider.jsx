import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


   const logOutUser = () => {
    setUser(localStorage.removeItem("user"));

    navigate("/Login")
  };


  return (
    <AuthContext.Provider value={{ user, setUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
