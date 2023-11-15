// AuthContext.js
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(null);

  const setLoggedInUser = (userEmail) => {
    setEmail(userEmail);
  };

  return (
    <AuthContext.Provider value={{ email, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
