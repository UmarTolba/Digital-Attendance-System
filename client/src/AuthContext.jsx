// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Will hold the user object {id, email, ...}

  const login = (userData) => {
    if (userData.email === "@admin") {
    userData.role = "admin";
  } else {
    userData.role = "user";
  }
    setUser(userData);
    localStorage.setItem('userEmail', userData.email); 
    localStorage.setItem('userRole', userData.role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};