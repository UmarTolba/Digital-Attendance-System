// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Will hold the user object {id, email, ...}

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userEmail', userData.email); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userEmail');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};